import { useForm } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../../components/ui/form";
import { Button } from "../../components/ui/button";
import propTypes from "prop-types";
import PasswordFormField from "./component/password-form-field";

// Define the form validation schema
const formSchema = z.object({
  password1: z.string().min(8, "Password must be at least 8 characters"),
  password2: z.string().min(8, "Password must be at least 8 characters"),
}).refine((data) => data.password1 === data.password2, {
	message: "Passwords do not match",
	path: ["password2"],
})

export default function ResetPassword() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
			password1: "",
			password2: "",
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
				<p className="text-2xl lg:text-3xl font-medium">Enter New Password</p>

        {/* Form */}
        <div className="w-full px-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
							<PasswordFormField 
								control={form.control}
								uniqueName={"password1"}
								labelName={"New Password"}
								placeholder={"Min.8 characters"}
							/>
							<PasswordFormField 
								control={form.control}
								uniqueName={"password2"}
								labelName={"Confirm Password"}
								placeholder={"Password again"}
							/>
              {/* Change Password Button */}
              <Button className="w-full text-lg bg-violet-700 hover:bg-violet-600 text-white">
                Change Password
              </Button>
            </form>
          </Form>
        </div>
      </div>
  )
}

ResetPassword.propTypes = {
  setCurrentPage: propTypes.func
}