   import React from 'react'

   import { useState } from "react";

   function UserForm() {
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [message, setMessage] = useState("");
   
     let handleSubmit = async (e) => {
       e.preventDefault();
       try {
         let res = await fetch("https://httpbin.org/post", {
           method: "POST",
           body: JSON.stringify({
             name: name,
             email: email,
            }),
          });
         if (res.status === 200) {
           setName("");
           setEmail("");
           setMessage("Submitted  successfully !!");
         } else {
           setMessage("Some error occured");
         }
       } catch (err) {
         console.log(err);
       }
     };


  
     return (
    
        <div   className='userform'>
          <form className='flex' onSubmit={handleSubmit}>
          <div >
            <label>Name :</label>
            <input type="text" value={name} required placeholder="Abc"   onChange={(e) => setName(e.target.value)}/>
          </div>

          <div className='email'>
            <label>Email :</label>
            <input type="text" value={email} required placeholder="Abc@xyz.com"  onChange={(e) => setEmail(e.target.value)}/>
          </div>
        
          <button type="submit">Submit</button>
          <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
        </div>
     );
   };
   
   export default UserForm;