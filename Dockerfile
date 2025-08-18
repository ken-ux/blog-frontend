FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN npm ci

ENV VITE_API_URL=http://localhost:3000

CMD ["npm", "run", "preview", "--", "--host"]