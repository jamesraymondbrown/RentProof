import React, { useContext, useState, useEffect } from "react";
import { DataBaseContext } from "../../providers/DataBaseProvider";
import axios from "axios";
import { Button } from "primereact/button"
import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"
import { FilterMatchMode } from "primereact/api"
import { InputText } from "primereact/inputtext"
import './Dashboard.scss'
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"

export default function AdminPriceList() {

  console.log("Ran Admin Price List")
  
  const { users, setUsers, properties, setProperties, prices, setPrices } = useContext(DataBaseContext);
  
  const [filters, setFilters] = useState({
    global: {value: null, matchMode: FilterMatchMode.CONTAINS}
  })

//   const deletePricesForProperty = (property) => {
//   return prices
//     .filter(price => {
//       return price.property_id !== property.id
//     })
//     // .reverse()
//     .map(price => {
//       return price
//     })
// }

  // const handleDelete = (id) => {
  //   console.log("Clicked Delete")
  //   axios.delete(`http://localhost:8001/properties/${id}`)
  //     .then((response) => {
  //       console.log('Property Deleted', response.data);
  //       const index = properties.findIndex((p) => p.id === response.data.id);
  //       const newProperties = [...properties]
  //       newProperties.splice(index, 1)
  //       setProperties(newProperties)
  //       const newPrices = deletePricesForProperty(response.data)
  //       setPrices(newPrices)
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  const trimSqlDate = (date) => {
    const newDate = date.split('').splice(0,10)
    return newDate
  }
  
  let tablePrices
  prices && (tablePrices = prices.map((price) => {
    return {
      property: price.property_id,
      id: price.id,
      date: trimSqlDate(price.date),
      price: price.price,
      delete: <Button label="x" className="p-button-danger" />,
    }  
  }))

  // onClick={() => handleDelete(property.id)}
  
  return (
    <div>
      <InputText
        placeholder="Search"
        onInput={(e) =>
          setFilters({
            global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS }
        })}
      />
      <DataTable value={tablePrices} header="Prices" sortMode="multiple" filters={filters}
        paginator
        rows={5}
        // rowsPerPageOptions={[1,2,3,4]}
      >
        <Column sortable field="property" header="Property Id" />
        <Column sortable field="id" header="Id" />
        <Column sortable field="date" header="Date" />
        <Column sortable field="price" header="Price" />
        <Column field="delete" header="Delete" />
      </DataTable>
    </div>
  );
}
