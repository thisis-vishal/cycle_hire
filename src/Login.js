import React from 'react';
import axios from 'axios';
import { useHistory, NavLink } from 'react-router-dom';
import { BrowserRouter , Route, Switch, Redirect} from 'react-router-dom';

const Login = () => {
	return(
		  <div className="container">
     <form onSubmit={(e)=> login(e)}>
  <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label email">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Log In</button>
</form>
    </div>
	)
  let history = useHistory();
  function login(e){
  e.preventDefault();
  let request = {
    email : document.getElementById('exampleInputEmail1').value,
    password: document.getElementById('exampleInputPassword1').value
  }
  axios.post('http://localhost:3000/login', request)
  .then(resp => {
    alert(resp.data.message);
  history.push(`/`);
  })
  .catch(err =>{
    console.log(err);
  })
}
}




export default Login;