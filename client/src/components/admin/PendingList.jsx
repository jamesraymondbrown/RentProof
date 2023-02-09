import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import PendingListItem from './PendingListItem';

export default function PendingList(props) {

  const prices = props.state.prices;
  const properties = props.state.properties;
  const users = props.state.users;

  const getPropertyByPriceId = (price) => {
    for (let property of properties) {
      if (property.id === price.property_id) {
        return property
      }
    }
  }

  const getUserByPriceId = (price) => {
    for (let user of users) {
      if (user.id === price.user_id) {
        return user
      }
    }
  }
  
  let pending
  prices && (pending = prices.filter(price => price.admin_status === 'pending'));

  let pendingList

  pending && (pendingList = pending.map((submission) => {
    return (
      <PendingListItem
        key={submission.id}
        id={submission.id}
        address={getPropertyByPriceId(submission).street_address}
        latitude={getPropertyByPriceId(submission).latitude}
        longitude={getPropertyByPriceId(submission).longitude}
        size={submission.square_footage}
        price={submission.price}
        documentation={submission.documentation}
        status={submission.admin_status}
        photo={submission.photo}
        city={getPropertyByPriceId(submission).city}
        province={getPropertyByPriceId(submission).province}
        user={getUserByPriceId(submission).name}
      />
    )
  })  
  )
  return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Property</th>
          <th scope='col'>Location</th>
          <th scope='col'>Price</th>
          <th scope='col'>Documentation</th>
          <th scope='col'>Submitted By</th>
          <th scope='col'>Status</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {pendingList}         
      </MDBTableBody>
    </MDBTable>
  );
}