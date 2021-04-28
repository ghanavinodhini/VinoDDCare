import React, { Component } from 'react';

import './FooterPg.css';

 class FooterPg extends Component {
    constructor(...args){
        super(...args);
}

    render(){ 
        return (
            <div className="footer">
                <hr/>
                &copy; Copy Right 2021. All Rights reserved. 
            </div>
        );
}
}



export default FooterPg