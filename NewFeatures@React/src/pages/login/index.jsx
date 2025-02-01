import { useState } from "react";
import SignUpForm from "./signup-form";
import LogInForm from "./login-form";
import SocialLogin from "./social-login";
import ForgetPassword from "./forget-password";
import ResetPassword from "./reset-password";
import { AUTH_PAGES } from "./constant";


export default function Index() {
  const [currentPage, setCurrentPage] = useState("login")

  const getCurrentPage = () => {
    switch(currentPage){
      case AUTH_PAGES.login:
        return <LogInForm setCurrentPage={setCurrentPage}/>
      case AUTH_PAGES.signup:
        return <SignUpForm setCurrentPage={setCurrentPage}/>
      case AUTH_PAGES.forgetPassword:
        return <ForgetPassword setCurrentPage={setCurrentPage}/>
    }
  }
  console.log(currentPage)
  return (
    <div className="min-h-svh grid grid-cols-5">
      <div className="col-span-3">
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
          alt="image" 
          className="w-full h-full"
        />
      </div>
      <div className="col-span-2">
        <div className="w-full h-full flex flex-col items-center justify-center gap-4 py-6 md:py-10">
          {getCurrentPage()}
          {currentPage !== AUTH_PAGES.forgetPassword && <SocialLogin />}
          {/* <ResetPassword /> */}
        </div>
      </div>
    </div>
  )
}
