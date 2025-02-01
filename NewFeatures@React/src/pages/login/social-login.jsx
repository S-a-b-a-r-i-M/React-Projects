
// $ npm install @react-oauth/google@latest
// npm i jwt-decode

import { GoogleLogin, } from "@react-oauth/google"
import { jwtDecode } from "jwt-decode"
import { Card, CardContent } from "../../components/ui/card"
import linkedinIcon from "/linkedin.png"
import googleIcon from "/google.png"
import propTypes from "prop-types"

function SocialLogin() {

    return (
        //  Login With GOOGLE And LINKEDIN
        <div className="w-full max-w-md lg:max-w-lg space-y-1">
          <div className="flex items-center justify-center gap-2 text-md">
            <span className="w-full border-t border-gray-200" />
            <span className="bg-white text-gray-500 px-4">or</span>
            <span className="w-full border-t border-gray-200" />
          </div>
          {/* Google & Linkedin */}
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-1/2 pr-1 relative" id="google-login">
             {/* Original GoogleLogin component with absolute positioning */}
              <div className="absolute inset-0 opacity-0">
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    console.log("Login user creds via google", jwtDecode(credentialResponse.credential))
                  }}
                  onError={() => {
                    console.log("Login Failed")
                  }}
                  text="continue_with"
                  shape="pill"
                  size="large"
                />
              </div>
              <Card 
                id="custom-google-login"
                className="flex justify-center items-center border border-gray-300 cursor-pointer rounded-full py-[6px] lg:py-[8px]" 
              >
                <CardContent className="w-full flex gap-2 py-0 px-4">
                  <img 
                    src={googleIcon} 
                    alt="google-icon" 
                    className="w-[22px] h-[22px] lg:w-6 lg:h-6 rounded-sm"
                  />
                  <p className="text-[15px] lg:text-[16px] text-gray-800">Continue with Google</p>
                </CardContent>
              </Card>
            </div>
            <div className="w-1/2 pl-1" id="linkedin-login">
              <Card 
                id="linkedin-login"
                className="flex justify-center items-center border border-gray-300 cursor-pointer rounded-full py-[6px] file:lg:py-[8px]" 
              >
                <CardContent className="w-full flex gap-2 py-0 px-4">
                  <img 
                    src={linkedinIcon} 
                    alt="linkedin-icon" 
                    className="w-[22px] h-[22px] lg:w-6 lg:h-6 rounded-sm"
                  />
                  <p className="text-[15px] lg:text-[16px] text-gray-800">Continue with Linkedin</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
    )
}

SocialLogin.propTypes = {
  setCurrentPage: propTypes.func
}

export default SocialLogin