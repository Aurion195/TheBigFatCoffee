import React from "react";
import axios from "axios";
import Profile from "./profile.component";

class BuyTable extends React.Component {
  constructor(props) {
    super(props);
    this.chartReference = React.createRef();
    this.state = {
      username: localStorage.getItem("username"),
    };
  
  }
  handleSubmitClickBuy = (e) => {
    e.preventDefault();
    this.Buy();
    
  };
  

  handleSubmitClickSale = (e) => {
    e.preventDefault();
    this.Sale();
   
  };
  Buy() {
    const {updateAddMoney}=this.props;
    updateAddMoney(50); 
  }

  Sale() {
    const {updateLessMoney}=this.props;
    updateLessMoney(50);
  }


  render() {
    
    return (

      <div class="row">
        <div class="col-md-12">
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Prices</th>
                <th>Numbers</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Café grand mere</td>
                <td>$50</td>
                <td>
                  <select name="number" id="number">
                    <option value="1">1</option>
                  </select>
                </td>
                <td>
                  <div class="my-auto">
                    <button
                      type="button"
                      onClick={this.handleSubmitClickBuy}
                      class="center btn btn-success"
                    >
                      Achat
                    </button>
                    <button
                      type="button"
                      onClick={this.handleSubmitClickSale}
                      class="center btn btn-success"
                    >
                      Vente
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="table-active">
                <td>Café Richard</td>
                <td>$50</td>
                <td>
                <select name="number" id="number">
                    <option value="1">1</option>
                  </select>
                </td>
                <td>
                <div class="my-auto">
                    <button
                      type="button"
                      onClick={this.handleSubmitClickBuy}
                      class="center btn btn-success"
                    >
                      Achat
                    </button>
                    <button
                      type="button"
                      onClick={this.handleSubmitClickSale}
                      class="center btn btn-success"
                    >
                      Vente
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="table-success">
                <td>Café Nespresso</td>
                <td>$50</td>
                <td>
                <select name="number" id="number">
                    <option value="1">1</option>
                    
                  </select>
                </td>
                <td>
                <div class="my-auto">
                    <button
                      type="button"
                      onClick={this.handleSubmitClickBuy}
                      class="center btn btn-success"
                    >
                      Achat
                    </button>
                    <button
                      type="button"
                      onClick={this.handleSubmitClickSale}
                      class="center btn btn-success"
                    >
                      Vente
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default BuyTable;
