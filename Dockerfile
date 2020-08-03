FROM node:slim

COPY index.js /app/index.js
COPY package.json /app/package.json
COPY package.json /app/package-lock.json

WORKDIR /app

RUN npm install

ENTRYPOINT ["node", "index.js"]
