import React from 'react'
import {useState,useEffect} from "react"
import {Link} from "react-router-dom"
import axios from 'axios';
import '../App.css';
// import Sidebar from "./Sidebar"
// import './Dashboard.css'

 function DashBoard() {
    const [allCakes,setAllcakes] = useState([]);
    // const [sortAllCakes,setsortcake]=useState([])
        useEffect(() => {
            let apiurl="https://apifromashu.herokuapp.com/api/allcakes"
            axios({
                method:"get",
                url:apiurl
            }).then((res)=>{
                // console.log(res.data);
                setAllcakes(res.data.data)
            },(err)=>{
                console.log(err);
            })
        },[])

        function sortCake(){
            let sortallcakes= allCakes.sort((a,b)=>{
                return(a.price-b.price)
            })
            console.log(sortallcakes);   
            // setsortcake(sortallcakes)
        }

        
        return (
            <div>
            {/* {console.log(sortAllCakes)} */}
            {/* <Sidebar/> */}
            <div>
                    <div>
                    {allCakes.map((ele,index)=>{
                        // console.log(ele,index);
                        return(
                            <div class = "dashContainer">   
                           
                            <div class="card dashCard" >
                        <img style={{height:"10em", width:"15em"}} src={ele.image} class="card-img-top" alt="..."></img>
                        <div class="card-body dashBody">
                                <h5 class="card-title">{ele.name}</h5>                
                                <p class="card-text">Rs{ele.price}</p>    

                         
                          <button type="button" class="btn btn-dark"><i class="fas fa-edit"></i></button>
                        </div>
                    </div>  
                            
                      
                            </div>
                            // <div>
                            //     <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4" style={{top:"200px"}}>
                            //     <div class="table-responsive" style={{alignItems:"center"}}>
                            //         <table class="table table-striped table-sm">
                            //         <tbody style={{padding:"10px"}}>
                            //             <tr >
                            //             <td style={{width:"50px"}}>{index+1}</td>
                            //             <td style={{width:"100px"}}><img src={ele.image} style={{height:"50px",width:"50px"}}></img></td>
                            //             <td style={{width:"150px"}}>{ele.name}</td>
                            //             <td style={{width:"100px"}}>{ele.price}</td>
                            //             <td style={{width:"150px"}}>
                            //                 <div class="btn-group" role="group" aria-label="Basic example" style={{cursor:"pointer"}}>
                            //                 <Link to="/Content"><button type="button" class="btn btn-secondary" onClick={(event)=>console.log(event.target)}>+</button></Link>   
                            //                 </div>
                            //             </td>
                            //             </tr>
                            //         </tbody>
                            //         </table>
                            //         </div>
                            //     </main>  
                            // </div>
                            )                     
                    })}  
                    </div>                
            </div>
          
        </div>
    )
}

export default  DashBoard