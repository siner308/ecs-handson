FROM node:alpine

COPY index.js /app/index.js
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

WORKDIR /app

RUN npm install

ENTRYPOINT ["node", "index.js"]
