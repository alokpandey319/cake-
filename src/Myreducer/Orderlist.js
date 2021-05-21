import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderCakeList: [],
    };
  }
  componentDidMount() {
     console.log(localStorage)
    let apiurl = "https://apifromashu.herokuapp.com/api/addcakeorder";
    axios({
      method: "post",
      url: apiurl,
      headers: { authtoken: 'apibyashu' },
    }).then(
      (res) => {
        console.log(res);
        // console.log("response",res.data.cakeorders);
        this.setState({
          orderCakeList: res.data.cakeorders,
        });
      },
      (err) => {
        console.log("Error", err);
      }
    );
  }

  render() {
    console.log(this.state.orderCakeList);
  
    return (
      <div>
        <table class="table" style={{ marginTop: "100px" }}>
          <thead class="thead-dark">
            <tr>
              <th scope="col">Orders</th>
              <th scope="col">Date</th>
              <th scope="col">price</th>
            </tr>
          </thead>
        </table>

        <div>
          {/* {this.state.orderCakeList.map((ele, index) => {
            return (
              <div class="accordion" id="accordionExample">
                <div class="card">
                  <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                      <button
                        class="btn  btn-block text-left"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne">
                        Name:-({ele.name})
                        <span style={{ marginLeft: "500px" }}>
                          {ele.orderdate}
                        </span>
                        <span style={{ marginLeft: "300px" }}>{ele.price}</span>
                      </button>
                    </h2>
                  </div>

                  <div
                    id="collapseOne"
                    class="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample">
                    <div class="card-body" style={{ marginLeft: "10px" }}>
                      <div>
                        <p>
                          Cakes({ele.cakes})({ele.orderid})
                        </p>
                        <p>Address({ele.address})</p>
                        <p>PhoneNo({ele.phone})</p>
                        <p>Pincode({ele.pincode})</p>
                        <p>PaymentMode({ele.mode})</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}*/}
        </div>
      </div>
    );
  }
}

export default connect((state, props) => {
  console.log(state);
  return {
    OrderList: state["order_list"],
  };
})(OrderList);
