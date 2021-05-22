import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Slider from './Slider';
import CartSumary from './CartSumary';
import Checkout from './Checkout'
import Address from "./Address";

function OrderSummery() {
    return (
        <div>
            <Checkout />
            <div>
        <BrowserRouter>
            <Slider />
            <Switch>
                <Route path="/cartsumary" exact component={CartSumary} />
                <Route path="/address" exact component={Address} />
                       
            </Switch>
            </BrowserRouter>
            </div>
            </div>
    )
}
export default OrderSummery;

// import {Component} from "react"
// import { axios } from 'axios';
// import { Link } from "react-router-dom";
// import '../App.css';
// class OrderSummery extends Component{
    
//     constructor(props){
//         super(props)
//         this.state = { email: ''};
//     }
//     render(){
//         return(
//             <div class = "forgetContainer">
//                 <Link to ='/buy'>
//                 <label class = "pading" for = "email">confirm</label>    
//                 </Link>
//             </div>
//         )
//     }
// }
// export default OrderSummery;