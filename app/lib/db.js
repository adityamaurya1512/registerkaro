// lib/db.js
import { Pool } from 'pg';

// Set up the connection string (use your Neon DB URL here)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,  // Use your Neon database URL here
});

// Export the pool for querying
export default pool;
