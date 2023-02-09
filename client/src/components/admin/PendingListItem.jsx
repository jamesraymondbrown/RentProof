import React from 'react';
import axios from 'axios';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function PendingListItem(props) {

  const handleApprove = () => {
   const id = props.id
    console.log("Clicked Approve")
    axios.put(`http://localhost:8001/prices/approve/${id}`)
      .then((response) => {
        console.log('Price Approved', response.data);        
 	      window.location.reload()
      })
      .catch((error) => {
        console.log(error);
      });
 }
  
  const handleReject = () => {
    const id = props.id
    console.log("Clicked Reject")
    axios.put(`http://localhost:8001/prices/reject/${id}`)
      .then((response) => {
        console.log('Price Rejected', response.data);
 	      window.location.reload()
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <tr>
      <td>
        <div className='d-flex align-items-center'>
          <img
            src='https://as2.ftcdn.net/v2/jpg/02/81/30/37/1000_F_281303741_hMZeppEpgmvzRnnh5omyqDGQQBntAMXi.jpg'
            alt=''
            style={{ width: '45px', height: '45px' }}
            className='rounded-circle'
          />
          <div className='ms-3'>
            <p className='fw-bold mb-1'>{props.address}</p>
            <p className='text-muted mb-0'>{props.latitude}, {props.longitude}</p>
          </div>
        </div>
      </td>
       <td>        
          <div className='ms-3'>
          <p className='fw-bold mb-1'>{props.city}</p>
          <p className='text-muted mb-0'>{props.province}</p>
          </div>       
      </td>
      <td>
        <p className='fw-normal mb-1'>${props.price}</p>
        <p className='text-muted mb-0'>{props.size}sqft</p>
      </td>
      <td>
        <img
            src='https://as2.ftcdn.net/v2/jpg/03/21/02/09/1000_F_321020933_0dGobZ034LYo24osGbaWCAggGSGYUOjK.jpg'
            alt=''
            style={{ width: '45px', height: '45px' }}
            className='rounded-circle'
          />
      </td>
      <td>
        <p className='fw-normal mb-1'>{props.user}</p>
      </td>
      <td>
        <MDBBadge color='warning' pill>
          Pending
        </MDBBadge>
      </td>
      <td>
        <MDBBtn className="approve-btn" color='success' rounded size='sm' onClick={handleApprove}>
          Approve
        </MDBBtn>
        <MDBBtn className="reject-btn" color='danger' rounded size='sm' onClick={handleReject}>
          Reject
        </MDBBtn>
      </td>
    </tr>
  )
}