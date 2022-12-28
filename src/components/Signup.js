import React,{useState} from 'react';
import { useHistory } from 'react-router';
// import { useDataStore } from '../StateProvider';
const Signup = () => {
    const [credential,setCredential]= useState({Name:"",Email: "",Pasward: ""});
    const [passwordShown, setPasswordShown] = useState(false);
    const [signShown, setSignShown] = useState(true);
    const history=useHistory();
 
    const handleSubmit = async (e)=>{
    e.preventDefault();
    const response=await fetch("http://localhost:5000/api/auth/createUser",{
       method : 'POST',
         headers : {
            'Content-Type':'application/json'
    },
    body:JSON.stringify({Name:credential.Name,Email:credential.Email,Pasward:credential.Pasward})
});
    const json = await response.json()
    console.log(json);
    if(json.success){
        localStorage.setItem=('token',json.authtoken);
        history.push("/");
      }
      else{
      alert("invalid credentials");
      }
    }
    const onChange=(e)=>{
        e.preventDefault();
      setCredential({...credential,[e.target.name]:e.target.value});
    }
    const onClick=(e)=>{
        e.preventDefault();
        setPasswordShown(!passwordShown);
        setSignShown(!signShown)
    };
    return (
         <>
         <div className="container">
         <form onSubmit={handleSubmit} >
         <div className="mb-3">
           <label htmlFor="exampleInputName1" className="form-label">Name</label>
           <input type="text" className="form-control" value={credential.Name} onChange={onChange}  id="exampleInputName1" name="Name"/>
           <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
         </div>
         <div className="mb-3">
           <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
           <input type="email" className="form-control" value={credential.Email} onChange={onChange}  id="exampleInputEmail1" name="Email" aria-describedby="emailHelp"/>
           <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
         </div>
         <div className="mb-3">
           <label htmlFor="Pasward" className="form-label">Password</label>
           <input type={passwordShown ? "text" : "password"} className="form-control" value={credential.Pasward} onChange={onChange} minLength="5" required id="Pasward" name="Pasward"/>
           <i className={signShown?"far fa-eye":"far fa-eye-slash"} id="toggle" onClick={onClick} />
         </div>
         <button type="submit" className="btn btn-primary" >Submit</button>
       </form>
       </div>
        </>
    )
}

export default Signup;