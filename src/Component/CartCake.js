import { Component } from "react";
import {cakeDetail} from './CakeDetails'
import { useHistory } from "react-router-dom";
import {axios} from 'axios';
import {Link} from 'react-router-dom';
import queryString from "query-string";
import '../App.css';


class CartCake extends Component {

    constructor(props) {
        super(props)
        this.state = {}
        // this.NavigationDemo()
    }
    // /details?id=${this.props.cakedata.cakeid}
    render() {
        return (
            <div>   
            <Link to={`/OrderSummery`}>
            <div onClick = {()=>{
            // this.NavigationDemo(this.props.cakedata.cakeid);
        }} class="card" style={{width: "15rem" , margin:"1rem"}}>
        <img style={{height:"15em"}} src={this.props.cakedata.image} class="card-img-top" alt="..."></img>
        <div class="card-body">
                <h5 class="card-title">{this.props.cakedata.name}</h5>                
                <p class="card-text">Rs{this.props.cakedata.price}</p>                
          <a href="#" class="btn btn-primary">Order</a>
        
         
        </div>
    </div>  
            </Link>
      
            </div>
        )
    }
}

export default CartCake;

