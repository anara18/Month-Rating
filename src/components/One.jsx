import React from "react";
import Two from "./Two";
function One({ city }) {
  return (
    <div>
      {/* <h1>One</h1> */}
      <Two city={city} />
    </div>
  );
}

export default One;
