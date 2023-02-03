import React from "react";
const Searctitems=({search,setSearch})=>{
    return(
    <div className="centerdiv">
            
            <input
                id='search'
                type='text'
                role='searchbox'
                placeholder='Search Items'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
    </div>)
    
}
export default Searctitems