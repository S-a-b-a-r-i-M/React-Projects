import { useState } from "react"
import { useEvent } from "../../custom-hooks/event-hook"


export default function Header(){
    const [count, setCount] = useState(0)
    
    useEvent("OnCount", setCount)

    return (
        <div className="">
            <h3>Header</h3>
            <span>Count is: {count}</span>
        </div>
    )
}