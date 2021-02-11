FROM node:15

RUN mkdir -p /usr/app

COPY . /usr/app

WORKDIR /usr/app

RUN npm install

EXPOSE 8080

CMD ["node", "index.js"]