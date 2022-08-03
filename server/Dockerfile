# FROM node:14-alpine AS builder
# WORKDIR "/server"
# COPY . .
# RUN yarn install
# RUN yarn build
# FROM node:14-alpine AS production
# WORKDIR "/server"
# COPY --from=builder /app/package.json ./package.json
# COPY --from=builder /app/yarn.lock ./yarn.lock
# COPY --from=builder /app/dist ./dist
# COPY --from=builder /app/node_modules ./node_modules
# EXPOSE 3000/tcp
# CMD [ "sh", "-c", "yarn start:prod"]

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