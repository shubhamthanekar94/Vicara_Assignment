import React from "react";
const footer = (props) => (
  <footer class="white-section fixed-bottom" id={props.secid}>
    <div class="container-fluid">
      <p class="text-center">{props.copyright}</p>
    </div>
  </footer>
);

export default footer;
