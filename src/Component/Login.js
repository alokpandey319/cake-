import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import '../App.css';
// import {useHistory} from 'react-router-dom';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }
  diffToast = () => toast("Login Succesfull");
  userDetail = {};
  getEmail = (event) => {
    this.email = event.target.value;
  };
  getPass = (event) => {
    this.password = event.target.value;
  };

  registers = () => {
    //   const history = new useHistory();

    if (!this.email || !this.password) return alert("please fill all field");

    var requestObj = {
      email: this.email,
      password: this.password,
    };
    console.log(requestObj);
    axios({
      method: "post",
      url: "https://apibyashu.herokuapp.com/api/login",
      data: requestObj,
    }).then(
      (Response) => {
        console.log(Response);
        if (Response.data.message === "User Already Exists") {
          alert("user already exist!");
        } else {
          //   console.log("response from signup api",Response);
          //   console.log("response from signup api",Response.data.token);
          localStorage.setItem("token", Response.data.token);
          localStorage.setItem("user", requestObj);
            this.props.login({type:'LOGIN',payload:true})
          this.props.history.push("/");
          //   history.push('/');
        }
      },
      (error) => {
        console.log("error from signup api", error);
      }
    );
  };
  Click = (event) => {
    event.preventDefault();
    console.log("hello", this.userDetail);
  };
  render() {
    return (
      <div>
        <form>
          <div class="loginContainer">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                onChange={this.getEmail}
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"></input>
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                onChange={this.getPass}
                type="password"
                class="form-control"
                id="exampleInputPassword1"></input>
            </div>
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"></input>
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                console.log("hiiiiii");
                this.registers();
                this.diffToast();
              }}>
              Login
            </button>
            <div class="forgetSignup">
              <Link to="/forgot">
                {" "}
                <a href="#">Forget password</a>{" "}
              </Link>
              <Link to="/register">
                {" "}
                <a href="#">Signup</a>{" "}
              </Link>
            </div>

            {/* <button  type="register" class="btn btn-primary">Registration</button> */}
            {/* <Link to="/Register"><button class= "btn" type="submit">Register</button></Link> */}
          </div>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

function mapStateToProp(state){
  console.log(state)
return{
}
}
function mapDistpatchToProp(dispatch){
return{
 login:(data)=>dispatch(data)
}
}
export default connect(mapStateToProp,mapDistpatchToProp)(Login);
