import React from 'react'
import { useState } from 'react'
import { apiConnector } from "../../services/apiConnector"
import { endpoints } from "../../services/apis"
import toast from 'react-hot-toast'

const ContactCreater = () => {

    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({name:"", description:"", email: "" , phone: ""})

    function changeHandler (event) {
        const {name, value} = event.target;
        setFormData((prev) => ({...prev, [name]: value}));
    }

    const submitContactForm = async (data) => {
        // console.log("Form Data - ", data)
        const toastId = toast.loading("Sending Query.");
        try {
            setLoading(true)
            const res = await apiConnector("POST", endpoints.CONTACT_US_API, data)
            // console.log("Email Res - ", res)
            setLoading(false)
            if (!res.data.success) {
                toast.error("Query not sent.");
            }
            else{
                toast.success("Query sent.")
                setFormData({name:"", description:"", email: "" , phone: ""})
            }
        } catch (error) {
            
            toast.error("Query not sent.")
            console.log("ERROR MESSAGE - ", error.message)
            setLoading(false)
        }
        toast.dismiss(toastId)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (!loading) {
            submitContactForm({name: formData.name, description: formData.description, email: formData.email, phone: formData.phone});

        }
        
    }


  return (


        <form onSubmit={submitHandler} className=' max-w-3xl w-11/12 flex flex-col gap-10'>

            
            <label className='w-full'>
                <h2 className='text-white mb-2 ml-1 text-lg'>Name <sup className=' text-red-800'>*</sup></h2>

                <input className='text-white w-full focus:outline-none label-shadow bg-[#585D69] py-3 px-6 border-b-2 border-opacity-30 shadow-lg p-[6px] border-white rounded-lg'
                    required
                    type='text'
                    name='name'
                    placeholder='Enter Your Full Name'
                    onChange={changeHandler}
                    value={formData.name}
                    spellCheck={false}
                />

            </label>  


            
            <label className='w-full'>
                <h2 className='text-white mb-2 ml-1 text-lg'>Email Address <sup className=' text-red-800'>*</sup></h2>

                <input className=' bg-[#585D69] py-3 px-6 text-white w-full  focus:outline-none label-shadow bg-opacity-60 p-[6px] border-b-[0.05rem] border-opacity-25 rounded-lg'
                    required
                    type='email'
                    name='email'
                    placeholder='Enter your Email'
                    onChange={changeHandler}
                    value={formData.email}
                    spellCheck={false}
                />

            </label>


            <label className='w-full'>
                <h2 className='text-white mb-1 ml-1 text-lg'>Phone Number <sup className=' text-red-800'>*</sup></h2>

                <input className=' bg-[#585D69] py-3 px-6 focus:outline-none label-shadow text-white w-full bg-opacity-60 p-[6px] border-b-[0.05rem] border-opacity-25 rounded-lg'
                    required
                    type='number'
                    name='phone'
                    placeholder='Enter Your Number'
                    onChange={changeHandler}
                    value={formData.phone}
                    spellCheck={false}
                />

            </label>


            <label className='w-full'>
                <h2 className='text-white mb-1 ml-1 text-lg'>Description <sup className=' text-red-800'>*</sup></h2>

                <textarea className=' bg-[#585D69] text-white py-3 px-6  focus:outline-none label-shadow w-full bg-opacity-60 p-[6px] border-b-[0.05rem] border-opacity-25 rounded-lg'
                    required
                    type='text'
                    name='description'
                    cols="30"
                    rows="7"
                    placeholder='Enter description'
                    onChange={changeHandler}
                    value={formData.description}
                    spellCheck={false}
                />

            </label>




            <button type='submit' className='w-full py-3 px-6 mb-5 text-black bg-[#049069] rounded-[0.55rem] '>
                {!loading ? <p>Send message</p> : <p>Sending...</p>}
            </button>

        </form>

  )
}

export default ContactCreater