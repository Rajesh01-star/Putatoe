import {MdRoom} from "react-icons/md"
import { MdNotifications } from "react-icons/md"
import {BsFillCartFill} from "react-icons/bs"
import { MdSearch } from "react-icons/md"
import {MdSettingsVoice} from "react-icons/md"
export default function Navbar(){
    return(
    <div className="grid grid-rows-2 grid-flow-row bg-[#11b899] py-2">
    <section className="grid grid-cols-7 p-2 justify-items-center">
        <div className="col-span-1 text-center">
            <MdRoom color="white" size={"35px"} className=" hover:scale-105 transition-all ease-in-out ml-2 cursor-pointer" />
        </div>
                
        <div className="col-span-4 flex justify-center items-center text-white rounded-xl border-2 border-white w-full h-[2.4rem]">location</div>        
        <div className="col-span-1 text-center">
            <MdNotifications color="white" size={"35px"} className=" hover:scale-105 transition-all ease-in-out cursor-pointer" />
        </div>        
        <div className="col-span-1 text-center">
            <BsFillCartFill color="white" size={"35px"} className=" hover:scale-105 transition-all ease-in-out cursor-pointer" />
            </div>        
    </section>
    <section className="grid grid-cols-4 p-2 items-center justify-items-center">
        <div className="col-span-3 text-center grid grid-cols-4 justify-items-start p-2 rounded-xl bg-white w-full items-center">
        <span className="col-span-1">
            <MdSearch color="#11b899" size={"35px"} className=" hover:scale-105 transition-all ease-in-out cursor-pointer"/>
        </span>
        <input className="col-span-3 active:border-white focus:outline-none border-none" placeholder="Search for Products..." />
        </div>        
        <div className="col-span-1 text-center">
            <MdSettingsVoice color="white" size={"35px"} className=" hover:scale-105 transition-all ease-in-out cursor-pointer" />
        </div>        
    </section>
    </div>
    )
}