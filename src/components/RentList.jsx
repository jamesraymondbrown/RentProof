import "./RentList.scss";
import React from 'react';
import MultiRangeSlider from "./multiRangeSlider/MultiRangeSlider";


const RentList = () => {
  return (
    <div class="RentList">
      
    <div className="slider-container">
        <MultiRangeSlider
      min={0}
      max={5000}
      onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      style={{ height: "20px" }}
    />
      </div>
      <img src="https://s3.amazonaws.com/lws_lift/cressey/images/gallery/768/1405699411_201407_Cressey_VictoriaDr_H4_0004.jpg" alt="Rent List" class="thumbnail"/>
      <table>
        <thead>
          <tr>
            <th>Property Name</th>
            <th>Location</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Property Price History</td>
            <td>$1000</td>
            <td>$1100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RentList;
