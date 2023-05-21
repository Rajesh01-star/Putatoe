"use client"
import { menuItems } from "../support/menuItems"
export default function Menu(){
    console.log(menuItems);
    const container = menuItems.map((eachRow,id)=>{
        return(
         <section key={id} className="h-[33%] grid grid-cols-4 justify-items-center content-center">
            {eachRow.map((eachItem,id)=>{
                return(
                <div key={id} className="">
                    <div>{eachItem.icon}</div>
                    <div>{eachItem.tag}</div>
                </div>
                )
            })}
        </section>
        )
    })
    return(
        <div className="border-8 border-black h-[20rem]">
            {container}
        </div>
    )
}