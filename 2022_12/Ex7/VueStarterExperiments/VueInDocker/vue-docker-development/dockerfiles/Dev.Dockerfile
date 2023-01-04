FROM node:14-alpine

WORKDIR /vue_app

COPY package*.json ./

#RUN npm install

EXPOSE 8080

CMD [ "npm", "run", "serve" ]