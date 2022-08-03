FROM node:14-alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json tsconfig.json
COPY tsconfig.build.json tsconfig.build.json
COPY src src
RUN ["yarn","add","global","@nestjs/cli"]
RUN ["yarn", "install"]

ENTRYPOINT ["yarn","run","start"]