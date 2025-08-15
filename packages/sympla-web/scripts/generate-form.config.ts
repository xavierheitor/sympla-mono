/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDMMF } from '@prisma/internals';
import path from 'path';
import inquirer from 'inquirer';
import fs from 'fs';

async function main() {
  const schemaPath = path.resolve(
    __dirname,
    '../../../packages/sympla-prisma/prisma/schema.prisma',
  );
  console.log('dirname', __dirname);
  console.log('schemaPath', schemaPath);
  const dmmf = await getDMMF({
    datamodel: fs.readFileSync(schemaPath, 'utf-8'),
  });

  const modelChoices = dmmf.datamodel.models.map((m) => m.name);
  const { modelName } = await inquirer.prompt([
    {
      type: 'list',
      name: 'modelName',
      message: 'Selecione o modelo Prisma:',
      choices: modelChoices,
    },
  ]);

  const model = dmmf.datamodel.models.find((m) => m.name === modelName);
  if (!model) throw new Error('Modelo não encontrado');

  const fieldsConfig: any[] = [];

  for (const field of model.fields) {
    const { include } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'include',
        message: `Incluir o campo "${field.name}"?`,
        default: true,
      },
    ]);

    if (!include) continue;

    let fieldType = field.type;
    if (field.kind === 'enum') {
      fieldType = 'enum';
    } else if (field.kind === 'object') {
      fieldType = 'relation';
    }

    const config: any = { name: field.name, type: fieldType };

    if (fieldType === 'enum') {
      config.enumSource = field.type;
    }

    if (fieldType === 'relation') {
      const { relationField, labelField } = await inquirer.prompt([
        {
          type: 'input',
          name: 'relationField',
          message: `Qual campo ID da entidade relacionada para "${field.name}"?`,
          default: 'id',
        },
        {
          type: 'input',
          name: 'labelField',
          message: `Qual campo de label da entidade relacionada para "${field.name}"?`,
          default: 'nome',
        },
      ]);
      config.relation = { model: field.type, relationField, labelField };
    }

    fieldsConfig.push(config);
  }

  const outputPath = path.resolve(__dirname, `../configs/${modelName}.json`);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(fieldsConfig, null, 2));
  console.log(`✅ Configuração salva em ${outputPath}`);
}

main().catch((e) => {
  console.error('Erro:', e);
  process.exit(1);
});
