import React from 'react'
import { useState } from 'react'
const App = () => 
{

  const [name,setName]=useState("");
  const [newname,setNewName]=useState("");
  
  const [element,setElement]=useState([]);
  const [flag,setFlag]=useState(false);

  const deleteItem=(indno)=>
  {
    const newEle=element.filter((arr,ind)=>
    {
      return ind!=indno;
    })
    setElement(newEle);
    setFlag(false)
  }

  const editElement=(id)=>
  {
    setFlag(true)
    const ele=element.filter((arr,ind)=>
    {
      return ind===id;
    })

    // is se uss box ma value aaa jay gi
    setName(ele)
    setNewName(ele)

  }



  const submitClicked=(e)=>
  {
    e.preventDefault();
    if(!flag && name!="")
    {
      setElement([...element,name]);
    }
    setName("")

    if(flag&& name!="")
    {
      setElement(element.map((arr,ind)=>
      {
        // console.log("the name is a",newname[0],arr)
        if(arr===newname[0])
        {
          return name
        }
        return arr;
      }))

    }

    setFlag(false)
  }

  return(
    <>
    <div className="maindiv">
      <form onSubmit={submitClicked} > 
        <h1>My Gorcery Store</h1>
        <input type="text" placeholder="eggs....."  value={name} onChange={(e)=>setName(e.target.value)}/>
        <button id="btn1" type="submit" >{flag?"edit":"submit"}</button>
      </form>
    
    </div>
    
    {element.map((index,indno)=>
      {
       
        return(
          <div id="seconddiv" key={indno}>
            <p>{index} <i onClick={()=>deleteItem(indno)} className="fa-solid fa-trash"></i>
            <i  onClick={()=>editElement(indno)} className="fa-sharp fa-solid fa-pen-to-square"></i> </p>
          </div>
        )

      })}



    </>
  )
}
export default App;