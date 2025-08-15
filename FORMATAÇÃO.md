# Configuração de Formatação Padronizada

Este projeto agora possui uma configuração padronizada de formatação que garante consistência entre ESLint, Prettier e auto format do VSCode.

## 🎯 Objetivo

Resolver o problema de conflitos entre:

- Linter do Cursor
- Prettier do Cursor
- Auto format
- Comandos de formatação do npm

## 📋 Comandos Disponíveis

### Formatação Simples (Recomendado)

```bash
npm run code:format
```

Apenas formata o código com Prettier, sem tentar corrigir erros de linting.

### Formatação Completa

```bash
npm run code:fix
```

Formata o código e tenta corrigir erros de linting automaticamente.

### Outros Comandos

```bash
npm run format          # Formata com Prettier
npm run format:check    # Verifica se o código está formatado
npm run lint            # Executa linting
npm run lint:fix        # Executa linting e tenta corrigir
```

## ⚙️ Configurações

### Prettier (`.prettierrc`)

- **Semi**: `true` (ponto e vírgula obrigatório)
- **SingleQuote**: `true` (aspas simples)
- **TrailingComma**: `all` (vírgula no final)
- **PrintWidth**: `100` (largura máxima da linha)
- **TabWidth**: `2` (indentação de 2 espaços)
- **UseTabs**: `false` (usa espaços, não tabs)
- **EndOfLine**: `lf` (quebra de linha Unix)

### ESLint

- Configuração centralizada em `eslint.config.mjs`
- Integração com Prettier para evitar conflitos
- Regras específicas para TypeScript e React/Next.js
- Todas as regras de formatação delegadas ao Prettier

### VSCode (`.vscode/settings.json`)

- Prettier como formatador padrão
- Formatação automática no save
- Correção automática de ESLint no save
- Configurações específicas para TypeScript

### EditorConfig (`.editorconfig`)

- Configurações consistentes entre editores
- Indentação de 2 espaços
- Quebra de linha Unix
- Remoção de espaços em branco no final

## 🔧 Como Usar

### 1. Formatação Manual

Execute o comando de formatação quando quiser:

```bash
npm run code:format
```

### 2. Formatação Automática

O VSCode está configurado para formatar automaticamente quando você salva um arquivo.

### 3. Verificação de Formatação

Para verificar se o código está formatado corretamente:

```bash
npm run format:check
```

## 🚨 Resolução de Problemas

### Se o auto format não funcionar

1. Verifique se a extensão Prettier está instalada no VSCode
2. Verifique se a extensão ESLint está instalada no VSCode
3. Reinicie o VSCode
4. Execute `npm run code:format` para formatar tudo

### Se houver conflitos

1. Execute `npm run code:format` para formatar tudo
2. Se ainda houver problemas, execute `npm run code:fix`
3. Verifique se as configurações do VSCode estão corretas

## 📝 Arquivos de Configuração

- `.prettierrc` - Configuração do Prettier
- `.prettierignore` - Arquivos ignorados pelo Prettier
- `eslint.config.mjs` - Configuração centralizada do ESLint
- `.vscode/settings.json` - Configurações do VSCode
- `.editorconfig` - Configurações do EditorConfig

## 🎉 Resultado

Agora você tem:

- ✅ Formatação consistente em todo o projeto
- ✅ Auto format funcionando corretamente
- ✅ Comando simples para formatar tudo
- ✅ Sem conflitos entre linter e formatter
- ✅ Configuração padronizada para toda a equipe
