FROM node:10

EXPOSE 3000

RUN mkdir /micro-node-mongo-ts
WORKDIR /micro-node-mongo-ts

COPY . /micro-node-mongo-ts
RUN npm install

RUN npm run build
