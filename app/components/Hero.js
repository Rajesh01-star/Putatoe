import styles from "../styles/Hero.module.css"
export default function Hero(){
    return(
        <div className=" bg-white h-[15rem] grid grid-cols-2 justify-items-center content-center mx-2 border-2 rounded-lg drop-shadow-xl my-4">
        <section className="flex flex-col ml-4">
        <div className={`h-[8rem] grow ml-2 ${styles.bg}`}>
        </div>
        <div className="flex gap-x-6 ">
            <button className="text-xs border-2 border-[#11b899] rounded-xl p-2 text-[#11b899] w-[8rem] h-[2rem]">Recharge Now</button>
            <button className="rounded-xl p-2 bg-[#11b899] text-white w-[8rem] h-[2rem] text-xs">Learn More</button>
        </div>
        </section>
        <section>
        <div className={`min-w-[12rem] h-full ${styles.svgBg}`}>
        
        </div>
        </section>
        </div>
    )
}