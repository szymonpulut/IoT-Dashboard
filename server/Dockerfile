# Build stage
FROM node:20-alpine as build
WORKDIR /usr/app/server
COPY package*.json .
RUN npm ci --production=false
COPY ./src ./src
COPY ./tsconfig.json .
COPY ./.env .
RUN npm run build

# Serve stage
FROM alpine:3 as serve
WORKDIR /root/
COPY --from=build /usr/app/server/. .

RUN apk add --no-cache nodejs npm
RUN npm install -g tsx

CMD ["tsx", "./src/server.ts"]