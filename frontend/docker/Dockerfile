FROM node:16.13.2-alpine3.15

EXPOSE 3000

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

RUN mkdir /app/
COPY package.json /app/
COPY package-lock.json /app/

WORKDIR /app/

RUN npm install --frozen-lockfile

COPY . .

RUN npm run build

CMD ["npm", "run", "dev"]
