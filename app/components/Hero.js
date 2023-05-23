export default function Hero(){
    return(
        <div className=" bg-white h-[15rem] flex justify-center items-center gap-2 p-2">
            <section className=" w-full h-full flex flex-col">
            <img src="https://files.catbox.moe/91dfev.png" className=" object-contain h-full w-full" />
            <div className=" flex w-full h-1/2 items-center">
                <button className=" w-full text-xs p-1 rounded-lg h-fit  bg-[#11b899] text-white">Recharge Now</button>
                <button className="w-full text-xs p-1 rounded-lg h-fit bg-white border-2 gap-2 text-[#11b899]">Learn More</button>
            </div>
            </section>
            <section className=" w-full h-full">
                <img src="https://files.catbox.moe/808yzo.jpeg" className=" object-scale-down h-full w-full"/>
            </section>
        </div>
    )
}