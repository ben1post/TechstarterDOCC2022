FROM node:18-alpine
WORKDIR /inventoory
COPY . .
RUN yarn install --production
CMD ["node", "inventoory.js"]