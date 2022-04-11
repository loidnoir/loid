FROM node:16.14.2-alpine3.15

WORKDIR /loid-website/

COPY . .

RUN yarn
RUN yarn install
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]