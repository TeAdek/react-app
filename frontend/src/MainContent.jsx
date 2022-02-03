import React, { Component } from "react";

export default class MainContent extends Component {
  state = { appTitle: "Customers", customersCount: "5" };
  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.appTitle}
          <span className="badge badge-secondary m-2">
            {this.state.customersCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
      </div>
    );
  }

  //Executes when the user clicks on Refresh button
  onRefreshClick = () =>{
      this.setState({customersCount: 7,});
  }
}
