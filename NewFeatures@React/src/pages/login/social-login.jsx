
// $ npm install @react-oauth/google@latest
// npm i jwt-decode

import { GoogleLogin, } from "@react-oauth/google"
import { jwtDecode } from "jwt-decode"
import { Card, CardContent } from "../../components/ui/card"
import linkedin from "/linkedin.png"
import propTypes from "prop-types"

function SocialLogin() {

    return (
        //  Login With GOOGLE And LINKEDIN
        <div className="w-full max-w-md space-y-1">
          <div className="flex items-center justify-center gap-2 text-md">
            <span className="w-full border-t border-gray-200" />
            <span className="bg-white text-gray-500 px-4">or</span>
            <span className="w-full border-t border-gray-200" />
          </div>
          {/* Google & Linkedin */}
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-1/2 pr-1" id="google-login">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log("Login user creds via google", jwtDecode(credentialResponse.credential))
                }}
                onError={() => {
                  console.log("Login Failed")
                }}
                text="continue_with"
                shape="pill"
              />
            </div>
            <div className="w-1/2" id="linkedin-login">
              <Card 
                id="linkedin-login"
                className="flex justify-center items-center border border-gray-300 cursor-pointer rounded-full py-[6px]" 
              >
                <CardContent className="w-full flex justify-between gap-2 py-0 px-4">
                  <img src={linkedin} alt="linkedin-icon" className="w-[22px] h-[22px] rounded-sm"/>
                  <p className="text-[15px] text-gray-800">Continue with Linkedin</p>
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