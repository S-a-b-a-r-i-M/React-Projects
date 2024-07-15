import React, { useState, useEffect } from 'react'

function SetObjInState() {
  const [bike, setBike] = useState({year:"2023", model:"pulsar 180", make:"Bajaj"})

  function changeYear(e){
    setBike(pervB => ({...pervB, year: e.target.value}))
        }

  function changeModel(e){
    setBike(pervB => ({...pervB, model: e.target.value}))
  }

  function changeMake(e){
    setBike(pervB => ({...pervB, make: e.target.value}))
  }

  useEffect(
    () => {
        console.log(bike)
    },
    [bike]
  )

  return (
    <div>
        <p>My favorite bike is <b>{bike.model}</b> in <b>{bike.year}</b> made by <b>{bike.make}</b></p>
        <input type="number" onChange={changeYear}/><br /><br />
        <input type="text" onChange={changeModel}/><br /><br />
        <input type="text" onChange={changeMake}/><br /><br />
    </div>
  )
}

export default SetObjInState