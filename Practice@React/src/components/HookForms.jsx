import React,{ useState } from 'react'
import { useForm } from "react-hook-form";

function HookForm() {
  const {register, handleSubmit, formState} = useForm()
  console.log(formState)
  
  const {errors} = formState
  function onSubmit(data){
    console.log(data);
  }
  return (
    <div className='min-h-screen w-full flex justify-center items-center'>
      <div className='w-full max-w-md space-y-4'>
        <form onSubmit={handleSubmit(onSubmit)} className='border-2 p-3'>
          <div>
            <label htmlFor="username">UserName</label>
            <input 
              id="username"
              type="text"
              placeholder="Enter Name"
              className='w-full border rounded mb-3 p-2'
              {...register("username",
                          {required: "username is required", 
                           minLength: {value: 3, message: "username must be greater than 3 characters"}
                          }
              )}
            />
            {errors.username && <p>{errors.username.message}</p>}
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter email"
              className='w-full border rounded mb-3 p-2'
              {...register("email",{
                  required: "email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "enter valid email format"
                  }
              })}
            />
          </div>
          <div>
            <select {...register("gender", {required: true})} className='w-full border rounded mb-3 p-2'>
              <option value="">Select--</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <textarea 
              name="about" 
              id="about" 
              {...register("about")} 
              placeholder='About me' 
              className='w-full border rounded mb-3 p-2'
            />
          </div>
          <div>
            <input type="submit" className='w-full bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 p-2'/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default HookForm