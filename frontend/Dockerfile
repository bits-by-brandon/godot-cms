FROM node:16.14

WORKDIR /app
COPY . .
RUN yarn install
EXPOSE 5173

ENTRYPOINT ["yarn", "dev", "--host", "0.0.0.0"]
