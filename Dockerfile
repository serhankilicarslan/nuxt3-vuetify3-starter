# FROM nexusrepo.fw.eurekosigorta.com.tr:9001/node:16-alpine
FROM node:20-alpine

# RUN apk update && apk add bash


WORKDIR /usr/src/eureko-sigorta-web

COPY package.json ./

# RUN echo "registry=http://nexusrepo.fw.eurekosigorta.com.tr/repository/npm-all/" > .npmrc;
#RUN npm config set strict-ssl false

#RUN npm install -g npm

RUN npm i

COPY . .

RUN npm run build

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000

# CMD [ "npm", "run", "preview" ]
# CMD ["node", "src/.output/server/index.mjs"]
CMD ["node", ".output/server/index.mjs"]