export default function Navbar(){
    return(
    <div className="grid grid-rows-2 grid-flow-row border-8 border-black">
    <section className="grid grid-cols-7 p-2 border-2 border-black">
        <div className="col-span-1 text-center">Icon</div>        
        <div className="col-span-4 text-center border-2 border-black rounded-xl">location</div>        
        <div className="col-span-1 text-center">icon</div>        
        <div className="col-span-1 text-center">icon</div>        
    </section>
    <section className="grid grid-cols-4 p-2">
        <div className="col-span-3 text-center border-2 border-black grid grid-cols-4 justify-items-start p-2 rounded-xl">
        <span className="col-span-1">Icon</span>
        <span className="col-span-3">placeholder</span>
        </div>        
        <div className="col-span-1 text-center">voice icon</div>        
    </section>
    </div>
    )
}