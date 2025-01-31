import { useForm } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";
import propTypes from "prop-types";
import { Sparkles } from "lucide-react";

// Define the form validation schema
const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export default function LogInForm({ setCurrentPage }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  })

  // Handle form submission
  const onSubmit = (values) => {
    console.log("Form submitted:", values);
    // Here you would typically make an API call
  };

  return (
      <div className="w-full max-w-md space-y-4">
        {/* Header Content */}
        <div className="flex flex-col items-start text-xl lg:text-2xl font-medium">
          <p className="flex items-center gap-1">
            Welcome Back
            <Sparkles className="w-6 h-6 inline text-primary text-violet-700 fill-violet-400" />
          </p>
          <p>Login to your account</p>
        </div>

        {/* Login Form */}
        <div className="w-full px-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field, fieldState: { error } }) => (
                  <FormItem>
                    <FormLabel className="flex flex-start">
                      Email<span className={`${error ? 'text-red-600' : 'text-violet-600'}`}>*</span>
                    </FormLabel>
                    <FormControl>
                      <Input 
                        {...field}
                        className=""
                        placeholder="mail@domain.com"
                      />
                    </FormControl>
                    <FormMessage className="text-[12px] my-0"/>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field, fieldState: { error }}) => (
                  <FormItem>
                    <FormLabel className="flex flex-start">
                      Password<span className={`${error ? 'blink text-red-600' : 'text-violet-600'}`}>*</span>
                    </FormLabel>
                    <FormControl>
                      <Input 
                        {...field}
                        className=""
                        placeholder="Min.8 characters" 
                      />
                    </FormControl>
                    <FormMessage className="text-[12px] my-0"/>
                  </FormItem>
                )} 
              />
              <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember-me" className="data-[state=checked]:bg-violet-400" />
                  <label
                    htmlFor="remember-me"
                    className="text-sm font-medium"
                  >
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-violet-600">Forgot Password?</a>
              </div>
              {/* Sign Up Button */}
              <Button className="w-full bg-violet-700 hover:bg-violet-600 text-white">
                Login
              </Button>
            </form>
          </Form>
        </div>
        
        {/* Sign Up Link */}
        <p className="flex justify-start text-sm text-gray-500 mt-4">
          Not registered yet?{' '}
          <span 
            className="text-violet-600 hover:text-indigo-500 hover:cursor-pointer px-1"
            onClick={() => setCurrentPage("signup")}
          >
            Create account
          </span>
        </p>
      </div>
  )
}

LogInForm.propTypes = {
  setCurrentPage: propTypes.func
}