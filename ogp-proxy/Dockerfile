FROM node:12.18

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn --prod

COPY . .

CMD yarn start
