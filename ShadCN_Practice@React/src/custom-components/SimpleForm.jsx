import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react'
import * as z from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'

// zod validation schema
const formSchema = z.object({
  user_name: z.string().min(3, "should be greater than 3 chars"),
  email: z.string().email("invalid email address"),
  password: z.string().min(6, "should be greater than 6 chars")
})

function SimpleForm() {
  const form = useForm({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
        {/* UserName */}
        <FormField 
          control={form.control}
          name="user_name"
          render = {({ field }) => {
            console.log(field)

            return(
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl > 
                <Input placeholder="enter name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            )
          }}
        />
        
        {/* Email */}
        <FormField 
          control={form.control}
          name="email"
          render= {({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField 
          control={form.control}
          name="password"
          render= {({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem> 
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default SimpleForm