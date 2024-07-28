import { Client } from 'pg';

const client = new Client({
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  host: process.env.DATABASE_HOST,
  port: Number.parseInt(process.env.DATABASE_PORT, 10),
  database: process.env.DATABASE_NAME,
});

let isConnected = false;
async function getClient() {
  if (isConnected) {
    return client;
  }

  isConnected = true;
  await client.connect();
  return client;
}

export default getClient;
