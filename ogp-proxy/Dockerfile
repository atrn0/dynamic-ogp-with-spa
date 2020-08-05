FROM node:12.18

WORKDIR /ogp-proxy

COPY package.json .
COPY yarn.lock .
RUN yarn --prod

COPY . .

CMD yarn start
