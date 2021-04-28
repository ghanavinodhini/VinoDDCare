import React, { Component } from 'react';
import './WelcomePg.css';
import dog2 from './dog2.png';

 class WelcomePg extends Component {
    constructor(...args){
        super(...args);

}


    render(){
      
        return (
            <div class="welcome">
                
                <div class="welcomeText">
                    Welcome to Doggy Day Care! 
                </div>
                <div class="welcomeImage">
                    <img class ="dog_img"src={dog2} alt=""/>
                </div>
                <div>
                    <h3>About Us</h3>
                    <hr/>
                    <p className="aboutus_content">
                        <p>Vino's Dogs Day care offers friendly and loving alternative to your pet and makes feel at home when you are away. 
                            Our Day care facility allows you to leave your pet in the carring environment. We ensure that both social and individual requirements
                            for each pet is fulfilled atmost satisfaction. 
                        </p>
                        <p>Meals can be provided on request or owners can bring in sealed container. Our staff is dedicated to ensuring that 
                            your beloved pet receive all the love and attention that deserves in your absence.
                         
                        </p>

                    
                    </p>
                    
                </div>
            
            </div>
        );
}
}


export default WelcomePg