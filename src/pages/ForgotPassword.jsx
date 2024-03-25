import { useState } from "react"
import { BiSolidShow , BiSolidHide } from 'react-icons/bi';
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import OtpInput from "react-otp-input";
import toast from "react-hot-toast";

import { resetPassword, sendOtp } from "../services/apiLinks/authAPI"


function ForgotPassword () {

    const [showPassword, setShowPassword] = useState (false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const [otp, setOtp] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [emailSent, setEmailSent] = useState(false)
    const dispatch = useDispatch()


    function passHandler() {
    setShowPassword (showPassword ? false : true);
    }

    function confirmPassHandler(){
    setShowConfirmPassword (showConfirmPassword ? false : true);
    }


    const submitHandler = (e) => {
        e.preventDefault();

        if (!emailSent) {
            dispatch(sendOtp(email, navigate, true, setEmailSent))          
        }
        else {
            if (password !== confirmPassword){
                toast.error("Password doesn't match.");
            }
            else{
                dispatch(resetPassword(email, otp, password, navigate));
            }
        }
    }

  return (

    <div className="min-h-[80vh] mt-10 flex justify-center items-center">
    
        <div className='flex flex-col  w-11/12 max-w-[450px] '>
            <h1 className="text-white text-3xl">Reset Your Password here.</h1>

            <form onSubmit={submitHandler}
            className='flex flex-col w-full mt-6 gap-y-6'>

            <label className='w-full'>
                <h2 className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
                Email address <sup className=' text-red-800'>*</sup>
                </h2>
                <input
                className='bg-gray-700 text-black w-full bg-opacity-60 p-[6px] border-b-[0.05rem] border-opacity-25 rounded-lg'
                type='email'
                name='email'
                placeholder='Enter email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                spellCheck={false}
                />
            </label>

            {emailSent && 
                <div>

                    <h1 className="text-white mb-4">Kindly check mail for OTP.</h1>
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


                    <div className='my-5 flex flex-col md:flex-row  gap-5'>
                        <label className='w-full relative'>
                            <h2 className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Create Password <sup className='text-red-800 scale-150'>*</sup></h2>
                            <input 
                            className='bg-gray-700 focus:outline-none text-white w-full bg-opacity-60 p-[6px] border-b-[0.05rem] border-opacity-25 rounded-lg'
                            type= {showPassword ? ("text") : ("password")}
                            name='password'
                            placeholder='Enter Password'
                            value={password}
                            onChange={(e) => (setPassword(e.target.value))}
                            />
                            <div className='absolute text-white right-2 bottom-2.5 scale-125'>
                            {showPassword ? <BiSolidShow onClick={passHandler}/> : <BiSolidHide onClick={passHandler}/>}
                            </div>
                        </label>

                        
                        <label className='w-full relative'>
                            <h2 className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Confirm Password <sup className='text-red-800 scale-150'>*</sup></h2>
                            <input
                            className='bg-gray-700 focus:outline-none text-white w-full bg-opacity-60 p-[6px] border-b-[0.05rem] border-opacity-25 rounded-lg'
                            type= {showConfirmPassword ? ("text") : ("password")} 
                            name='confirmPass'
                            placeholder='Confirm password'
                            value={confirmPassword}
                            onChange={(e) => (setConfirmPassword(e.target.value))}
                            />
                            <div className='absolute text-white right-2 bottom-2.5 scale-125'>
                            {showConfirmPassword ? <BiSolidShow onClick={confirmPassHandler} /> : <BiSolidHide onClick={confirmPassHandler} />}
                            </div>
                        </label>
                    </div>


                </div>
            }

            <button type='submit' className='w-full p-1.5 mb-5 text-black bg-[#049069] rounded-[0.55rem] '>
                Submit
            </button>

            </form>

        </div>

    </div>

  )
}

export default ForgotPassword;