import { useState } from "react"
import { useEvent } from "../../custom-hooks/event-hook"


export default function EventListener(){
    const [notification, setNotification] = useState(null)

    useEvent("Notification", setNotification)

    return (
        <div className="my-5">
            {
             notification 
             ? <div className="text-2xl">Notification found: {notification}</div>
             : <div className="text-xl text-gray-800">No notification found</div>
            }
        </div>
    )
}