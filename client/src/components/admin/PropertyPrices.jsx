import React, { useState, useContext, useEffect, useRef } from 'react';
import { DataBaseContext } from "../../providers/DataBaseProvider";
import axios from 'axios';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { FilterMatchMode } from "primereact/api"
import { InputText } from "primereact/inputtext"
import './Dashboard.scss'

export default function PropertyPrices() {

  const { users, setUsers, properties, setProperties, prices, setPrices } = useContext(DataBaseContext);

  const [expandedRows, setExpandedRows] = useState(null);
  const toast = useRef(null);

    const [filters, setFilters] = useState({
    global: {value: null, matchMode: FilterMatchMode.CONTAINS}
    })
  
   const deletePricesForProperty = (property) => {
  return prices
    .filter(price => {
      return price.property_id !== property.id
    })
    .map(price => {
      return price
    })
}

  const handleDelete = (id) => {
    console.log("Clicked Delete Property")
    axios.delete(`http://localhost:8001/properties/${id}`)
      .then((response) => {
        console.log('Property Deleted', response.data);
        const index = properties.findIndex((p) => p.id === response.data.id);
        const newProperties = [...properties]
        newProperties.splice(index, 1)
        setProperties(newProperties)
        const newPrices = deletePricesForProperty(response.data)
        setPrices(newPrices)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const priceDelete = (id) => {
    console.log("Clicked Delete Price")
    axios.delete(`http://localhost:8001/prices/${id}`)
      .then((response) => {
        console.log('Price Deleted', response.data);
        const index = prices.findIndex((p) => p.id === response.data.id);
        const newPrices = [...prices]
        newPrices.splice(index, 1)
        setPrices(newPrices)
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  let tableProperties
    (properties && prices) && (tableProperties = properties.map((property) => {

      const getPricesForProperty = (propertyId, prices) => {
        let propertyPriceArray = []
          for (let price of prices) {
            if (price.property_id === propertyId) {
              const newPrice = {
                ...price,
                priceDel: <Button label="x" className="p-button-danger" onClick={() => priceDelete(newPrice.id)} />
              }
              propertyPriceArray.push(newPrice)
            }
          }
        return propertyPriceArray
      }
      
      

    return {
      id: property.id,
      address: property.street_address,
      city: property.city,
      province: property.province,
      propertyPrices: getPricesForProperty(property.id, prices),
      deleteProp: <Button label="x" className="p-button-danger" onClick={() => handleDelete(property.id)} /> 
    }  
  }))

    const onRowExpand = (event) => {
        toast.current.show({severity: 'info', summary: 'Property Expanded', detail: event.data.name, life: 2000});
    }

    const onRowCollapse = (event) => {
        toast.current.show({severity: 'success', summary: 'Property Collapsed', detail: event.data.name, life: 2000});
    }

    const expandAll = () => {
        let _expandedRows = {};
        tableProperties.forEach(tableProperty => _expandedRows[`${tableProperty.id}`] = true);
        setExpandedRows(_expandedRows);
    }

    const collapseAll = () => {
        setExpandedRows(null);
    }

    // const imageBodyTemplate = (rowData) => {
    //     return <img src={`https://primefaces.org/cdn/primereact/images/product/${rowData.image}`} alt={rowData.image} width="100px" className="shadow-4" />;
    // }

    const allowExpansion = (rowData) => {
        return true
    };

  const rowExpansionTemplate = (data) => {
       
      return (
        <div className="p-3">
          <h5>Price history for property {data.id}: {data.address}</h5>
          <DataTable value={data.propertyPrices}
            responsiveLayout="scroll"
            paginator
            rows={4}
          >
            <Column field="id" header="Id" sortable></Column>
            <Column field="date" header="Date" sortable></Column>
            <Column field="price" header="Price" sortable></Column>
            <Column field="priceDel"  header="Delete" />
          </DataTable>
        </div>

        
      );
    }

    const header = (
      <div className="table-header-container">
        {/* <h3>Products and Prices</h3> */}
        <Button icon="pi pi-plus" label="Expand All" onClick={expandAll} className="mr-2" />
        <Button icon="pi pi-minus" label="Collapse All" onClick={collapseAll} />
        <InputText
        placeholder="Search"
        onInput={(e) =>
          setFilters({
            global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS }
        })}
      />
        </div>
    );

    return (
        <div className="card">
        <Toast ref={toast} />
        <DataTable  value={tableProperties}
          expandedRows={expandedRows}
          onRowToggle={(e) => setExpandedRows(e.data)}
          onRowExpand={onRowExpand}
          onRowCollapse={onRowCollapse}
          responsiveLayout="scroll"
          rowExpansionTemplate={rowExpansionTemplate}
          dataKey="id"
          header={header}
          // scrollable scrollHeight="600px"
          paginator
          rows={6}
          filters={filters}
          responsive='true'
        >
            <Column expander={allowExpansion} style={{ width: '3em' }} />
            <Column field="id" header="Id" sortable />
            <Column field="address" header="Address" sortable />
            <Column field="city" header="City" sortable />
          <Column field="province" header="Province" sortable />
          <Column field="deleteProp" header="Delete" />
        </DataTable>
    </div>
    );
}