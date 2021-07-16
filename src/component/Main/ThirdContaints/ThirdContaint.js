import React, {Component } from 'react';
import Structure from "../Containts/Structure";
import './ThirdContaint.css'

class ThirdContaint extends Component {
   
    render() { 
        return ( 
            <section className="third-hightlight-wrapper">
               <Structure titleColor= "white" title="iPad Pro" priceColor ="white" 
               price = "Supercharged by the Apple M1 chip."
			    colorClass="white" description=""
				/>
	        </section>
         );
    }
}
 
export default ThirdContaint;

