"use client"
export default function Something(props){
    console.log(props.generalObjects);
    const ObjectCards = props.generalObjects.map((eachObject,id)=>{
        return(
                <div key={id} className="border-2 border-black my-2 p-2 h-[6rem] min-w-[6rem] ml-2">Object</div>
        )
    }) 
    return(
        <div className="border-8 border-blue-200 h-[20rem]">
            <div className="h-[2.5rem] rounded-lg">{props.heading}</div>
            <div className="mt-4">
                <div className="h-[3rem] flex justify-center pt-3">subHeading</div>
                <hr className="w-[60%] mx-auto border-[.1rem] border-black"/>
                <div id="slider" className="border-2 border-black mt-2 h-[8rem] p-2 flex overflow-x-auto overflow-y-hidden no-scrollbar w-full">
                   {ObjectCards} 
                </div>
            </div>
        </div>
    )
}