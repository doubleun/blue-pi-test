### HOW TO SETUP (Local)

1. Install `pnpm`
2. Install client dependencies `pnpm --filter client install`
3. Install server api dependencies `pnpm --filter api install`
4. Run client `pnpm --filter client dev`
5. Run the server api `pnpm --filter api dev`

#### SETUP MONGODB

**OPTION 1 (Recommend):**

1. run `docker-compose up -d` in the root project the database will be initiate using default data
2. connect using `mongosh --host localhost --port 27017 --authenticationDatabase admin -u root -p password`

**OPTION 2:** NO DEFAULT DATA

In `api` workspace setup the `.env` for `MONGO_URI` If you want to run locally via Docker follow these steps:

1. run `docker pull mongo`
2. run `docker network create mongo-network` (if you want to connect mongo to the network along with other containers)
3. run `docker run -d --name mongodb --network mongo-network -p 27017:27017 mongo` (skip the `--network mongo-network` if network is not needed)
4. connect app via `mongodb://localhost:27017/blue-pi-vending` (change "blue-pi-vending" to the correct collection name)
5. connect shell using `mongosh` run `mongosh --host localhost --port 27017`
