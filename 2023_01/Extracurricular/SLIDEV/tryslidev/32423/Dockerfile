FROM node:18-alpine
COPY . .
WORKDIR /slidev
RUN npm install
CMD ["npx", "slidev", "--remote"]