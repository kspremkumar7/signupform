import React,{useState} from 'react'

const App = () => {
  const[data,setData]=useState({
    username:'',
    email:'',
    password:'',
    confirmPassword:'',
  })
  const{username,email,password,confirmPassword}=data;
  const changeHandler=e=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler=e=>{
    e.preventDefault();
    if(password===confirmPassword){
      console.log(data);
    }
    else{
      console.log("Password is not matching");
    }
  }
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
        <label>
                        <span class="text">Username : </span><br/>
                        <input type="text" name="username" value={username} onChange={changeHandler}/><br/>
                    </label>
          <label>
                  <span class="text">Email : </span><br/>
                  <input type="email" name ="email" value={email} onChange={changeHandler}/><br/>
          </label>
          <label>
                   <span class="text">Password : </span><br/>
                   <input type="password" name="password" value={password} onChange={changeHandler}/><br/>       
          </label>
          <label>
                   <span class="text">Confirm Password : </span><br/>
                   <input type="password" name="confirmPassword" value={confirmPassword} onChange={changeHandler}/><br/>
          </label>
          <input  type="submit" name="submit"/><br/>
        </form>
      </center>
    </div>
  )
}

export default App
