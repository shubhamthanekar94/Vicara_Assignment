import React from "react";

const Stackansdetails = (props) => {
  return (
    <div className="container mt-5">
      <div class="row">
        <div class="col-sm-1">
          <span class="glyphicon glyphicon-chevron-up ml-1"></span>
          <br />
          <p className="mt-2">6034</p>
          <span class="glyphicon glyphicon-chevron-down ml-1"></span>
          <br />
          <span class="glyphicon glyphicon-ok ml-2 mt-4"></span>
        </div>
        <div class="col-sm-7">
          <h3>Answer</h3>
          <h2>Scoping rules</h2>
          <p>
            Main difference is scoping rules. Variables declared by var keyword
            are scoped to the immediate function body (hence the function scope)
            while let variables are scoped to the immediate enclosing block
            denoted by {} (hence the block scope).
          </p>
          <p>
            The reason why let keyword was introduced to the language was
            function scope is confusing and was one of the main sources of bugs
            in JavaScript.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stackansdetails;
