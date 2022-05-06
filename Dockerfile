FROM node:16-alpine AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install glob rimraf --force

RUN npm install --only=development

COPY . .

RUN npm run build

FROM node:16-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

FROM nginx:1.21.6

COPY --from=development /usr/src/app/nginx.conf /etc/nginx/nginx.conf
COPY --from=development /usr/src/app/build /build
