import React from "react";
import axios from "axios";

import Profile from "./profile.component";

import { useState } from "react";
import { PropTypes } from "react";
import Chart from "./chart.component";
import BuyTable from "./BuyTable.component";

class PageChart extends React.Component{

  constructor(props) {
    super(props);
    this.chartReference = React.createRef();
    this.state = {
      username :localStorage.getItem("username"),
      connected: localStorage.getItem("connected"),
      money:"",
    };
  }
  /**
   * @summary Send details to server
   */

  updateAddMoney = (amount)=>{
    let payload = {
      username: this.state.username,
      money: amount,
    };
    axios
      .post("http://localhost:3000/addMoney", payload)
      .then(function (response) {
        if (response.status === 200) {
          if (response.statusText === "OK") {
          console.log('vous avez été credité')
          }
        } else {
          console.log("Some error ocurred");
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    payload = {
        "username": this.state.username,
    }
    console.log(payload)
    var self = this;
    axios.post('http://localhost:3000/getMoney', payload)
        .then(function(response) {
            if (response.status === 200) {
                if(response.statusText ==='OK'){
                  console.log(response.data.valeur)
                  self.setState({money: response.data.valeur});
                  localStorage.setItem('money',response.data.valeur)
                }
  
            } else {
                console.log("Some error ocurred");
            }
        })
        .catch(function(error) {
            console.log(error);
        });
     
  }

  updateLessMoney = (amount)=>{
    let payload = {
      username: this.state.username,
      money: amount,
    };
    axios
      .post("http://localhost:3000/withdrawalMoney", payload)
      .then(function (response) {
        if (response.status === 200) {
          if (response.statusText === "OK") {
          console.log('vous avez été credité')
          }
        } else {
          console.log("Some error ocurred");
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    payload = {
        "username": this.state.username,
    }
    console.log(payload)
    var self = this;
    axios.post('http://localhost:3000/getMoney', payload)
        .then(function(response) {
            if (response.status === 200) {
                if(response.statusText ==='OK'){
                  console.log(response.data.valeur)
                  self.setState({money: response.data.valeur});
                  localStorage.setItem('money',response.data.valeur)
                }

            } else {
                console.log("Some error ocurred");
            }
        })
        .catch(function(error) {
            console.log(error);
        });

  }

render() {
  return (
    <div>
      <>
        <div class="container-fluid">
          <>
            <Profile money={this.state.money}></Profile>
            <div class="row">
              <div class="col-md-6">
                <div class="card mt-5 border-5 pt-2 active pb-0 px-3">
                  <div class="card-body ">
                    <h4 class="card-title">Café grand mere</h4>
                    <Chart url="http://localhost:3000/chart_coffee_details/grand_mere" />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card mt-5 border-5 pt-2 active pb-0 px-3">
                  <div class="card-body ">
                    <h4 class="card-title">Café Richard</h4>
                    <Chart url="http://localhost:3000/chart_coffee_details/cafe_richard" />
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 ">
                <div class="card mt-5 border-5 pt-2 active pb-0 px-3">
                  <h4 class="card-title">Café Nespresso</h4>
                  <Chart url="http://localhost:3000/chart_coffee_details/nespresso" />
                </div>
              </div>
            </div>
          </>
        </div>
      </>

      {this.state.connected === "true" ? (
        <>
          <div class="card mt-5 border-5 pt-2 active pb-0 px-3">
            <BuyTable updateAddMoney={this.updateAddMoney} updateLessMoney={this.updateLessMoney}/>
          </div>
        </>
      ) : (
        <>
          <br></br>
          <h3>You need to be connected to buy action !</h3>
          <div class="form-row text-center">
            <div class="col-12">
              <button type="submit" class="btn btn-primary">
                Go to login page
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
componentDidMount() {
  const payload = {
      "username": this.state.username,
  }
  console.log(payload)
  var self = this;
  axios.post('http://localhost:3000/getMoney', payload)
      .then(function(response) {
          if (response.status === 200) {
              if(response.statusText ==='OK'){
                console.log(response.data.valeur)
                self.setState({money: response.data.valeur});
                localStorage.setItem('money',response.data.valeur)
              }

          } else {
              console.log("Some error ocurred");
          }
      })
      .catch(function(error) {
          console.log(error);
      });
  }
}
export default PageChart;
