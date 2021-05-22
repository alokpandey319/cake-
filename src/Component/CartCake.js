import { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
class CartCake extends Component {
    constructor(props) {
        super(props)
      this.state = {
          qty: this.props.cakedata.quantity,
          price:this.props.cakedata.price,
          total: this.props.cakedata.price,
          totalPrice: 0,          
        }               
    }
    remove = () => {
        console.log(this.props.cakedata.cakeid)
        axios.post('https://apifromashu.herokuapp.com/api/removecakefromcart',{ cakeid: this.props.cakedata.cakeid },
            { headers: { "authtoken": localStorage.token}})
            .then((ress) => {            
            console.log(ress)
        }, (err) => {
            console.log(err)
        })
    }
    
    add=()=> {
        this.setState({
          qty: this.state.qty + 1
          
        });        
      }
    
      subtract=()=> {
        this.setState({
          qty: this.state.qty - 1          
        });
        
  }
   
  cal=()=> {
    this.setState({
      total:this.state.qty*this.state.price
    })     
  }
  // total = () => {
  //   this.setState({

  //   })
  // }
  
  render() {
    console.log(this.state.qty,"qty");
      console.log(this.state.price,"price")
    console.log(this.state.total, "total")
    // console.log(this.state.cartItem);
    
    return (        
            
       <div  style={{ marginTop: "1em",left: "1em" }}>                
       <table style={{width:"50vw" ,bottom:"1em"}}> 
  <tbody>
    <tr style={{border:"1px solid #BDC3C7"}}>
    <td ><img style={{height:"50px",width:"50px"}} src={this.props.cakedata.image} class="card-img-top " alt="..."></img></td>
      <td >{this.props.cakedata.name}</td>
                  <td >Rs{this.props.cakedata.price}</td>               
               <td > 
     <button type="button" style={{color:"black" ,backgroundColor:"white"  }} onClick={this.remove} class="btn-group btn-group-sm border-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg></button> 
                    
             
                  </td>                
                        </tr>
                                           
  </tbody>  
                </table>                
            </div>
              
        )
    }
}



export default CartCake;

// import { Component } from "react";
// import {cakeDetail} from './CakeDetails'
// import { useHistory } from "react-router-dom";
// import {axios} from 'axios';
// import {Link} from 'react-router-dom';
// import queryString from "query-string";
// import '../App.css';


// class CartCake extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {}
//         // this.NavigationDemo()
//     }
//     // /details?id=${this.props.cakedata.cakeid}
//     render() {
//         return (
//             <div>   
//             <Link to={`/OrderSummery`}>
//             <div onClick = {()=>{
//             // this.NavigationDemo(this.props.cakedata.cakeid);
//         }} class="card" style={{width: "15rem" , margin:"1rem"}}>
//         <img style={{height:"15em"}} src={this.props.cakedata.image} class="card-img-top" alt="..."></img>
//         <div class="card-body">
//                 <h5 class="card-title">{this.props.cakedata.name}</h5>                
//                 <p class="card-text">Rs{this.props.cakedata.price}</p>                
//           <a href="#" class="btn btn-primary">Order</a>
        
         
//         </div>
//     </div>  
//             </Link>
      
//             </div>
//         )
//     }
// }

// export default CartCake;

