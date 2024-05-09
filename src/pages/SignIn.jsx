import {useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";


function SignIn() {

  const navigate = useNavigate();

  const requiredPassword = "Madrones1284";
  const [formInput, setFormInput] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setFormInput((prev) =>{
      return {...prev, [name]: value};
    });
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(requiredPassword === formInput.password){
      localStorage.setItem("formInput", JSON.stringify(formInput));
      setLoggedIn(true);
    } else {
      alert("That is not the correct password!");
    }
  };

 
  

  useEffect(() =>{
    if(loggedIn){
      const trail1Complete = localStorage.getItem("completedTrail1");
      const trail2Complete = localStorage.getItem("completedTrail2");
      const trail3Complete = localStorage.getItem("completedTrail3");
      const expoComplete = localStorage.getItem("completedExpoTrail");
     
      if(!trail1Complete){
       navigate("/trail1");
      }else if(!trail2Complete){
       navigate("/trail2");
      }else if(!trail3Complete){
       navigate("/trail3")
      }else if(!expoComplete){
        navigate("/expoTrail")
      }else if(trail1Complete && trail2Complete && trail3Complete && expoComplete){
        navigate("/results")
      }
    }
  },[loggedIn, navigate])
 

  return (
    <div className="signin-container">
      <h1 className="signin-title">Sign In</h1>
      <form className="signin-form" onSubmit={handleSubmit}>
        <label htmlFor="fname">First Name: </label>
        <input type="text" value={formInput.fname} name="fname" onChange={handleChange} required></input>
        <label htmlFor="lname">Last Name: </label>
        <input type="text" value={formInput.lname}  name="lname" onChange={handleChange} required></input>
        <label htmlFor="email"  required>Email: </label>
        <input type="email" value={formInput.email} name="email" onChange={handleChange}></input>
        <label htmlFor="password" >Password: </label>
        <input type="password"value={formInput.password}  name="password" onChange={handleChange} required ></input>
        <button className="login-button" type="submit">Login</button>
      </form>
    </div>
  );
}

export default SignIn;