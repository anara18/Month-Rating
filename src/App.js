// import Header from "./components/Header.jsx";
// import User from "./components/User";
// import Props from "./components/Props";

// import Props from "./components/Props";

// function App() {
//   const  data = 'Hello'
//   const  data2 = 'Hello World'
//   return (
//     <>
//       <Props test = {data} />
//       <Props test2 = {data2} />
//     </>

//   )
// }

// export default App

////////////////

/// import React from 'react'
// import Props from "./components/Props";
// function App() {
//   const userInfo = {
//     userName: "Asan",
//     userAge: 18,
//     isStudent: true,
//     isPupil: false,
//   };
//   return (
//     <>
//       < Props data = {userInfo} />
//     </>
//   );
// }

// export default App;

/////////////

// ///import React from 'react'
// import City from "./components/City"

// function App() {

//   const city = [
//     {id:1,cityName:'talas'},
//     {id:2,cityName:'kara-suu'},
//     {id:3,cityName:'jalal-abad'},
//     {id:4,cityName:'batken'},
//     {id:5,cityName:'naryn'},
//   ]
//   return (
//     <>
//     {city.map(data =>(
//       < City key={data.id} data={data.cityName}/>
//     ))}
//     </>
//   )
// }

// export default App

// import React from 'react'
// import One from "./components/One";
// function App() {
//   const city ="Bishkek"
//   return (
//     <div>
//     <h1>Parent</h1>
//     < One city={city} />
//     </div>
//   )
// }

// export default App

// import React, { Fragment } from "react";
// import Home from "./components/Home";
// function App() {
//   const phones = [
//     {
//       id: 1,
//       brandName: "Apple",
//       model: "iPhone 14 Pro",
//       memory: "128GB",
//       image:
//         "https://i.pinimg.com/736x/26/be/56/26be56634ad9773c9d8f6315cac2cba7.jpg",
//       price: 1200,
//       manufacture: "USA",
//     },
//     {
//       id: 2,
//       brandName: "Samsung",
//       model: "Galaxy S23 Ultra",
//       memory: "256GB",
//       image:
//         "https://i.pinimg.com/736x/26/be/56/26be56634ad9773c9d8f6315cac2cba7.jpg",
//       price: 1100,
//       manufacture: "South Korea",
//     },
//     {
//       id: 3,
//       brandName: "Google",
//       model: "Pixel 8",
//       memory: "128GB",
//       image:
//         "https://i.pinimg.com/736x/26/be/56/26be56634ad9773c9d8f6315cac2cba7.jpg",
//       price: 800,
//       manufacture: "USA",
//     },
//     {
//       id: 4,
//       brandName: "Xiaomi",
//       model: "Mi 13 Pro",
//       memory: "512GB",
//       image:
//         "https://i.pinimg.com/736x/26/be/56/26be56634ad9773c9d8f6315cac2cba7.jpg",
//       price: 900,
//       manufacture: "China",
//     },
//     {
//       id: 5,
//       brandName: "OnePlus",
//       model: "OnePlus 11",
//       memory: "256GB",
//       image:
//         "https://i.pinimg.com/736x/26/be/56/26be56634ad9773c9d8f6315cac2cba7.jpg",
//       price: 750,
//       manufacture: "China",
//     },
//     {
//       id: 6,
//       brandName: "Huawei",
//       model: "P60 Pro",
//       memory: "256GB",
//       image:
//         "https://i.pinimg.com/736x/26/be/56/26be56634ad9773c9d8f6315cac2cba7.jpg",
//       price: 950,
//       manufacture: "China",
//     },
//     {
//       id: 7,
//       brandName: "Sony",
//       model: "Xperia 1 V",
//       memory: "512GB",
//       image:
//         "https://i.pinimg.com/736x/26/be/56/26be56634ad9773c9d8f6315cac2cba7.jpg",
//       price: 1200,
//       manufacture: "Japan",
//     },
//     {
//       id: 8,
// //       brandName: "Oppo",
// //       model: "Find X6 Pro",
// //       memory: "256GB",
// //       image:
// //         "https://i.pinimg.com/736x/26/be/56/26be56634ad9773c9d8f6315cac2cba7.jpg",
// //       price: 850,
// //       manufacture: "China",
// //     },
// //     {
// //       id: 9,
// //       brandName: "Vivo",
// //       model: "X90 Pro",
// //       memory: "512GB",
// //       image:
// //         "https://i.pinimg.com/736x/26/be/56/26be56634ad9773c9d8f6315cac2cba7.jpg",
// //       price: 890,
// //       manufacture: "China",
// //     },
// //     {
// //       id: 10,
// //       brandName: "Motorola",
// //       model: "Edge 40 Pro",
// //       memory: "256GB",
// //       image:
// //         "https://i.pinimg.com/736x/26/be/56/26be56634ad9773c9d8f6315cac2cba7.jpg",
// //       price: 700,
// //       manufacture: "USA",
// //     },
// //   ];
// //   console.log(phones);

// //   return (
// //     <div className="home">
// //       <h1>Phones</h1>
// //       {phones.map((home) => (
// //         <Fragment key={home.id}>
// //           <Home home={home} />
// //           <Home home={home} />
// //         </Fragment>
// //       ))}
// //     </div>
// //   );
// // }

// // export default App;

// import React, { useState } from "react";

// function App() {
//   let [sun, setSun] = useState(false);
//   let changeNameHandler = () => {
//     setSun("!Asan");
//   };
//   // let onChange = () => {
//   //   setSun("Aibek");
//   // };
//   return (
//     <div>
//       <h1>Wellcome {sun ? 'Aibek':'Asan'}</h1>
//       <button onClick={changeNameHandler}>Change Username</button> <hr />
//       {/* <button onClick={onChange}>Change Username 2</button> */}
//     </div>
//   );
// }

// export default App;
