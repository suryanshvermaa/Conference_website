FROM node:20-bookworm-slim

COPY package*.json ./
RUN npm install --only=production

COPY . .

EXPOSE 3000

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodejs

USER nodejs
EXPOSE 3000
ENV PORT=3000

CMD [ "npm", "run", "start" ]

