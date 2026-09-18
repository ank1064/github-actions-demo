FROM node:20-bookworm-slim AS build
WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev || true
COPY src ./src
RUN mkdir -p dist && cp src/index.js dist/index.js

FROM node:20-bookworm-slim
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/dist ./dist
COPY package.json ./
EXPOSE 3000
CMD ["node", "dist/index.js"]
