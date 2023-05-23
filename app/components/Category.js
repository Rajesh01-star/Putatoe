"use client"
import Link from "next/link"
export default function Something(props){
    const ObjectCards = props.generalObjects.map((eachObject,id)=>{
        return(
            <Link href={"/Something"} key={id}>
                <div className=" cursor-pointer hover:scale-105 transition-all ease-in-out border-2 rounded-lg my-2 p-2 h-[8rem] max-w-[6rem] min-w-[6rem] mr-10">
                    <img className="object-contain rounded-xl h-[60%] w-full" src={eachObject.imgLink} alt="image"/>
                    <center className="text-xs mt-2">{eachObject.tag}</center>
                </div>
                </Link>
        )
    }) 
    return(
        <div className="h-[18rem] mx-2 border-2 rounded-lg drop-shadow-xl my-4">
            <div className="h-[2.5rem] rounded-lg text-xl font-semibold uppercase text-[#0d7867] bg-[#5ceccb] flex items-center px-4 justify-center">{props.heading}</div>
            <div className="mt-2">
                <div className="h-[3rem] flex justify-center pt-3 text-lg text-gray-700 font-bold">Construction</div>
                <hr className="w-[60%] mx-auto border-[.1rem] border-black"/>
                <div id="slider" className="no-scrollbar mt-2 h-[10rem] p-2 flex overflow-x-auto overflow-y-hidden no-scrollbar w-full drop-shadow-md">
                   {ObjectCards} 
                </div>
            </div>
        </div>
    )
}