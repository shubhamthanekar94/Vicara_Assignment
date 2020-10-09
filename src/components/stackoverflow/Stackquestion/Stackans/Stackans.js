import React from "react";

const Stackans = (props) => {
  return (
    <div className="container">
      <div class="row">
        <div class="col-sm-1">
          <span class="glyphicon glyphicon-chevron-up ml-1"></span>
          <br />
          <p className="mt-2">2520</p>
          <span class="glyphicon glyphicon-chevron-down ml-1"></span>
        </div>
        <div class="col-sm-7">
          <h4>ECMAScript 6 introduced the let statement.</h4>
          <p>
            I've heard it that it's described as a local variable, but I'm still
            not quite sure how it behaves differently than the var keyword.
          </p>
          <p>
            What are the differences? When should let be used instead of var?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stackans;
