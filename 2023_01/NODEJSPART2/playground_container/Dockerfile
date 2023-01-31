FROM node:18-alpine
WORKDIR /sqlite-test
COPY . .
RUN yarn install --production
CMD ["node", "main.js"]
