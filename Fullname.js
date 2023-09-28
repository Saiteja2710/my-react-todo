import { useState } from "react";

function Fullname()
{

    const [First,setFirst] = useState("");
    const [Last , setLast] = useState("");
    const [Full,setFull] = useState([]);

    const Fullname = (e) =>{
        e.preventDefault();

        const Fulln = {first:First, last:Last};

        setFull([...Full,Fulln]);
        setFirst("");
        setLast("");
    };


    return(
        <>

        <form onSubmit={Fullname}>
            <lable>
                FirstName:
            </lable>
            <input value={First} onChange={(e)=>setFirst(e.target.value)}/>
            <lable>
                lastName :
            </lable>
            <input value={Last} onChange={(e)=>setLast(e.target.value)}/>
            <button >Submit</button>
        </form>

        <div>
            {Full.map((x)=>{
                return (
                    <p>
                        <span>Full Name : </span>
                        <span>{x.first}</span>
                        <span>{x.last}</span>
                    </p>
                );
            })}
        </div>

        </>

    );

}

export default Fullname;