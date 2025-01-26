
import Navbar from "./components/Navbar";
import Company from "./components/Company";
//main page
export default function Home() {
  return (
     <div className=" flex flex-col gap-10 items-center justify-center">
      <h1 className="mt-10 text-5xl text-bold text-[#164760]">Organizations</h1>
      <Company/>
     </div>
  )
}


