FROM node:20-alpine

WORKDIR /frontend/

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g http-server

EXPOSE 8080

CMD [ "http-server", "dist" ]