import React from "react";
import Stackans from "./Stackans/Stackans";
import Stackansdetails from "./Stackansdetails/Stackansdetails";

const Stackquestion = (props) => {
  return (
    <div className="col-md-6 offset-sm-3 text-left">
      <h2>What is the difference between "let" and "var"?</h2>
      <p>
        Asked {props.asked} Active {props.active} Viewed {props.viewed}
      </p>
      <hr />
      <Stackans />
      <Stackansdetails />
    </div>
  );
};

export default Stackquestion;
