# Quotation Service

## Table of Contents

- [Development](#Development)

## Development

Install node

``` bash
nvm install 8.11.0 && nvm use 8.11.0
```

Install Lerna

``` bash
npm install -g lerna
```

Bootstrap dependencies

``` bash
lerna bootstrap
```

Build Packages

``` bash
lerna run build
```

Run Migrations

``` bash
lerna run migrate
```

Run Seeds to populate data bases

``` bash
lerna run seed
```

Start Dev Server

``` bash
lerna run start
```

This will start three web services: quotation-react-client at port 3000, user-web-service at port 3001 and quotation-web-service at port 3002
