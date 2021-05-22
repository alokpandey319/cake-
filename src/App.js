// import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar'
import {BrowserRouter ,Route} from "react-router-dom" 
// import Carousel from './Component/Carousel'
import Home from './Component/Home'
import Login from './Component/Login'
import Forgot from './Component/Forgot'
import Search from './Component/Search'
import Register from './Component/Register'
import CakeDetails from './Component/CakeDetails';
import Details from './Component/Details';
import Cake from './Component/Cake'
import dashboard from './Component/Dashbord'
import DashBoard from './Component/Dashbord';
import Cart from './Component/Cart';
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Orderlist from './Myreducer/Orderlist';
import Addcake from './Component/Addcake';
import { useEffect } from 'react';
import OrderSummery from './Component/OrderSummery';
import CartSumary from "./Component/CartSumary";
import Address from "./Component/Address";
import Routes from "./Component/Routes";
import Buy from "./Component/Buy";





function App() {
  useEffect(()=>{
    console.log(localStorage.userlogin)
  },[])
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <div>
      {/* <Login></Login> */}
      {/* <Carousel></Carousel> */}
      <Route exact path="/" exact component={Home}/>
        <Route exact path="/login" exact component={Login}/>
        <Route path="/forgot"exact component={Forgot}/>
        <Route path="/Search"exact component={Search}/>
        <Route path="/Register"exact component={Register}/>
        <Route path="/search/:q"exact component={Search}/>
        <Route exact path="/cakedetails/:i"exact component={CakeDetails}/>
        <Route exact path="/details"component={Details}/>
        <Route exact path="/dashboard"component={DashBoard}/>
        <Route exact path="/cart"component={Cart}/>
        <Route exact path="/orderlist"component={Orderlist}/>
        <Route exact path="/Adcake"component={Addcake}/>
        <Route exact path="/OrderSummery"component={OrderSummery}/>
        <Route exact path="/cartsumary"component={CartSumary}/>
        <Route exact path="/address"component={Address}/>
        <Route exact path="/route"component={Routes}/>
        <Route exact path="/buy"component={Buy}/>


      
      
    </div>
  
    </BrowserRouter>
    {/* <Cake></Cake> */}

    </div>
  );

}



export default App;
