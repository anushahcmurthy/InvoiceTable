import React from 'react'
import data from "./data";
import {Link} from 'react-router-dom'

function InvoiceTable() {
    return(
        <div className='flex flex-col flex-1 bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 overflow-x-auto '>
          <strong className='text-gray-700 font-bold'>Invoice Table</strong>
          <div className='nt-3'>
            <table className='w-full h-full border-x border-gray-400 rounded-sm'>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Date</td>
                        <td>Vendor Name</td>
                        <td>Total</td>
                    </tr>
                </thead>
                <tbody>
                {data.map((num) => (
                <tr key={num.id}>
                        <td>
                            <Link to={'/num/${num.id}'}>{num.id}</Link>
                            </td>
                            <td>{num.date}</td>
                            <td>{num.vendorname}</td>
                            <td>{num.total}</td>

                </tr>
                ))}
                </tbody>
            </table>
          
          </div>
          
         
        </div>
    )
}

export default InvoiceTable