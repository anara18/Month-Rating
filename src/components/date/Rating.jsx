import React from "react";
import Expence from "../Expence";

function Rating() {
  const months = [
    { month: "January", rashod: 0 },
    { month: "February", rashod: 0 },
    { month: "March", rashod: 0 },
    { month: "April", rashod: 0 },
    { month: "May", rashod: 0 },
    { month: "June", rashod: 0 },
    { month: "July", rashod: 0 },
    { month: "August", rashod: 0 },
    { month: "september", rashod: 0 },
    { month: "oktober", rashod: 0 },
    { month: "Novomber", rashod: 0 },
    { month: "December", rashod: 0 },
  ];
  return (
    <div className="chart">
      {months.map((el)=>(
        <Expence month={el.month} rash={el.rashod}/>
      ))}
    </div>
  );
}

export default Rating;
