import { Component } from "react";
import axios from 'axios';
import { connect } from 'react-redux';
import '../App.css';

class Buy extends Component{
  constructor(props) {
    super(props);
    this.state = {}   
  }
  
  total=0
  cakes=[]

//   componentDidMount() {
//     console.log(this.props.Oder)
//     this.props.Order.data.map((each) => {      
//          this.cakes.push(each.name);
//         this.total=this.total+each.price;
//     });
//         console.log(this.cakes)
//         console.log(this.total);  
//         this.Cakeoder.price=this.total
//         this.Cakeoder.cakes=this.cakes    
//   }
  Cakeoder = {}

  userName=(event)=>{
    this.Cakeoder.name=event.target.value
 }   
 address=(event)=>{
    this.Cakeoder.address=event.target.value
 }
 city=(event)=>{
     this.Cakeoder.city=event.target.value
 }
 pin=(event)=>{
     this.Cakeoder.pincode=event.target.value
 }
 phone=(event)=>{
    this.Cakeoder.phone=event.target.value
}

  buy=(event)=>{
    event.preventDefault()
    console.log(this.Cakeoder);     
    let apiurl="https://apifromashu.herokuapp.com/api/addcakeorder"
    axios({
        method:"post",
        url:apiurl,
        data:this.Cakeoder,
        headers:{"authtoken":localStorage.token}
    }).then((res)=>{
        console.log(res.data)
    },(err)=>{console.log(err)})
}
render() {
    return (
      <div class="buy">
        <form class="formContainer">
          <div class="form-group" >
            <label for="Name">Name</label>
            <input type="text" onChange={this.userName.bind(this)} name="name" class="form-control"  aria-describedby="emailHelp"></input>
          </div>
          <div class="form-group" >
            <label for="Address">Address</label>
            <input type="text" onChange={this.address.bind(this)} class="form-control"  aria-describedby="emailHelp"></input>
          </div>
          <div class="form-group" >
            <label for="City">City</label>
            <input type="text" onChange={this.city.bind(this)} class="form-control"  aria-describedby="emailHelp"></input>
          </div>
          
          <div class="form-group" >
            <label for="Pin" >Pincode</label>
            <input type="number" onChange={this.pin.bind(this)} class="form-control"  aria-describedby="emailHelp"></input>
          </div>
          <div class="form-group">
            <label for="phone" >Phone</label>
            <input type="number" onChange={this.phone.bind(this)}  class="form-control"></input>
          </div>
          <div class="form-group" >
            <label for="Cake" >Cake</label>
            <input type="number"  class="form-control" aria-describedby="emailHelp"></input>
          </div>
          <div class="form-group">
            <label for="price" >Price</label>
            <input type="number"  class="form-control"></input>
          </div>
          <button type="submit" class="btn btn-primary" onClick={this.buy.bind(this)}>Save</button>
        </form>
      </div>
    )
  }
    }

export default connect((state, props) => {
    console.log(state)
    return {
      Oder: state["oderplace"]
    }
  })(Buy);

