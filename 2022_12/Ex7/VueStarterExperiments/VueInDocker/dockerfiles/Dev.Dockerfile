FROM node:16

WORKDIR /vue_app

COPY package*.json ./

EXPOSE 8080

CMD [ "npm", "run", "serve" ]