import React, { useState } from "react";
import Header from "./components/Header";
import From from "./From";

function App3() {
  const [but, setBut] = useState(false);
  const hundleBut = () => {
    setBut(true);
  };

  const butVisibility = () => {
    setBut(false);
  };

  return (
    <div>
      <Header onHundleBut={hundleBut} />
      {but === true ? <From onButVis={butVisibility} /> : ""}
    </div>
  );
}

export default App3;






