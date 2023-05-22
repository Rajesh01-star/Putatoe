export default function Service(props){
    const ObjectCards = props.generalObjects.map((eachObject,id)=>{
        return(
            <div className="border-2 border-black h-[8rem]">
                <img src="#" alt="image"/>
            </div>
        )
    })
    return(
        <div className="border-8 border-black h-[20rem] p-2 grid grid-cols-2 gap-4 gap-y-0">
            {ObjectCards}
        </div>
    )
}