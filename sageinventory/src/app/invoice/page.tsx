"use client"
import './invoice.css'

import { useState } from "react"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Calendar } from 'primereact/calendar';
import { Chips } from 'primereact/chips';
import { Button } from 'primereact/button';


export default function InvoiceNew() {
    const [date, setDate] = useState()
    const [productIDs, setProductIDs] = useState([])
    const [products, setProducts] = useState([])

    type product = {
        id: number
    }


    function productSubmit(e:any) {
        let newProducts: product[] = [];
        for (let i = 0; i < e.value.length; i++) {
            const element = e.value[i];
            // fetch("localhost:8000/product_get")
            newProducts.push({'id': element})
        }
        setProductIDs(e.value)
        setProducts(newProducts)
    }


    return (
        <>
            <h1>Invoice New</h1>


            <div id="inputBox" className="flex w-9 align-right b-1 m-1">
                <div className="card w-2 flex flex-wrap gap-3 p-fluid">
                    <div className="flex-auto">
                        <label htmlFor="date" className="font-bold block mb-2">
                            Date
                        </label>
                        <Calendar id='date' name='date'></Calendar>
                    </div>
                </div>

            </div>

            <div className="card w-7 flex flex-wrap gap-3 p-fluid">
                    <div className="flex-auto">
                        <label htmlFor="products" className="font-bold block mb-2">
                            Product IDs
                        </label>
                        <Chips name='products' value={productIDs} onChange={productSubmit} separator="," />
                    </div>
            </div>
            

            <DataTable value={products} tableStyle={{ minWidth: '10vw', maxWidth: '60vw', marginTop:'2vh', marginBottom:'2vh' }}>
                <Column field="id" header="ID"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>

            <Button label='Submit'></Button>
        </>
    )
}