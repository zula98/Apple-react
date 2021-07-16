import React, { Component } from 'react';


import AlertSection from "../AlertSection/AlertSection";
import FirstContaint from './FirstContaints/FirstContaint';
import SecondContaints from "./SecondContaints/SecContaints";
import ThirdContaint from "./ThirdContaints/ThirdContaint";
import ForthContaint from "./ForthContaints/FourthContaints";
import FiftyComponent from "./FifthContaints/FifthContaint";
import SixthContaint from "./SixthContaints/SixthContaints";
import Youtube from '../Youtube/Youtube';


class Main extends Component {
  render() {
    return (
      <div>
        <AlertSection />
        <FirstContaint />
        <SecondContaints />
        <ThirdContaint />
        <ForthContaint />
        <FiftyComponent />
        <SixthContaint />
        <Youtube />

      </div>

    );
  }

}

export default Main;