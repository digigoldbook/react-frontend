import React from "react";
import Preloader from "../../Preloader/Preloader";
import Timer from "../../Countdown/Timer";
import Optin from "../../Optin/Optin";

import "../../../index.css";


const Home = () => {
  return (
    <div className="App">
      <div className="container">
        <h1>
          Website
          <br />
          Coming Soon
        </h1>
        <Timer />
        <Optin />
        <Preloader />
      </div>
    </div>
  );
};

export default Home;
