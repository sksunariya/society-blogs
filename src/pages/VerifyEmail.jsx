import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { RxCountdownTimer } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp, signUp } from "../services/apiLinks/authAPI";
import { useNavigate } from "react-router-dom";

function VerifyEmail() {
  const [otp, setOtp] = useState("");
  const { signupData, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Only allow access of this route when user has filled the signup form
    if (!signupData) {
      navigate("/signup");
    }
  }, []);

  const handleVerifyAndSignup = (e) => {
    e.preventDefault();
    const {accountType, firstName, lastName, email, password, confirmPassword} = signupData;

    dispatch( signUp(accountType, firstName, lastName, email, password, confirmPassword, otp, navigate) );
  };

  return (
    <div className="min-h-[calc(100vh-3.5rem)] grid place-items-center">
      {loading ? (
        <div>
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="max-w-[500px] p-4 lg:p-8">
          <p className="text-[1.125rem] max-w-[250px] leading-[1.625rem] my-4 text-[#AFB2BF]">
            Enter the OTP recieved on registered email.
          </p>
          <form onSubmit={handleVerifyAndSignup}>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => (
                <input
                  {...props}
                  placeholder="-"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-[36px] sm:w-[36px] md:w-[48px]  lg:w-[60px] border-0 bg-[#161D29] rounded-[0.5rem] text-white aspect-square text-center focus:border-0 focus:outline-2 focus:outline-[#FFE83D]"
                />
              )}
              containerStyle={{
                justifyContent: "space-between",
                gap: "0 6px",
              }}
            />


            <div className="mt-6 flex justify-end">

              <div className="flex cursor-pointer items-center text-[#47A5C5] gap-x-2"
                onClick={() => dispatch(sendOtp(signupData.email))}
              >
                <RxCountdownTimer />
                Resend OTP
              </div>
            </div>


            <button type='submit' className='w-full mt-4 p-1.5 mb-5 text-black bg-[#049069] rounded-[0.55rem] '>
                Submit
            </button>
          </form>

        </div>
      )}
    </div>
  );
}

export default VerifyEmail;