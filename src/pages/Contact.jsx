import React from "react"

import Footer from "../components/common/Footer"
import ContactForm from "../components/contactPage/ContactForm"


const Contact = () => {
  return (
    <div>
      <div className="mx-auto my-20 flex justify-center items-center  w-11/12 max-w-[1260px] text-white">

        <div className="lg:w-[60%]">

            <div className="border border-[#424854] text-[#838894] rounded-xl p-7 lg:p-14 flex gap-3 flex-col">
                <h1 className="text-4xl leading-10 font-semibold text-[#F1F2FF]">
                    Have some query or suggestions, Contact us
                </h1>
                <p className="">
                    Tell us more about yourself and what you&apos;re got in mind.
                </p>

                <div className="mt-7">
                    <ContactForm />
                </div>
             </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact