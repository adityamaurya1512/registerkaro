const CompanyCard =({name,id})=>{
    return(
        <div className="bg-[#164760] h-[200px] w-[200px] flex items-center justify-center lg:h-[250px] lg:w-[250px] shadow-lg rounded  ">
            <h1 className="text-white text-2xl font-bold">
                {name}
            </h1>
        </div>
    )
}

export default CompanyCard