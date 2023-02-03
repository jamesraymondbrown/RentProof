import React from 'react';
import "./RentList.scss";

const RentList = () => {
  return (
    <div class="RentList-container">
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
