import React from "react";
import styled from "styled-components";

function Expence(props) {
  const maxRash=30000;
  const rashod = props.rash;
  const pros=rashod*100/maxRash
  console.log(pros);
  
  return (
    <Div>
      <div className="chartBar">
        {" "}
        <div style={{height:pros+"%"}} className="shkala"></div>{" "}
      </div>

      <span>January</span>
    </Div>
  );
}

export default Expence;

const Div = styled.div`
  border: 2px solid;
  margin-top: 30px;
  .chartBar {
    border: 1px solid;
    width: 50px;
    height: 260px;
    border-radius: 40px;
    display: flex;
    flex-direction: column-reverse;
    overflow: hidden;
  }
  .shkala {
    /* height:50%; */
    background-color: red;
  }
`;
