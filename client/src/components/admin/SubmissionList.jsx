import axios from "axios"
import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import { useState } from "react"
import { FilterMatchMode } from "primereact/api"
import { InputText } from "primereact/inputtext"
import { Button } from "primereact/button"
import { Image } from 'primereact/image';
// import { Badge } from "primereact/badge"

export default function SubmissionList(props) {
  const prices = props.state.prices;
  const properties = props.state.properties;
  const users = props.state.users;

  const [filters, setFilters] = useState({
    global: {value: null, matchMode: FilterMatchMode.CONTAINS}
  })

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

  const handleApprove = (id) => {
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
  
  const handleReject = (id) => {
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
  
  let pending
  prices && (pending = prices.filter(price => price.admin_status === 'pending'));

  let pendingList

  pending && (pendingList = pending.map((submission) => {
    return {
      id: submission.id,
      photo: <Image src='https://as2.ftcdn.net/v2/jpg/02/81/30/37/1000_F_281303741_hMZeppEpgmvzRnnh5omyqDGQQBntAMXi.jpg' alt="Image" width='200px' />,
      address: getPropertyByPriceId(submission).street_address,
      city: getPropertyByPriceId(submission).city,
      province: getPropertyByPriceId(submission).province,
      latitude: getPropertyByPriceId(submission).latitude,
      longitude: getPropertyByPriceId(submission).longitude,
      price: submission.price,
      size: submission.square_footage,
      documentation: <Image src='https://as2.ftcdn.net/v2/jpg/03/21/02/09/1000_F_321020933_0dGobZ034LYo24osGbaWCAggGSGYUOjK.jpg' alt="Image" width='120px' />,
      user: getUserByPriceId(submission).name,
      status: submission.admin_status,
      approve: <Button label="Approve" className="p-button-success" onClick={() => handleApprove(submission.id)} />,
      reject: <Button label="Reject" className="p-button-danger" onClick={() => handleReject(submission.id)} />
    }  
  })  
  )
  return (
    <div>
      <InputText
        placeholder="Search"
        onInput={(e) =>
          setFilters({
            global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS }
        })}
      />
      <DataTable value={pendingList} header="Pending Prices" sortMode="multiple" filters={filters}
        paginator
        rows={3}
        rowsPerPageOptions={[1,2,3]}
      >
        <Column field="photo" header="Photo" />
        <Column sortable field="id" header="Id" />
        <Column sortable field="address" header="Address" />
        <Column sortable field="city" header="City" />
        <Column sortable field="province" header="Province" />
        <Column sortable field="latitude" header="Latitude" />
        <Column sortable field="longitude" header="Longitude" />
        <Column sortable field="price" header="Price" />
        <Column sortable field="size" header="Size" />
        <Column field="documentation" header="Documentation" />
        <Column sortable field="user" header="User" />
        <Column className="status" field="status" header="Status" />
        <Column field="approve" header="Approve" />
        <Column field="reject" header="Reject" />
      </DataTable>
    </div>
  );
}



