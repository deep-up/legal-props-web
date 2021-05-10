import React from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';

export default function ParamProposals() {
    const products = [{
        id:"123",
        name:"wilmer",
        price:123.12
    } ];


    const columns = [{
        dataField: 'id',
        text: 'Product ID'
    }, {
        dataField: 'name',
        text: 'Product Name'
    }, {
        dataField: 'price',
        text: 'Product Price'
    }];
    
    return (
        <React.Fragment>
            <BootstrapTable keyField='id' data={products} columns={columns} />
        </React.Fragment>
    )
}


