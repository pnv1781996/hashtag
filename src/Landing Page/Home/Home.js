import React from "react";
import Header from "../../Components/Header/Header";
import DigitalExperiance from "./DigitalExp/DigitalExperiance";
import Startup from "./Startup/Startup";
import Ourwork from "./OurWork/Ourwork";
import DFSService from "./DFSService/DFSService";
export default function HomePage() {
  return (
    <div>
      <Header />
      <DigitalExperiance />
      <Startup />
      <Ourwork />
      <DFSService />
    </div>
  );
}
