import react from "react";
import { Component } from "react";

import { cakeDetail } from "./CakeDetails";
import { useHistory } from "react-router-dom";
import  axios  from "axios";
import { Link } from "react-router-dom";
import queryString from "query-string";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import '../App.css';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("details");
    // this.NavigationDemo()
  }
  diffToast = ()=>toast("Cake Cart successfully");

  registers = () => {
    //   const history = new useHistory();
    let cartCake = {
      cakeid: this.props.cakedata.cakeid,
      name: this.props.cakedata.name,
      image: this.props.cakedata.image,
      weight: this.props.cakedata.weight,
      price: this.props.cakedata.price,
    };
    axios.post("https://apibyashu.herokuapp.com/api/addcaketocart",cartCake,{
        headers:{"authtoken":localStorage.token}     
    }).then((Response)=>{
        console.log(Response);
    },(error)=>{
        console.log("error from signup api",error)    
    })
  };

  render() {
    console.log("state,", this.props);

    return (
      <div class="detail-container">
        <Link to={`/cakedetails/${this.props.cakedata.cakeid}`}>
          <div
            onClick={() => {
              // this.NavigationDemo(this.props.cakedata.cakeid);
            }}
            class="card detail-card"
          >
            <img
              src={this.props.cakedata.image}
              class="card-img-top cakeImg"
              alt="..."
            ></img>
            <div class="card-body detail-card-body">
              <h3 class="card-title">{this.props.cakedata.name}</h3>
              <p class="card-text">Ratings : {this.props.cakedata.ratings}</p>
              <p class="card-text">Price : {this.props.cakedata.price}</p>
              <p class="card-text">{this.props.cakedata.description}</p>
              <p class="card-text">Weight : {this.props.cakedata.weight}</p>
              <p class="card-text">Flavour : {this.props.cakedata.flavour}</p>
              <p class="card-text">Type : {this.props.cakedata.type}</p>
              <p class="card-text">{this.props.cakedata.likes}👩‍👧‍👧</p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  console.log("hiiiiii");
                  this.registers();
                  this.diffToast();
                }}
                type="button"
                class="btn btn-success"
              >
                Add To Cart<i class="fas fa-cart-plus"></i>
                {/* Buy<i class="fas fa-cart-plus"></i> */}
              </button>
              

              {/* <a href="#" class="btn btn-primary"></a> */}
            </div>
          </div>
        </Link>
        <ToastContainer />
      </div>
    );
  }
}

export default Details;
