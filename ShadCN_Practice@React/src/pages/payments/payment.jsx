//  (server component) is where we'll fetch data and render our table.

import React from 'react'
import DataTable from './dataTable'
import { columns, data } from './columns'

function Payment() {

  return (
    <div className='flex justify-center items-center '>
      <DataTable columns={columns} data={data}/>
    </div>
  )
}

export default Payment