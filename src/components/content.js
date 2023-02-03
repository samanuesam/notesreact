import React from "react";

const Content=({note,itemdelete,submit,date,additem,newdes,setNewdes,newitem,setNewitems})=>{
    
    return(
        <div className="content-maindiv">
            
            <form onSubmit={submit}>
                <div className="content-div1">
                    <input type="text" placeholder="Enter the title" value={newitem} onChange={(e)=>setNewitems(e.target.value)} required></input>
                    <input rows="10" cols="30" value={newdes} onChange={(e)=>setNewdes(e.target.value)} placeholder="Enter the notes" required className="indesc"></input>
                    <div className="bottom">
                        <p className="date">{date}</p>
                        <button className="add" type="submit">Save</button>
                    </div>
                    
                </div>
            </form>
            {note.map((i)=>(
                <div className="content-div" key={i.id}>
                    <p className="content-title">{i.title}</p>
                    <div className="content-flex">
                        <p className="content-desc">{i.desc}</p>
                        <div className="bottom">
                            <p className="date">{date}</p>
                            <p className="del" onClick={()=>itemdelete(i.id)}>Delete</p>
                        </div>
                    </div>
                    
                    
                </div>
            ))}
            
            
        </div>
        
    )
}
export default Content