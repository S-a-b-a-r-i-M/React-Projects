import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  username: z.string().min(3, {message: "username must be greater than 3 characters"}),
  email: z.string().email({message: "enter valid email format"}),
})

function HookFormWidZod() {
  const {register, handleSubmit, formState: {errors}} = useForm()

  return (
    <div className='w-full h-screen flex justify-center items-center border rounded-md py-3 px-1'>
      <form onSubmit={handleSubmit(data => console.log(data))}>
        <div>
          <label htmlFor="username">UserName</label>
          <input 
            id="username"
            type="text"
            placeholder="Enter Name"
            className='w-full border rounded mb-3 p-2'
            {...register("username")}
          />
          {errors.username && <span type="alert">{errors.username.message}</span>}
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter email"
            className='w-full border rounded mb-3 p-2'
            {...register("email")}
          />
        </div>
      </form>    

    </div>
  )
}

export default HookFormWidZod