import { useForm } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../../components/ui/form";
import { Button } from "../../components/ui/button";
import propTypes from "prop-types";
import { AUTH_PAGES} from "./constant";
import InputFormField from "./component/input-form-field";

// Define the form validation schema
const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

function ForgetPassword({ setCurrentPage }) {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: "",
        }
      })

    const onSubmit = (values) => {
        console.log("Form submitted:", values);
        // Here you would typically make an API call
      };

  return (
    <div className="w-full max-w-md lg:max-w-lg space-y-4">
        {/* Header Content */}
        <div className="space-y-5">
            <p className="text-2xl lg:text-3xl font-medium">Forgot Password ?</p>
            <p className="text-[16px]">No Problem! Enter your email or username below and we will send you an email with instructions to reset your password.</p>
        </div>

        {/* Login Form */}
        <div className="w-full px-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <InputFormField 
                control={form.control}
                uniqueName="email"
                labelName="Email"
                placeholder="mail@domain.com"
                inputType="email"
              />
              {/* Reset Link Button */}
              <Button className="w-full text-lg bg-violet-700 hover:bg-violet-600 text-white">
                Send Reset Link
              </Button>
            </form>
          </Form>
        </div>
        
        {/* Login Link */}
        <p className="flex justify-center text-sm lg:text-[16px] text-gray-500 py-1">
          Back to{' '}
          <span 
            className="text-violet-600 hover:text-indigo-500 hover:cursor-pointer px-1"
            onClick={() => setCurrentPage(AUTH_PAGES.login)}
          >
            Login
          </span>
        </p>
      </div>
  )
}

ForgetPassword.propTypes = {
  setCurrentPage: propTypes.func
}

export default ForgetPassword