FROM mhart/alpine-node:14
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
EXPOSE $PORT
CMD ["yarn", "dev"]
