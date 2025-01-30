import { useState } from "react"
import { useEvent } from "../../custom-hooks/event-hook"

export default function Footer(){
    const [count, setCount] = useState(0)

    useEvent("OnCount", setCount)

    return (
        <div className="footer">
            <h3>Footer</h3>
            <span>Count is: {count}</span>
        </div>
    )
}