import React, {Component } from 'react';
import Structure from "../Containts/Structure"
import './SecContaints.css';

class SecondContaints extends Component {
    
    render() { 
        return ( 
            <section className="second-hightlight-wrapper">
				<Structure  alert="" titleColor="white" title="iPhone 12 Pro" priceColor ="grey" price = " From $41.62/mo. for 24 mo.or $999 before trade-in."
				colorClass="white "description="It's a leap year."
				/>
              
	        </section>
         );
    }
}
export default SecondContaints;