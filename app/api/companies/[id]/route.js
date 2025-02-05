
import pool from '../../../lib/db'; 

export async function GET(req, { params }) {
  const { id } = await params;  

  try {
 
    const companyResult = await pool.query(
      'SELECT name,description, founded_date FROM companies WHERE id = $1',
      [id]
    );

    const directorsResult = await pool.query(
      'SELECT name, position, bio FROM directors WHERE company_id = $1',
      [id]
    );

    if (companyResult.rows.length === 0) {
      return new Response(
        JSON.stringify({ message: 'Company not found' }),
        { status: 404 }
      );
    }

   
    const company = companyResult.rows[0];
    const directors = directorsResult.rows;

    return new Response(
      JSON.stringify({
        message: 'Fetched company and directors successfully',
        company: {
          name:company.name,
          description: company.description,
          founded_date: company.founded_date,
        },
        directors,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Failed to fetch company and directors:', error.message);
    return new Response(
      JSON.stringify({ message: 'Failed to fetch data', error: error.message }),
      { status: 500 }
    );
  }
}
