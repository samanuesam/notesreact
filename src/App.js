import React from 'react';
import { useState } from "react";
import Content from './components/content';
import Serach from './components/serach';
import Header from './components/header';
function App() {
  const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const[note,setNotes]=useState(JSON.parse(localStorage.getItem('shoppinglist')));
    const[newitem,setNewitems]=useState("")
    const[newdes,setNewdes]=useState("")
    const[serach,setSearch]=useState("")

    const itemdelete=(id)=>{
        const noteitems=note.filter((i)=>i.id!==id)
        setNotes(noteitems)
        localStorage.setItem('shoppinglist', JSON.stringify(noteitems));
    }
    const additem=(title,desc)=>{
        const id=note.length!==0?note[note.length-1].id+1:1
        const mynewitem={id,title,desc}
        const noteitems=[...note,mynewitem]
        setNotes(noteitems)
        localStorage.setItem('shoppinglist', JSON.stringify(noteitems));

    }
    const submit=(e)=>{
        e.preventDefault()
        if (!newitem && !newdes) return;
        additem(newitem,newdes)
        setNewdes('')
        setNewitems('')
    }
  return (
    <div>
      <Header></Header>
      <Serach
      serach={serach}
      setSearch={setSearch}></Serach>
      <Content 
        note={note.filter(i=>((i.desc).toLowerCase()).includes(serach.toLowerCase()))}
        additem={additem}
        itemdelete={itemdelete}
        submit={submit}
        date={date}
        newdes={newdes}
        setNewdes={setNewdes}
        newitem={newitem}
        setNewitems={setNewitems}></Content>
    </div>
    
  );
}

export default App;
