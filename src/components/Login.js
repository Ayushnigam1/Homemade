import React,{useState} from 'react';

const Login = () => {
    const [credential,setCredential]= useState({Email: "",Pasward: ""});
    
    const handleSubmit = async (e)=>{
    e.preventDefault();
    const response=await fetch("http://localhost:5000/api/auth/login",{
       method : 'POST',
         headers : {
            'Content-Type':'application/json'
    },
    body:JSON.stringify({Email:credential.Email,Pasward:credential.Pasward})
});
    const json = await response.json()
    console.log(json);
    }
    const onChange=(e)=>{
        e.preventDefault();
      setCredential({...credential,[e.target.name]:e.target.value});
    }
    return (
         <>
         <div className="container">
         <form onSubmit={handleSubmit} >
         <div className="mb-3">
           <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
           <input type="email" className="form-control" value={credential.Email} onChange={onChange}  id="exampleInputEmail1" Name="Email" aria-describedby="emailHelp"/>
           <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
         </div>
         <div className="mb-3">
           <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
           <input type="password" className="form-control" value={credential.Pasward} onChange={onChange} id="exampleInputPassword1" Name="Pasward"/>
         </div>
         <button type="submit" className="btn btn-primary" >Submit</button>
       </form>
       </div>
        </>
    )
}

export default Login;