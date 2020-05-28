FROM yarnpkg/node-yarn
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install --silent
COPY . .
CMD ["yarn", "start"]