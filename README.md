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

This will start two web services: quotation-web-service in port 3000, and user-web-service in port 3001
