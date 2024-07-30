// (client component) will contain our column definitions.

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

export const data = [
  {
    id: "728ed52f",    amount: 100,    status: "pending",    email: "a@exampleeeeeeeeee.com",
  },
  {
    id: "489e1d42",    amount: 125,    status: "processing",    email: "zxample@gmail.com",
  },
  {
    id: "728ed5if",    amount: 200,    status: "pending",    email: "vDp3S@example.com",
  },
  {
    id: "228ed5if",    amount: 250,    status: "received",    email: "vDp3S@example.com",
  },
  {
    id: "728ed51f",    amount: 100,    status: "pending",    email: "m@example.com",
  },
  {
    id: "489e1d2q",    amount: 125,    status: "processing",    email: "example@gmail.com",
  },
  {
    id: "728ed53a",    amount: 200,    status: "pending",    email: "vDp3S@example.com",
  },
  {
    id: "228ed54b",    amount: 250,    status: "received",    email: "vDp3S@example.com",
  },
  {
    id: "728ed55c",    amount: 100,    status: "pending",    email: "m@example.com",
  },
  {
    id: "489e1d6d",    amount: 125,    status: "processing",    email: "example@gmail.com",
  },
  {
    id: "728ed57e",    amount: 200,    status: "pending",    email: "vDp3S@example.com",
  },
  {
    id: "228ed58h",    amount: 250,    status: "received",    email: "vDp3S@example.com",
  }
]

// Write only the cells definitions in the <DataTable/> component only if you unable to handle it here.
export const columns =[
  {
    id: "select",
    header: ({table}) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() 
                 || (table.getIsSomePageRowsSelected() && "indeterminate")
                }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        className="rounded-sm"
        aria-label="Select all"
      />
    ),
    cell: ({row}) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    )
  },
  {
    accessorKey: "status",
    header: "Status",// column name
    cell: ({row}) => (<div className="min-w-20 max-w-28">{row.getValue("status")}</div>)
  },
  {
    accessorKey: "email",
    header: ({column}) => (
      <div>
      <Button 
        variant="ghost"
        onClick={()=> column.toggleSorting(column.getIsSorted() === "asc")}
      >
        {console.log(column.getIsSorted())}
        Email
        <ArrowUpDown className="h-4 w-4 ml-1"/>
      </Button>
      </div>
    ),
    cell: ({row}) => <div className="min-w-44 max-w-48 break-words">{row.getValue("email")}</div>
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({row}) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <div className="text-left font-medium">{formatted}</div>
    }
  },
  {
    id: "actions",
    cell: ({row}) => {
      console.log(row)
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 focus:outline-none">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4"/>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="start" side="bottom">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>
                Copy payment id
              </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={()=>console.log(payment.amount," $")}>
              View customer
            </DropdownMenuItem>
            <DropdownMenuItem onClick={()=>console.log(payment.id," detail")}>
              view payment detail
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  },
]