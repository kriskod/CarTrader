FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=5000

EXPOSE 5000

CMD ["npm", "start"]

# docker build -t kriskarot/cartrader:1.0 .
# docker run <id>
#docker run -p 5000:8080 <id>