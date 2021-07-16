import React, {Component } from 'react';
import './SixthContaints.css'
import applecardlogo from "../../../images/icons/logo__dcojfwkzna2q_large.png"
import tvlogo from "../../../images/icons/logo_light__cfvl40z2nzau_large.png"
class SixthContaint extends Component {
    
    render() { 
        return (  
            <section className="sixth-heghlight-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="left-side-wrapper col-sm-12 col-md-6">
                            <div className="left-side-container">
                              
                                 <div className="top-logo-wrapper">
                                     <div className="logo-wrapper">
                                        <img src={applecardlogo}/>
                                    </div> 
                                </div>
                                <div className="description-wraper ">
                                  Get up to 3% Daily Cash back <br/>with every purchase.
                                </div>
                                <div className="links-wrapper">
                                    <ul>
                                        <li><a href="">Learn more</a></li>
                                        <li><a href="">Apply now</a></li>
                                    </ul> 
                                </div>						
                            </div>
                        </div>
                           <div className="right-side-wrapper col-sm-12 col-md-6">
                            <div className="right-side-container">
                               
                                 <div className="top-logo-wrapper">
                                     <div className="logo-wrapper">
                                        <img src={tvlogo}/>
                                    </div> 
                                </div>
                                <div className="description-wraper white">
                                    {/* Agent 8 is a small hero on a big mission. */}
                                </div>
                                					
                            </div>
                        </div>
                            
                      
                         </div>
                    
                </div> 
            </section>
        );
    }
}
 
export default SixthContaint;