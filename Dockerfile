FROM node:lts-alpine

MAINTAINER wr_zhang25

RUN mkdir -p /usr/src/app
COPY . /usr/src/app/
WORKDIR /usr/src/app

RUN ls
RUN node -v
RUN npm install pnpm -g
RUN pnpm i
RUN pnpm run build

EXPOSE 8080
CMD ["pnpm", "run","server" ]
