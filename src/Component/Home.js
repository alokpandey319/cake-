import { Component } from "react";
import Carousel from './Carousel';
import  cakes  from './Data';
import Cake from './Cake';
import axios from 'axios';
import '../App.css';

class Home extends Component{
    cakes = []
    // index;
    constructor(){
        super()
        this.state={
            cakes: []
        }

      
    }

    componentDidMount() {
        let apiurl="https://apifromashu.herokuapp.com/api/allcakes"
        axios({
            url:apiurl,
            method: 'get'
        })
            .then((response) => {                    
                
                    this.setState({
                        cakes: response.data.data
                    })
                    
                },
                    (error) => {
                        console.log(error);
                    }
                )
        
    }

   

  
    render(){
        return(
            <div>
                <Carousel></Carousel>
                {/* <h1>Home page</h1> */}
                <div  className="row">
                {
                                this.state.cakes.map((each, index) => {
                                   
                                    return <Cake key={index} cakedata={each} />
                                    
                                })
                            }
                </div>
                
            </div>
        )
    }
}
export default Home;