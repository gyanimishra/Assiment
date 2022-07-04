import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'
function App() {

const [itemtext,setitemtext]= useState("");
const [Listitem,setListitem]= useState([])
const [isupdate,setisupdate]= useState('')
const [updatetext,setupdatetext]= useState('')
 
const addItem= async(e)=>{
  e.preventDefault()
  try {
    const res = await axios.post('http://localhost:5500/api/item',{item:itemtext})
setListitem(prev=>[...prev,res.data])  
setitemtext("")
  } catch (error) {
    console.log(error);
  }
}



useEffect(()=>{
  const getItemList= async()=>{
 
   try {
     const res= await axios.get('http://localhost:5500/api/items')
     console.log('render');
     setListitem(res.data);
   } catch (error) {
     console.log(error);
   }
  }
  getItemList()
 },[])
//deleteitem

const deleteItem =async (id)=>{
  try {
    const res= await axios.delete(`http://localhost:5500/api/item/${id}`)

    const newListItem= Listitem.filter(item=> item._id !==id)

    setListitem(newListItem)
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}

const updateItem= async(e)=>{
  e.preventDefault()
  try {
const res= await axios.put(`http://localhost:5500/api/item/${isupdate}`,{item:updatetext})

const updatedItemIndex = Listitem.findIndex(item=>item._id=== isupdate)
    const updateItem= Listitem[updatedItemIndex].item= updatetext
    setupdatetext('')
setisupdate('')
  } catch (error) {
    console.log(error);
  }
}

const renderUpdateForm=()=>(
  <form className='update-form' onSubmit={(e)=>{updateItem(e)}}>
    <input type="text" className='update-new-input' placeholder='EDIT-notes'  onChange={e=>{setupdatetext(e.target.value)}} value={updatetext} />
    <button className='update-new-btn' type='submit'>Update</button>
  </form>
)


  return (
    <div className="App">
      <h1>Notes-Page</h1>
     <form className='form' onSubmit={e=>addItem(e)}>
      <input type="text" placeholder='Add Notes' onChange={e=>{setitemtext(e.target.value)}} value={itemtext}/>
      <button type='submit'>Add</button>
     </form>
     <div className="todo-listItems">
      
   {
    Listitem.map(item=>(
      <div className="todo-item">

{
  isupdate===item._id ?  renderUpdateForm()
  :<>
    <p className='item-content'>{item.item}</p>
      <button className='update-item' onClick={()=>setisupdate(item._id)}>Update</button>
      <button className='delete-item' onClick={()=>{deleteItem(item._id)}}>Delete</button>
  </>
}



  
    </div>
    ))
   }
     </div>
    </div>
  );
}

export default App;
