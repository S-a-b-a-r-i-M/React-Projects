import { useState } from "react"
import { useEvent } from "../../custom-hooks/event-hook"

export default function SideBar(){
    const [count, setCount] = useState(0)

    useEvent("OnCount", setCount)

    return (
        <div className="">
            <h3>SideBar</h3>
            <span>Count is: {count}</span>
        </div>
    )
}