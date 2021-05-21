import { render } from "@testing-library/react";
import { Component } from "react";
import { Link, Router } from "react-router-dom";
import { connect } from "react-redux";
import '../App.css';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      searchtext: undefined,
    };
  }
  searchtext;
  _getsearchText = (event) => {
    //
    this.searchtext = event.target.value;
    this.setState({
      searchtext: this.searchtext,
    });
  };
  get getsearchText() {
    return this._getsearchText;
  }
  set getsearchText(value) {
    this._getsearchText = value;
  }
  
 
  logout = () => {
    this.props.login({type:'LOGIN',payload:false})
           
  }
componentDidMount(){
  console.log(localStorage.token)
}
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand nn" href="/">
            My Cake shop
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <Link to="/dashboard">
                  <button
                    class="btn btn btn-outline-success my-2 my-sm-0"
                    type="submit">
                    Admin
                  </button>
                </Link>
              </li>
            </ul>

            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                onChange={this.getsearchText}
                placeholder="Search"
                aria-label="Search"></input>
              {/* <Router>
      <Link to={"/search/"+this.nname}><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></Link>

      </Router> */}

              <Link to={`/search?q=${this.searchtext}`}>
                <button
                  class="btn btn-outline-success my-2 my-sm-0 buttons"
                  style={{ margin: "10px" }}
                  type="submit">
                  Search
                </button>
              </Link>
             {this.props.islogged? <Link to={`/cart`}>
                <button type="button" class="btn btn-info buttons">
                  <i class="fas fa-cart-plus"></i>
                </button>
              </Link>:null}

              <Link to="/Login">
                <button
                  class="btn btn-outline-success my-2 my-sm-0 buttons"
                  onClick={this.logout.bind(this)}
                  type="submit">
                  {this.props.islogged  ? 'Logout' : 'Login'}
                </button>
              </Link>
            {/* //     {this.props.islogged && <button type="button" class="btn btn-danger" onClick={this.logout.bind(this)}>Logout</button>} 
            // {!this.props.islogged &&<Link to="/Login"><button type="button" class="btn  btn-success">Login</button></Link>}   */}
              {/* <Link to="/Login"><button class="btn btn-outline-success my-2 my-sm-0 buttons" type="submit">Order</button></Link> */}
            </form>
           {this.props.islogged ? <Link to="/Adcake"><button class="btn btn-success">  
              NewCake 
            </button></Link>:null}
          </div>
        </nav>
      </div>
    );
  }
}
function mapStateToProp(state){
  console.log(state)
  return {
    islogged:state["isloggedin"]
  }
}
function mapDistpatchToProp(dispatch){
  return{
    login:(data)=>dispatch(data)
   }
}
export default connect(mapStateToProp , mapDistpatchToProp)(Navbar)

