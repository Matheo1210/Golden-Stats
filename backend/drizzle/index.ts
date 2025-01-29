import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Mets ton URL PostgreSQL ici
});

export const db = drizzle(pool);
