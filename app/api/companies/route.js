import pool from '../../lib/db';  
 export async function GET() {
    try{
       
    const result = await pool.query('SELECT id, name FROM companies');
    return new Response(
      JSON.stringify({ message: 'Fetched companies successfully', companies: result.rows }),
      { status: 200 }
    );

    }
    catch(error){
        console.error('Failed to fetch companies:', error.message);
        return new Response(
          JSON.stringify({ message: 'Failed to fetch companies', error: error.message }),
          { status: 500 }
        );
    }

}