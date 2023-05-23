"use client"
import Link from "next/link"
import { menuItems } from "../support/menuItems"
export default function Menu(){
    const container = menuItems.map((eachRow,id)=>{
        return(
         <section key={id} className="h-[33%] grid grid-cols-4 justify-items-center content-center">
            {eachRow.map((eachItem,id)=>{
                return(
                <Link href={"/Something"}  key={id}>
                <div className="flex flex-col justify-center items-center">
                    <div className="hover:scale-110 transition-all ease-in-out cursor-pointer">{<eachItem.icon color="#11b899" size={"35px"} />}</div>
                    <div className="text-xs text-center mt-2 pt-2 ">{eachItem.tag}</div>
                </div>
                </Link>
                )
            })}
        </section>
        )
    })
    return(
        <div className="h-[22rem] mx-2 border-2 rounded-lg drop-shadow-xl my-4">
            {container}
        </div>
    )
}