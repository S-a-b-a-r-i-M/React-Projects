import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"


export default function ArrayOfObjInState(){
    const [Bikes, setBikes] = useState([])
    const [BikeYear, setBikeYear] = useState(new Date().getFullYear())
    const [BikeModel, setBikeModel] = useState("")
    const [BikeMake, setBikeMake] = useState("")

    function handleAddBikeClick(){
        const newBike = {
                        year: BikeYear,
                        model: BikeModel,
                        make: BikeMake
                    }

        setBikes(prevB => [...prevB, newBike])
        console.log("new Bike added", newBike);

        // reset to initial
        setBikeYear(new Date().getFullYear())
        setBikeModel("")
        setBikeMake("")
    }

    function handleRemoveBikeClick(idx){
        setBikes(prevB => prevB.filter((_,index) => index !== idx))
    }

    function handleYearChange(e){
        setBikeYear(e.target.value)
    }

    function handleModelChange(e){
        setBikeModel(e.target.value)
    }

    function handleMakeChange(e){
        setBikeMake(e.target.value)
    }

    return (
        <>
        <ol>
            {Bikes.map((ele, idx)=>
                <li key={idx}>
                    {ele.year} {ele.model} {ele.make} <nbsp/>
                    <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() => handleRemoveBikeClick(idx)}
                        style={{cursor: "pointer", color: "red"}} 
                    />
                </li>
            )}
        </ol>
        <input type="number" value={BikeYear} onChange={handleYearChange}/><br/>
        <input type="text" value={BikeModel} onChange={handleModelChange}
               placeholder="Enter Model" /><br/>
        <input type="text" value={BikeMake} onChange={handleMakeChange}
               placeholder="Enter Maker"/><br/>
        <button onClick={handleAddBikeClick}>Add Bike</button>
        </>
    )
}