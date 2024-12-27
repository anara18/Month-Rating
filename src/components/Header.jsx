import React from "react";
import styled from "styled-components";

function Header({ onHundleBut }) {
  return (
    <Div>
      <img src="/img.png" alt="" />
      <h1 style={{ fontSize: "30px", paddingTop: "25px", color: "white" }}>
        ⫷⫻ LOGO ⫸
      </h1>
      <button
        style={{
          width: "150px",
          height: "30px",
          backgroundColor: "white",
          color: "blue",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginRight: "80px",
          marginTop: "56px",
        }}
        onClick={onHundleBut}
      >
        ADD PRODUCT
      </button>
    </Div>
  );
}

const Div = styled.div`
  margin: auto;
  width: 1115px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  background-color: blue;
  img {
    width: 230px;
    height: 130px;
  }
`;
export default Header;
