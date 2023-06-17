FROM node:alpine

WORKDIR /app

EXPOSE 3003

# Install pnpm globally
# RUN npm install -g pnpm typescript concurrently
RUN npm install -g pnpm typescript

# COPY package.json pnpm-lock.yaml ./

# COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# COPY ./api ./api
# COPY ./client ./client

COPY ./.deploy ./

# Install all dependencies using pnpm
RUN pnpm install
# RUN pnpm install --recursive

RUN pnpm build
# RUN pnpm --filter api build
# RUN pnpm --filter client build

ENV NODE_ENV=production

# ENTRYPOINT ["node", "dist/src/index.js"]
CMD ["pnpm", "start"]