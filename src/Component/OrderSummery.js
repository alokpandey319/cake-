import {Component} from "react"
import { axios } from 'axios';
import { Link } from "react-router-dom";
import '../App.css';
class OrderSummery extends Component{
    
    constructor(props){
        super(props)
        this.state = { email: ''};
    }
    render(){
        return(
            <div class = "forgetContainer">
                <Link to ='/buy'>
                <label class = "pading" for = "email">confirm</label>    
                </Link>
            </div>
        )
    }
}
export default OrderSummery;