//  (server component) is where we'll fetch data and render our table.

import React from 'react'
import DataTable from './DataTable'
import { columns, data } from './columns'

function Payment() {

  return (
    <div className='w-full flex'>
      <DataTable columns={columns} data={data}/>
    </div>
  )
}

export default Payment