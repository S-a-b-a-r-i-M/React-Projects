import React, { useState, useRef } from "react";
import { useEffect } from "react";


export default function UseRef() {
    const [count, setCount] = useState(0) // using useState

    let count2 = useRef(0) // using useRef

    useEffect(() => {
        console.log("component renders");
    }
    )

    console.log(count, count2);

    return (
        <div style={{fontSize: "25px"}}>
            <button onClick={() => setCount(prevC => prevC + 1)} style={{display:"block"}}>
                update state
            </button>
            <button onClick={() => count2.current++}>
                update ref
            </button>
        </div>
    )


}