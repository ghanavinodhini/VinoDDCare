import React, { Component } from 'react';

import './WelcomePg.css';
import dog2 from './dog2.png';

 class WelcomePg extends Component {
    constructor(...args){
        super(...args);

        this.state= {
            message:"Enter to ths Site"
        }
}

NavigatePage=()=>{
    this.setState({
        message:"Thanks"
    });

}

    render(){
        const {} = this.props;
        return (
            <div class="welcome">
                
                <div class="welcomeText">
                    Welcome to Doggy Day Care! 
                </div>
                <div class="welcomeImage">
                    <img class ="dog_img"src={dog2} alt=""/>
                </div>
                <div class="welcome_btn">
                    <button class="btnClass" onClick={this.NavigatePage} >{this.state.message}</button>
                </div>
            </div>
        );
}
}


export default WelcomePg