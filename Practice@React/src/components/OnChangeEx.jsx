import React, { useState } from 'react'

function OnChangeEx() {
    const [userInput, setUserInput] = useState() // if we don't specify the default value it'll take undefined
    console.log(userInput);
    const [comment, setComment] = useState("")

    function handleUserInputChange(e){
        setUserInput(e.target.value)
    }

    function handleCommentChange(e){
        setComment(e.target.value)
    }

    return (
    <div>
        <input type="text" value={userInput} onChange={handleUserInputChange} />
        <p>UserInput: {userInput}</p>
        <textarea name="comments" id="comments" placeholder="This is my place" onChange={handleCommentChange}/>
        <p>User Comment: {comment}</p>
    </div>
  )
}

export default OnChangeEx