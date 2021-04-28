import React, { Component } from "react";

import './CustList.css';

 class CustList extends Component {
 state ={
    apiResponse:null
};

async componentDidMount() {
    const url = "https://api.jsonbin.io/b/6085725cf6655022c46b73fc/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ apiResponse: data});
  }
    render(){
        if (!this.state.apiResponse) {
            return <div>didn't get a Data</div>;
          }
        return (
            <div className="custlist">
               <table className="custlist_table">
                    <tr className="custlist_table_header">
                      <th>Owner First Name</th>
                      <th>Last Name</th>
                      <th>Phone Number</th>
                      <th>Dog Name</th>
                    </tr>
                {this.state.apiResponse.map((item,i)=>
               
                    <tr className="custlist_table_detail">
                      <td>
                      {item.owner.name}
                      </td>
                      <td>
                      {item.owner.lastName}
                      </td>
                      <td>
                      {item.owner.phoneNumber}
                      </td>
                      <td className="custlist_tblcolumn">
                      {item.name}
                      </td>
                    </tr>     
                    )
                  }               
                  </table>                                
                
            </div>
        );
}
}



export default CustList