import { useState } from "react"
import { Button } from '../../components/ui/button'
import { useEvent } from "../../custom-hooks/event-hook"

export default function Body(){
    const [count, setCount] = useState(0)

    const { dispatch: dispatchEvent } = useEvent("OnCount")

    const handleClick = () => {
        setCount((prev) =>{
            // Dispatch the event 
            dispatchEvent(prev+1)
            return prev + 1
        })
    }

    return (
        <div className="body">
            <h3>Body</h3>
            <span>Count is: {count}</span>
            <Button onClick={handleClick}>
                Click here & see the magic
            </Button>
        </div>
    )
}