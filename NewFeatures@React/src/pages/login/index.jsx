import { useState } from "react";
import SignUpForm from "./signup-form";
import LogInForm from "./login-form";
import SocialLogin from "./social-login";


export default function Index() {
  const [currentPage, setCurrentPage] = useState("signin")
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
          {currentPage === "signin" 
            ? <LogInForm setCurrentPage={setCurrentPage}/> 
            : <SignUpForm setCurrentPage={setCurrentPage}/>
          }
          <SocialLogin />
        </div>
      </div>
    </div>
  )
}
