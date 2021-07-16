import React, {Component}from "react"
import "./FirstContaint.css";
import Structure from "../Containts/Structure";

class FirstContaint extends Component {
    render() { 
        return ( 
            <section className="first-hightlight-wrapper">
            <Structure   titleColor="black" title="iPhone 12" price = "From $29.12/mo.for 24 mo.or $699 before trad-in. " priceColor ="grey" 
         colorClass="black" description="Blast past fast
                    offers." 
                />
         </section>
     );  
    }
}
 
export default FirstContaint;


