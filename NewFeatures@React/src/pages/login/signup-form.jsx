import { useForm } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../../components/ui/form";
import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";
import { Sparkles } from "lucide-react";
import propTypes from "prop-types";
import PasswordFormField from "./component/password-form-field";
import InputFormField from "./component/input-form-field";
import { AUTH_PAGES } from "./constant";

// Define the form validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export default function SignUpForm({ setCurrentPage}) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
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
    <div className="w-full max-w-md lg:max-w-lg space-y-4">
      {/* Header Content */}
      <div className="flex flex-col items-start text-2xl lg:text-3xl  font-medium">
        <p className="flex items-center gap-1">
            Join us
            <Sparkles className="w-6 h-6 inline text-primary text-violet-700 fill-violet-400" />
          </p>
        <p>Create Traing10x account</p>
      </div>

      {/* Signup Form */}
      <div className="w-full px-1">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <InputFormField 
              control={form.control}
              uniqueName="name"
              labelName="Name"
              placeholder="Leonardo DiCaprio"
            />
            {/* Email */}
            <InputFormField 
              control={form.control}
              uniqueName="email"
              labelName="Email"
              placeholder="mail@domain.com"
              inputType="email"
            />
            {/* Password */}
            <PasswordFormField
              control={form.control}
              uniqueName={"password"}
              labelName={"Password"}
              placeholder={"Min.8 characters"}
            />
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="terms-condition"
                className="w-4 h-4 lg:w-5 lg:h-5 data-[state=checked]:bg-violet-400" 
              />
              <label
                htmlFor="terms-condition"
                className="text-sm lg:text-[16px] font-medium"
              >
                I agree to the <a href="#" className="text-sm text-violet-600">Terms & Conditions</a>
              </label>
            </div>
            {/* Sign Up Button */}
            <Button className="w-full text-lg bg-violet-700 hover:bg-violet-600 text-white">
              Sign Up
            </Button>
          </form>
        </Form>
      </div>
      
      {/* Sign Up Link */}
      <p className="flex justify-start text-sm lg:text-[16px] text-gray-500 mt-4">
        Already have an account?{' '}
        <span 
          className="text-violet-600 hover:text-indigo-500 hover:cursor-pointer px-1"
          onClick={() => setCurrentPage(AUTH_PAGES.login)}
        >
          Log In
        </span>
      </p>
    </div>
  )
}

SignUpForm.propTypes = {
  setCurrentPage: propTypes.func
}