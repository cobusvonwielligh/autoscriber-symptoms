# autoscriber-symptoms
## Autoscriber Technical Assessment

This application forms part of a technical assessment for Autoscriber. A basic Vue.js front-end which allows the user to enter text, which will be highlighted if it matches any of the symptoms, scraped using a Nest.js server from https://www.nhsinform.scot/symptoms-and-self-help/a-to-z/.

The application features a client (Vue.js & TypeScript) and a REST API server (Nest.js, OpenAPI (Swagger) & TypeScript)

## Getting Started

Following these instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [yarn](https://classic.yarnpkg.com/en/)  `npm i yarn`
- [Node](https://nodejs.org/en/) ^v14.4.0

### Installing

- Clone the repository using HTTPS

```cp
git clone https://github.com/cobusvonwielligh/autoscriber-symptoms.git
```

```cp
cd autoscriber-symptoms
yarn
```

# Run Client

```cp
cd client
yarn dev
```

- Client Endpoint : http://localhost:4200

# Run Server

```cp
cd server
yarn start
```

- Server Endpoint : http://localhost:5173/

## Environments

There are 2 environments each corresponding to a branch on the repository:

- Production - `master` branch
- Development - `dev` branch

## Client

- [Vue.js](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)

## Server

- [Nest.js](https://nestjs.com/)
- [OpenAPI (Swagger)](https://docs.nestjs.com/openapi/introduction) 
- [TypeScript](https://www.typescriptlang.org/)

## CD/CI

Continuous Deployment and Integration is setup using [Netlify] (https://www.netlify.com/)

- Production: https://autoscriber.netlify.app/
- Development: https://autoscriber-dev.netlify.app/

## File Structure/ Project Structure

Within the download you will find the following directories and files:

```
autoscriber-symptoms/

├── client
│   ├─── patches
│   ├─── public
│   ├─── src
|   │   ├─── assets
|   |        ├─── base.css
|   |        ├─── logo.png
|   |        ├─── main.css
|   |   ├─── components 
|   |         ├─── SymptomIO.vue 
|   |   ├─── App.vue 
|   |   ├─── main.ts
|   ├─── env.d.ts
|   ├─── index.html
|   ├─── package.json
|   ├─── README.md
|   ├─── tsconfig.config.json
├─── tsconfig.json
├─── vite.config.json
├─── yarn.lock
|
├── server
│   ├─── src
|   │   ├─── crawler
|   │         ├─── crawler.controller.ts
|   |         ├─── crawler.module.ts
|   |         ├─── crawler.service.ts
|   │   ├── app.controller.spec.ts
|   │   ├── app.controller.ts
|   │   ├── app.module.ts
|   |   ├── app.service.ts
|   |   ├── main.ts
|   ├── package.json
|   ├── README.md
|   ├── tsconfig.json
|   ├── tsconfig.build.json   
|   ├── yarn.lock
|
├── LICENSE    
├── README.md
```

## Author

- **Cobus von Wielligh** <cobus@resembler.ai>

## Licenses

```
├─ MIT: 953
├─ ISC: 78
├─ BSD-3-Clause: 37
├─ BSD-2-Clause: 29
├─ Apache-2.0: 26
├─ MIT*: 8
├─ BSD: 5
├─ (MIT OR CC0-1.0): 5
├─ CC0-1.0: 4
├─ WTFPL: 2
├─ Unlicense: 2
├─ 0BSD: 2
├─ Custom: https://github.com/tmcw/jsonlint: 1
├─ BSD-3-Clause OR MIT: 1
├─ (MIT OR Apache-2.0): 1
├─ CC-BY-4.0: 1
├─ Public Domain: 1
├─ AFLv2.1,BSD: 1
├─ (MIT AND Zlib): 1
├─ (MIT AND BSD-3-Clause): 1
└─ CC-BY-3.0: 1
```

## Meta

| Version | Author                              | Date       |
| ------- | ----------------------------------- | ---------- |
| 0.0.1   |  <cobus@resembler.ai>               | 03/08/2022 |
