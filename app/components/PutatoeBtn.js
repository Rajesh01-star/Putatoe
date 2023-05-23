import Link from "next/link"
export default function PutatoeBtn(){
    return(
        <div className="fixed h-[5rem] w-[5rem] bottom-[8rem] right-10 p-6 rounded-full bg-gradient-to-t from-[#11b899] to-white">
            <Link href={"/Something"}>
            <img src="https://files.catbox.moe/kguou8.png" alt="logoImage" className=" hover:scale-105 transition-all ease-linear object-contain h-full w-full cursor-pointer" />
            </Link>
        </div>
    )
}