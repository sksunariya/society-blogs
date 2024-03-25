import React from 'react';
import Banner from '../assets/Images/banner.gif';
import ButtonComp from '../components/HomePage/Button';
import Footer from '../components/common/Footer';
import BooksImage from "../assets/Images/booksImage.jpg";
import Alumni from '../assets/Images/alumniImage.jpg'


const HomePage = () => {
  return (
    <div className='pt-10'>

        {/* section - 1 */}

        <section className="relative mx-auto lg:h-screen   flex w-11/12 max-w-[1260px] flex-col lg:flex-row items-center justify-between gap-8 text-white">
            <div className=' max-w-[600px] flex flex-col gap-16 text-center lg:text-left'>

                <h1 className=" text-4xl font-semibold">
                    Enhance Your Knowledge with <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-[#ffffff00] bg-clip-text font-bold">
                        Association
                    </span>
                </h1>


                <p className=" text-lg font-bold text-[#838894]">
                    Embark on an exciting journey of knowledge and discovery with Physics Society!
                    We believe that any student can excel in their lives by getting proper guidance. Get to know the industry better by reading the blogs.
                </p>


                <div className="justify-center items-center lg:justify-normal lg:items-start flex flex-row gap-7">

                    <ButtonComp active={true} linkto={"/signup"}>
                        Sign Up
                    </ButtonComp>
                    <ButtonComp active={false} linkto={"/login"}>
                        Log In
                    </ButtonComp>

                </div>

            </div>
            

            <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-[#47A5C5]">
                <img src={Banner} width={500} className='shadow-[20px_20px_rgba(255,255,255)] '/>

            </div>


        </section>



        {/* section 2 */}


        <section className="bg-[#EAF6F6]">
                    <div className=' text-[#2C333F] mx-auto flex w-11/12 max-w-[1260px] flex-row items-center justify-between gap-8 '>
                        <div className="mb-10 mt-[50px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
                            
                            <div className="text-4xl font-semibold ">
                                Increase your Network and <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-[#ffffff00] bg-clip-text font-bold">Excel</span> in Life
                            </div>

                        </div>
                    </div>




                    <div className='flex justify-center items-center'>


                        <div className=" w-11/12 max-w-[1260px] flex flex-col lg:flex-row gap-2 mb-20 items-center justify-between">
                            <div className="flex flex-col gap-14 ">

                            
                        
                                <div className="flex flex-col items-start gap-10 w-[90%]">
                                    <div className="text-[16px]">
                                        The SocietyBlogs offers a unique opportunity to connect to your seniors at one place and get to the in demand skills. Get professional guidance from your seniors and excel in your life.
                                    </div>
                                    <ButtonComp active={true} linkto={'signup'}>Know More</ButtonComp>
                                </div>
                                
                                
                            </div>

                        <div>

                    </div>



                    <div className=" shadow-[#47A5C5] shadow-[0px_0px_30px_0px]">

                        <img src={BooksImage}/>

                    </div>



                </div>

            </div>


        </section>



        {/* section 3*/}


        <section className="relative mx-auto my-20 flex w-11/12 max-w-[1260px] flex-col items-center justify-between gap-8 bg-[#000814] text-white">
            <div>
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-[50%]">
                        <img src={Alumni} alt='alumni image' className="shadow-white shadow-[-20px_-20px_0_0]"/>
                    </div>
                    <div className="lg:w-[50%] flex gap-10 flex-col">

                        <h1 className="lg:w-[50%] text-4xl font-semibold text-white">Are you an <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-[#ffffff00] bg-clip-text font-bold">Alumni?</span> </h1>

                        <p className="font-medium text-[16px] text-justify w-[90%] text-[#838894]">
                            We are on a mission to connect to all the alumni. We would love to have you back. Guide you juniors on this portal.
                        </p>

                        <div className="w-fit">
                            <ButtonComp active={true} linkto={'/signup'}>Join as Alumni</ButtonComp>
                        </div>
                    </div>
                </div>
            </div>
        </section>



      {/* <Footer /> */}
      <Footer />


    </div>
  )
}

export default HomePage