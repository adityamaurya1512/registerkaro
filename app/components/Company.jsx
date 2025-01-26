import CompanyCard from "./CompanyCard";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
const Company = async () => {
  const url = process.env.NEXT_PUBLIC_API_URL;

  try {
    if (!url) {
      throw new Error("NEXT_PUBLIC_API_URL is not defined");
    }

    const result = await fetch(`${url}/api/companies`);

    if (!result.ok) {
      throw new Error(`Failed to fetch: ${result.statusText}`);
    }

    const data = await result.json();  // Get the full response
    const companies = data.companies;  // Extract the companies array

    return (
      <div className="flex flex-wrap justify-center gap-6 mt-10 sm:flex-col md:flex-row">
         <Toaster position="top-center" reverseOrder={false} />
        {companies.map((company) => (
          <div key={company.id}>
           <Link href={`/company_details/${company.id}`}>

                <CompanyCard name={company.name} />
             
            </Link>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching companies:", error);
    return <div>Error fetching companies. Please try again later.</div>;
  }
};

export default Company;
