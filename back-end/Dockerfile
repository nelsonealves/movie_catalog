FROM node:16-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY package.json .
COPY . . 

RUN yarn install
# RUN yarn prisma:push
RUN yarn prisma:generate
RUN yarn swagger:autogen



EXPOSE 4000

CMD ["yarn", "start"]