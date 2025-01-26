
import Navbar from "@/app/components/Navbar";
const CompanyDetail = async ({ params }) => {
  const { id } = await params;
  const url = process.env.NEXT_PUBLIC_API_URL;
  const result = await fetch(`${url}/api/companies/${id}`);
  const data = await result.json();  
 
  
  return (

  <div className="flex flex-col justify-center items-center min-h-screen ">
     <div className="flex flex-col   h-[400px] w-[400px] bg-[#164760] rounded shadow-lg">
    <div className="flex flex-col items-center justify-center mt-10">
    <h1 className="text-white text-3xl">{data.company.name}</h1>
    <p className="text-[0.7rem] text-white">{data.company.description}</p>
    </div>
     <div className="flex mt-[130px] gap-10 items-center justify-center">
      {data.directors.map((director) => (
        <div key={director.name} className=" flex flex-col h-[100px] w-[100px] bg-white items-center justify-center">
          <p className="text-[0.7rem] text-bold text-blue-950">{director.name}</p>
          <p className="text-[0.7rem] text-bold text-blue-950">{director.position}</p>
        </div>
      ))}
     </div>
  </div>
  </div>
  );
  
};

export default CompanyDetail;
