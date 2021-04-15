import React from 'react';
import axios from 'axios';

const Signup = () => {
	return(
		  <div className="container">
     <form onSubmit={(e)=> signup(e)}>
       <div class="mb-3">
    <label for="exampleInputName1" class="form-label">Name</label>
    <input type="name" class="form-control" id="exampleInputName1" />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label email">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" className="form-label email">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" aria-describedby="password" />
  </div>


  <button type="submit" class="btn btn-success">Sign Up</button>
</form>
    </div>
	)
}

function signup(e){
  e.preventDefault();
  let request = {
    name: document.getElementById('exampleInputName1').value,
    email : document.getElementById('exampleInputEmail1').value,
    password: document.getElementById('exampleInputPassword1').value
  }
  axios.post('http://localhost:3000/signup', request)
  .then(resp => {
    alert(resp.data.message);
  })
  .catch(err =>{
    console.log(err);
  })
}

export default Signup;