import React from "react";

function Home({ home }) {
  console.log(home);

  return (
    <>
      <h6 style={{color:"red"}}>ID: {home.id}</h6>
      <h5>BrandName: {home.brandName}</h5>
      <h5>Model: {home.model}</h5>
      <h5>Memory: {home.memory}</h5>
      <img src={home.image} alt="picture" style={{width:"100px", height:"auto"}} />
      <h5>Price: ${home.price}</h5>
      <h5>Manufacture: {home.manufacture}</h5>
    </>
  );
}

export default Home;
