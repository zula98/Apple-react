import React, {Component } from 'react';
import './FourthContaints.css'
import StructureTwo from '../Containts/Structure'
import Structure from '../Containts/Structure'
class ForthContaint extends Component {
    render() { 
        return ( 
            // <section className="fourth-heghlight-wrapper">
            //     <div className="container-fluid">
            //         <div className="row">
            //             <StructureTwo  wrapperClass="left-side-wrapper" 
            //                 innerClassName="left-side-container"
            //                 title= "iMac" description=" Say hello."
            //                 price=""
            //                  link="Apply now"/>
            //             <Structure wrapperClass="right-side-wrapper"
            //                 innerClassName="right-side-container" titleColor="black" linkColor="black"
            //                 title="Intrnational Collection"
            //                link="  Shop the collection"/>
            //         </div>
            //     </div> 
	        // </section>
  
         <section className="fourth-heghlight-wrapper">
         <div className="container-fluid">
             <div className="row">
                 <div className="left-side-wrapper col-sm-12 col-md-6">
                     <div className="left-side-container">
                         
                     <Structure  title="iMac"
                     titleColor="black" description="Say hello. "
                   
         colorClass="black"
         />
          </div>
                 </div>
                 <div className="right-side-wrapper col-sm-12 col-md-6">
                     <div className="right-side-container">
                         <div className="top-logo-wrapper">
                             
                         </div>
                         <div className="description-wraper 
                         Inter">

                         Intrnational Collection
                             
                         </div>
                         <div className="links-wrapper">
                             <ul>
                                 <li><a href="" >Shop the collection</a></li>
                                 
                             </ul> 
                         </div>
                     </div>
                 </div>					
             </div>
         </div> 
     </section>
        );
    }
}
 
export default ForthContaint;