FROM node:14-alpine
WORKDIR /farmagedon
COPY package.json package-lock.json ./
RUN npm install --ignore-scripts --frozen-lockfile
COPY . .
RUN npm run build
CMD ["node", "dist/main.js"]

