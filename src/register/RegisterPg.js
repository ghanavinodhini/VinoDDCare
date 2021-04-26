import React, { Component } from "react";

import './RegisterPg.css';

class RegisterPg extends Component {
 state ={
    apiResponse:null
};

async componentDidMount() {
    const url = "http://universities.hipolabs.com/search?country=sweden";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ apiResponse: data});
  }
    render(){
        if (!this.state.apiResponse) {
            return <div>didn't get a Data</div>;
          }
        return (
            <div className="list_univ">
                {this.state.apiResponse.map((item,i)=>
                <p>
                <div>{item.name}</div>
                <div>{item.country}</div>
                <div>{item.domains}</div>
                <div>{item.web_pages}</div>
                <div>{item.alpha_two_code}</div>
                <div>{item.domains}</div>                
                </p>
                )
                }
            </div>
        );
}
}



export default RegisterPg