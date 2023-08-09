
import React, { useState } from "react";


const App = () => {
  let [data,setData]=useState({name:"",email:"",password:""});
  function handlethis(event) {
    event.preventDefault();
    console.log(data);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <form onSubmit={handlethis}>
          <label htmlFor="naming">Name</label>
          <input type="text" id="naming" value={data.name} onChange={(e)=>{setData({...data,name:e.target.value})}}/>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={data.email} onChange={(e)=>{setData({...data,email:e.target.value})}}/>
          <label htmlFor="pass">Password</label>
          <input type="password" id="pass" value={data.password} onChange={(e)=>{setData({...data,password:e.target.value})}}/>
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default App
