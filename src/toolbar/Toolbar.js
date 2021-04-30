import React from "react";
import './Toolbar.css';

const toolbar = props => (
<header className="toolbar">
  <nav className="toolbar_navigation">
      <div></div>
      <div className="toolbar_logo">
        <a href="/">Vino's</a>
      </div>
      <div className="spacer"></div>
      <div className="toolbar_navigation_items">
          <ul>
            <li>
              <a href ="/CustList">Customers</a>          
            </li>
            <li>
              <a href="/ViewList">Dog List</a>
            </li>
          </ul>
      </div>
  </nav>
</header>
);
export default toolbar;