# Sympla Monorepo

Este é o monorepo oficial do projeto **Sympla**, estruturado com três workspaces principais:

- **sympla-api** → API construída com NestJS.
- **sympla-web** → Frontend em Next.js (em desenvolvimento).
- **@sympla/prisma** → Projeto dedicado ao schema e client do Prisma, compartilhado entre os outros pacotes.

---

## 📁 Estrutura do projeto

---

sympla-mono/
├── packages/
│   ├── sympla-api/       → Backend NestJS
│   ├── sympla-web/       → Frontend Next.js (em breve)
│   └── sympla-prisma/    → Prisma schema + client
├── package.json          → Scripts centralizados
├── .gitignore
└── README.md             → Este arquivo
---

---

## 🚀 Primeiros passos

1 Instale as dependências de todos os pacotes:

```bash
npm install
```

2 Configure seu banco de dados no arquivo `.env` dentro de `packages/sympla-prisma`:

```env
DATABASE_URL="mysql://usuario:senha@host:porta/banco"
```

---

## 🛠️ Scripts disponíveis (executar da raiz)

### 🔁 Prisma

| Comando                    | Descrição                                 |
|---------------------------|-------------------------------------------|
| `npm run prisma:generate` | Gera o client Prisma                      |
| `npm run prisma:migrate`  | Executa `migrate dev` no banco local      |
| `npm run prisma:deploy`   | Aplica as migrations em produção          |
| `npm run prisma:studio`   | Abre o Prisma Studio                      |

### 🚧 API

| Comando                | Descrição                          |
|------------------------|------------------------------------|
| `npm run start:api`    | Inicia a API em modo dev (NestJS)  |
| `npm run build:api`    | (opcional) Compila a API           |

### 🧪 Web (em breve)

| Comando               | Descrição                          |
|-----------------------|------------------------------------|
| `npm run start:web`   | Inicia o frontend em modo dev      |
| `npm run build:web`   | Compila o frontend para produção   |

---

## 📌 Observações importantes

- O client Prisma gerado fica em:  
  `packages/sympla-prisma/generated/prisma`

- Para que os imports funcionem corretamente no `sympla-api`, configure o `tsconfig.json` com:

```json
"paths": {
  "@sympla/prisma": ["../sympla-prisma/generated/prisma"]
}
```

---

## 💡 Dicas úteis

- **Commit inicial do monorepo?**  
  Remova os `.git` internos dos subprojetos antes de `git init`.

```bash
rm -rf packages/*/.git
git init
git add .
git commit -m "feat: estrutura inicial do monorepo"
```

---

## 🧙‍♂️ Mantenedor

Desenvolvido por [@xavierheitor](https://github.com/xavierheitor)
