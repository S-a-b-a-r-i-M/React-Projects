import { useCallback, useEffect } from "react"

// https://dev.to/nicolalc/event-driven-architecture-for-clean-react-component-communication-fph
export const useEvent = (eventName, callBack) => {
    useEffect(()=>{
        if(!callBack) return

        const listener = (event) => {
            callBack(event.detail)
        }

        // add event to window 
        window.addEventListener(eventName, listener)

        return () => {
            window.removeEventListener(eventName, listener)
        }
    }, [eventName, callBack])

    const dispatch = useCallback((detail) => {
        const event = new CustomEvent(eventName, { detail })
        // dispatch the event 
        window.dispatchEvent(event)
    }, [eventName])

    return { dispatch }
}