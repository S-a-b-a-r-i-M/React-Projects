import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";


const SignUpForm = () => {
  return (
    <div className="w-full max-w-md">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
          <p className="text-gray-500">See your growth and get consulting support!</p>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Google Sign Up Button */}
          <Button variant="outline" className="w-full justify-center space-x-2">
            <img src="/api/placeholder/20/20" alt="Google" className="w-5 h-5" />
            <span>Sign up with Google</span>
          </Button>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">or Sign up with Email</span>
            </div>
          </div>

          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name">Name*</Label>
            <Input id="name" placeholder="Name" />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email">Email*</Label>
            <Input id="email" type="email" placeholder="mail@website.com" />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <Label htmlFor="password">Password*</Label>
            <Input id="password" type="password" placeholder="Min. 8 character" />
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label htmlFor="terms" className="text-sm">
              I agree to the{' '}
              <a href="#" className="text-indigo-600 hover:text-indigo-500">
                Terms & Conditions
              </a>
            </label>
          </div>

          {/* Sign Up Button */}
          <Button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white">
            Sign Up
          </Button>

          {/* Sign In Link */}
          <p className="text-center text-sm text-gray-500">
            Already have an Account?{' '}
            <a href="#" className="text-indigo-600 hover:text-indigo-500">
              Sign in
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpForm;