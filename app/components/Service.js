import Link from "next/link"
export default function Service(props){
    const ObjectCards = props.generalObjects.map((eachObject,id)=>{
        return(
            <Link href={"/Something"} key={id}>
            <div className="relative border-2 rounded-xl h-[10rem] overflow-hidden">
             <img src={eachObject.imgLink} className="object-contain h-[8rem] w-full hover:scale-105 transition-all ease-in-out" />  
             <div className="absolute w-full h-[4rem] bottom-0 bg-gradient-to-t from-[#11b899] to-white rounded-b-xl">
             <center><h2 className="mt-4 text-base">{eachObject.tag}</h2></center>
             </div>
             <div className="absolute w-[4rem] h-[1.2rem] top-0 right-0 bg-[#11b899] rounded-lg">
             <center><h2 className="text-xs text-white">20% OFF</h2></center>
             </div>
            </div>
            </Link>
        )
    })
    return(
        <div>
        <div className="h-[2.5rem] rounded-lg text-xl font-semibold uppercase text-[#0d7867] bg-[#5ceccb] flex items-center px-4 justify-center">Service We Provide</div>        
        <section className=" mt-4 h-[22rem] p-2 grid grid-cols-2 gap-4 gap-y-0">
            {ObjectCards}
        </section>
        </div>
    )
}