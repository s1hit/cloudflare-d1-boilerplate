# cloudflare-d1-boilerplate

## Overview

Boilerplate for quick start on Cloudflare pages and Cloudflare D1.

## Requirements

- Cloudflare account
- Node.js v16+

## Install

### 1. npm

```
npm i
```

### 2. Create D1 DataBase

```
npm run create-db -- YOUR_DB_NAME
```

### 3. Connect to D1 from a Pages functions

Append the previous command output to wrangler.toml.

```
[[ d1_databases ]]
binding = "DB" # i.e. available in your Worker on env.DB
database_name = "YOUR_DB_NAME"
database_id = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
```

### 4. Create table(Local PC: SQLite)

`schema.sql` is the database definition.
To reflect this, run the following command.

```
npm run create-table:local
```

check the contents of SQLite.

```
npm run exec-sql -- "select * from memo"
```

### 5. DEV

#### index.html

The sample is a memo application.
Feel free to edit it.

#### functions/\*\*

CRUD API to access D1.

#### Debugging

```
npm run dev
```

Access: http://localhost:8788/

### 6. Create table(Cloudflare D1)

```
npm run create-table:prod
```

### 7. Deploy pages

```
npm run deploy
```

> Enter the name of your new project: YOUR_PROJECT_NAME  
> Enter the production branch name: production

### 8. D1 binding

1. Access: https://dash.cloudflare.com/
2. Pages > YOUR_PROJECT_NAME
3. Settings > Functions > D1 database bindings > [Add binding]
4. Valiable name = `DB` / D1 database = `YOUR_DB_NAME` > [Save]

## Licence

- [MIT](https://github.com/s1hit/cloudflare-d1-boilerplate/blob/main/LICENSE)
