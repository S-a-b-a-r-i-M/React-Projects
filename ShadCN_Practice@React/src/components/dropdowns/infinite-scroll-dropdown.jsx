import { useEffect, useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { fetchFruites } from "@/services/api/mock.api"
import { Button } from "../ui/button"


function InfiniteScrollableDropDown() {
  const ITEMS_PER_PAGE = 15

  const [options, setOptions] = useState([])
  const [selectedValue, setSelecteedValue] = useState("")

  const [pageIndex, setPageIndex] = useState(0)
  const [hasMore, setHashMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  
  // Fetch initial data
  useEffect(()=>{
    loadMoreItems()
  }, [])

  useEffect(()=>{
    console.log("options", options)
  }, [options])

  const loadMoreItems = async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true)
    try{
      const newItems = await fetchFruites(pageIndex * ITEMS_PER_PAGE, ITEMS_PER_PAGE)
      // If we received fewer items than requested, we've *reached the end*
      if (newItems.length < ITEMS_PER_PAGE) setHashMore(false)

      if (pageIndex == 0)
        setOptions(newItems)
      else
        setOptions((prev) => [...prev, ...newItems])

      // Increment pageIndex
      setPageIndex((prev) => prev + 1)
    } 
    catch (error) {
      console.log("Error while fetching the fruits", error)
    } 
    finally {
      setIsLoading(false)
    }
  }

  return (
    <Select defaultValue={selectedValue} onValueChange={(val) => setSelecteedValue(val)}>

      <SelectTrigger className="max-w-sm">
        <SelectValue placeholder="select a value"/>
      </SelectTrigger>

      <SelectContent className="max-h-56">
        {options.map(({label, value}, idx) => (
          <SelectItem key={`${value}-${idx}`} value={value}>{label}</SelectItem>
        ))}
        {hasMore && (
          <Button variant="outline" className="w-full text-center" onClick={loadMoreItems}>
            {isLoading ? "Loading..." : "Click to load more"}
          </Button>
        )}
      </SelectContent>

    </Select>
  )
}

export default InfiniteScrollableDropDown