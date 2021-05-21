import {Component} from "react";
import '../App.css';
class Signup extends Component{
    constructor(props){
        super(props)
        this.state={name = "",email = "", password = ""}
    }

    getName(event){
        this.name = event.target.value;

    }
    getEmail(event){
        this.name = event.target.value;
        
    }
    getPass(event){
        this.name = event.target.value;
        
    }

    signup() {
        let obj = {
            name:this.name,
            email:this.email,
            password:this.password
        }
        let apiurl="https://apifromashu.herokuapp.com/api/register"
        axios({
            url:apiurl,
            method: 'get'
        })
            .then((response) => {                    
                    console.log(response.data)
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
                <h1>Signup page</h1>
                
            </div>
        )
    }
}
export default Signup;