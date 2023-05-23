import {HiHome} from "react-icons/hi"
import {BsPersonFill} from "react-icons/bs"
import {RiFileList2Fill} from "react-icons/ri"
import {BsChatTextFill} from "react-icons/bs"

export default function BottomNav(){
    return(
        <section className="h-[5rem] grid grid-cols-5 justify-items-center content-center sticky left-0 right-0 bottom-0 bg-white">
            <div className="flex flex-col justify-center items-center text-[#11b899]">
                <section>
                    <HiHome color="#11b899" size={"35px"} className=" cursor-pointer" />
                </section>
                <section>
                    Home
                </section>
            </div>
            <div className="flex flex-col justify-center items-center text-[#11b899]">
                <section>
                    <BsPersonFill color="#11b899" size={"35px"} className=" cursor-pointer"/>
                </section>
                <section>
                    Profile
                </section>
            </div>
            <div className="flex flex-col justify-center items-center text-[#11b899]">
                <section className="h-[4rem] rounded-full w-[4rem] bg-gradient-to-t from-[#11b899] to-white">
                    <img src="https://files.catbox.moe/kguou8.png" alt="logoImage" className=" hover:scale-105 transition-all ease-linear object-contain h-[80%] w-full cursor-pointer" />
                </section>
            </div>
            <div className="flex flex-col justify-center items-center text-[#11b899]">
                <section>
                    <RiFileList2Fill color="#11b899" size={"35px"} className=" cursor-pointer"/>
                </section>
                <section>
                    Follow List
                </section>
            </div>
            <div className="flex flex-col justify-center items-center text-[#11b899]">
                <section>
                    <BsChatTextFill color="#11b899" size={"35px"} className=" cursor-pointer"/>
                </section>
                <section>
                    Chat
                </section>
            </div>
        </section>
    )
}