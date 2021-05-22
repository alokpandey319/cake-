import { Component } from "react";
import axios from 'axios';
import CartCake from "./CartCake";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
// import './CartStyle.css';


class Cart extends Component {    
    constructor(props) {
        super(props);
        this.state={
            cakes:[]
        }
      }
      componentDidMount() {
        axios.post("https://apifromashu.herokuapp.com/api/cakecart",{},{
            headers:{"authtoken":localStorage.token}     
        }).then((Response)=>{
            console.log(Response);
            this.props.dispatch({
                type: "Oder",
                payload: Response.data
           })
            this.cakes = Response.data.data
            // console.log(this.cakes[0].name);            
            this.setState({
                cakes: Response.data.data
            })
                    
        },(error)=>{
            console.log("error from signup api",error)    
        })

      };

    render() {        
          return (
            
              <div class="cartContainer">    
              {this.state.cakes.length <= 0 ?"":<div>
                          <Link to="/route"><button type="button" class="btn btn-success">CheckOut</button></Link>
                      </div>
                      }            
                 <div>
                <div>
                {   this.state.cakes.map((each, index) => {
                      console.log(each,index)
                       return <CartCake key={index} cakedata={each} />                                    
                     })                             
                          }                          
                          {
                             this.state.cakes.length <= 0 && <div>
                              <div class="card"></div>
                              </div>
                          }                          
                  </div>
                      
                  </div>
            </div>
        )
    }
}
export default connect((state, props) => {
    // console.log(state)
    return {
      Oder: state["oderplace"]
    }
  })(Cart);

// import react from "react";
// import { Component } from "react";
// // import Cake from "./Cake";
// import axios from 'axios';
// import { useState, useEffect } from "react";
// import {queryString} from "querystring"
// import Cake from "./Cake";
// import CartCake from "./CartCake";
// import { connect } from 'react-redux';
// import '../App.css';


// class Cart extends Component {
//     cakes = [];
//     constructor(props) {
//         super(props);
//         this.state={
//             cakes: []
//         }
//       }

//       componentDidMount() {
//         axios.post("https://apifromashu.herokuapp.com/api/cakecart",{},{
//             headers:{"authtoken":localStorage.token}     
//         }).then((Response)=>{
//             console.log(Response);
//             this.props.dispatch({type:"Order",payload:Response.data})
//             this.cakes = Response.data.data
//             console.log(this.cakes[0].name);
//             this.setState({
//                 cakes: Response.data.data
//             })
                    
//         },(error)=>{
//             console.log("error from signup api",error)    
//         })

//       };

//       render(){
//           console.log(this.state.cakes)
//         return(
//             <div>
               
//                 {/* <h1>Home page</h1> */}
//                 <div  className="row">
//                 {
//                                 this.state.cakes.map((each, index) => {
//                                     console.log(each,index)
//                                     return <CartCake key={index} cakedata={each} />
                                    
                                    
//                                 })
//                             }
//                 </div>
                
//             </div>
//         )
//     }

//     //   render() {
//     //       return(
//     //           <div>{this.cakes}</div>
//     //       )
//     //   }

// }
// export default connect((state, props) => {
//     // console.log(state)
//     return {
//       Oder: state["oderplace"]
//     }
//   })(Cart);



