import React, { Component } from "react";

import './ViewList.css';

 class ViewList extends Component {
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
            
              <div className="viewlist">
                <div></div>
               <table className="viewlist_tblclass">
                <tr className="viewlist_tblheader">
                  <th>Dog Name</th>
                  <th>Sex</th>
                  <th>Breed</th>
                  <th>Age</th>
                  <th>Chip Number</th>
                  <th>Image</th>
                </tr>
                {this.state.apiResponse.map((item,i)=>
               <tr className="viewlist_tbldetail">
                <td className="viewlist_tblcolumn">{item.name}</td>
                <td>{item.sex}</td>
                <td>{item.breed}</td>
                <td>{item.age}</td>
                <td>{item.chipNumber}</td>               
                <td><a href={item.img}><img src={item.img} className="viewlist_img"/></a></td>
                </tr>
                )
              }
                </table>
                </div>
            
        );
}
}



export default ViewList