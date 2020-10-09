import React from "react";
import Layout from "./containers/Layout";
import Stackquestion from "./Stackquestion/Stackquestion";
const Stackoverflow = () => {
  return (
    <Layout>
      <Stackquestion
        asked="11 Years, 5 Months ago"
        active="1 month ago"
        viewed="1.4m Times"
      />
    </Layout>
  );
};

export default Stackoverflow;
