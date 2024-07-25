// (client component) will contain our <DataTable /> component.

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { 
  useReactTable, 
  getCoreRowModel, 
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel
} from "@tanstack/react-table"
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";


function DataTable({ columns, data }) {
  // useReactTable hook is used to create a table instance.
  //  This instance is used to get header groups, rows, and cells for rendering.
  const [sorting, setSorting] = useState([])
  const [columnFilters, setColumnFilters] = useState([])
  const [columnVisibility, setColumnVisibility] = useState({})
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    // pagination
    getPaginationRowModel: getPaginationRowModel(),
    // sorting
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    // filter
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    // visibility
    onColumnVisibilityChange: setColumnVisibility,
    // selection
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })
 
  return (
    <div>
      <div className="flex items-center gap-10 py-4">
        {/* Filter */}
        <Input
          placeholder="Filter emails..."
          className="max-w-sm"
          value={table.getColumn('email')?.getFilterValue() ?? ""}
          onChange={(e) => table.getColumn('email')?.setFilterValue(e.target.value)}
        />
        {/* Column visibility */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="">
            {table.getAllColumns().filter(
                (column) => column.getCanHide()
              ).map((column) => {
                console.log(column)
                return(
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>  
              )})
              
            }
          </DropdownMenuContent>
        </DropdownMenu>
        {/* Selected Count */}
        <div className="text-gray-600 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{""}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
      </div>
      <div className="max-w-6xl border-2 p-10">
        <Table>
          <TableHeader>
            {/* getHeaderGroups() returns an array of objects that represent the header groups 
                (ex: [{header1 details},{header2 details},{header3 details}]) */}
            {table.getHeaderGroups().map((headerGroup, idx) => {
              console.log("headerGroup", headerGroup, idx);
              return (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    console.log(header)
                    return(
                      <TableHead key={header.id} className="font-bold">
                        {header.isPlaceholder 
                          ? null 
                          : flexRender(header.column.columnDef.header, header.getContext())
                        }
                      </TableHead>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableHeader>
          <TableBody>
            {/* getRowModel() returns an object that contains the rows that will be rendered. */
              table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => {
                  console.log(row)
                  return(
                    <TableRow 
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                        {row.getVisibleCells().map((cell) => {
                          console.log(cell)
                          return(
                            <TableCell key={cell.id}>
                              { flexRender(cell.column.columnDef.cell, cell.getContext()) }
                            </TableCell>
                          )
                        })}
                    </TableRow>
                  )
                })
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className='h-24 text-center'>
                    No Results
                  </TableCell>
                </TableRow>
              )
            }
          </TableBody>
        </Table>
      </div>
      {/* Pagination Logic */}
      <div className="flex justify-end gap-5 mx-7 my-2"> 
        <Button 
          variant="outline" 
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeft/>
          Previous
        </Button>
        <Button 
          variant="outline"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
          <ChevronRight/>
        </Button>
      </div>
    </div>
  )
}


export default DataTable