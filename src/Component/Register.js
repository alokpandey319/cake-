import {Component} from "react"
import {Link} from "react-router-dom";
import '../App.css';

import axios from 'axios';
class Register extends Component{
  constructor(props){
    super(props)
    this.state = { email: '' , password: '', name: ""};
}
    userDetail = {}
    getEmail = (event)=>{
      this.email = event.target.value
  }
  getPass = (event)=>{
      this.password = event.target.value
  }
  getName = (event)=>{
      this.name = event.target.value
  }
  registers = ()=>{

      if(!this.email || !this.name || !this.password) return alert("please fill all field")
    
      var requestObj = {
          email:this.email,
          name:this.name,
          password:this.password
  }  
  console.log(requestObj);
      axios({
          method:'post',
          url:'https://apibyashu.herokuapp.com/api/register',
          data:requestObj
      }).then((Response)=>{
          if(Response.data.message === "User Already Exists"){
              alert("user already exist!")
          }else {

              console.log("response from signup api",Response);

          }
          


      },(error)=>{
          console.log("error from signup api",error)    
      })
  }
Click = (event) => {
       event.preventDefault()
        console.log("hello", this.userDetail);

}
    render(){
        return(
            <div>
               <form>
                <div class = "container">
                <div class="form-group">
    <label class = "labelTag"  for="exampleInputEmail1">Name</label>
    <input onChange={this.getName} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    <small id="emailHelp" class="form-text text-muted"></small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">email address</label>
    <input onChange={this.getEmail} type="text" class="form-control" id="exampleInputPassword1"></input>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onChange={this.getPass} type="password" class="form-control" id="exampleInputPassword1"></input>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary"  onClick={(e) => {
      e.preventDefault()
       console.log("hiiiiii")
      this.registers();
     
   }}>Submit</button>

                </div>
 
  
</form>
                
            </div>
        );
    }
}

export default Register;