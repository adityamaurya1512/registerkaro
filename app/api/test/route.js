// app/api/test/route.js
import pool from '../../lib/db';  

export async function GET(req) {
  try {
    // Query to fetch the list of tables from the database
    const result = await pool.query(`
      SELECT tablename
      FROM pg_catalog.pg_tables
      WHERE schemaname = 'public';
    `);

    console.log('Tables in the database:', result.rows);

    return new Response(
      JSON.stringify({ message: 'Fetched tables successfully', tables: result.rows }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Failed to fetch tables:', error.message);
    return new Response(
      JSON.stringify({ message: 'Failed to fetch tables', error: error.message }),
      { status: 500 }
    );
  }
}
