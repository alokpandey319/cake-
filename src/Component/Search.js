import { useState, useEffect } from "react";
import Cake from "./Cake";
import queryString from "query-string";
import axios from "axios";
import '../App.css';


function Search(props) {  
  var [cakeresult, setCakes] = useState([]);
  var [isloading,setloading]=useState(false)
  var query = queryString.parse(props.location.search);
  console.log(query.q);

  useEffect(() => {
    var apiurl = "https://apifromashu.herokuapp.com/api/searchcakes?q=" + query.q;
    setloading(true)
    axios({
      method:"get",
      url: apiurl,
    }).then(
      (response) => {
        // toast("Your Cakes");            
        console.log(response.data);
        setCakes(response.data.data);
        setloading(false)
      },
      (error) => {
       
        console.log(error);
      }
      
    );
  }, [query.q]);

  return (
    <div>

    <div className="row">
      {isloading && <div><div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div></div>}
      {cakeresult.map((each) => {
        return <Cake cakedata={each} />;
      })} 

      {cakeresult.length<=0 && <div> <div class="card">
  <h5 class="card-header">Error</h5>
  <div class="card-body">
    <p class="card-text">Image not found.</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div> </div>} 

     
   
      
      </div>
    </div>
  );
}

export default Search;




