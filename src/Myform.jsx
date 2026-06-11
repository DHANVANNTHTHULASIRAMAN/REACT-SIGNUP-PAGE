import { useState } from "react";

function Myform() {
     const[myform, setmyform]=useState("")

     function handlesubmit(e){
        e.preventDefault()
        console.log(myform)
     }
   

  
  return (

   
    <>
      <form action="" onSubmit={handlesubmit}>
        <label htmlFor="">ENTER YOUR NAME:
             <input type="text" name="" id="" onChange={(e)=>setmyform(e.target.value)} />
        </label>
          <label htmlFor="">ENTER YOUR NAME:
             <input type="text" name="" id="" onChange={(e)=>setmyform(e.target.value)} />
        </label>
          <label htmlFor="">ENTER YOUR NAME:
             <input type="text" name="" id="" onChange={(e)=>setmyform(e.target.value)} />
        </label>
        <input type="submit" value="submitform" />
       
      </form>
    </>
  );
}

export default Myform;
