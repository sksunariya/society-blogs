import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link , matchPath, useLocation, useNavigate} from 'react-router-dom';
import {AiOutlineMenu} from 'react-icons/ai';
import { VscSignOut } from "react-icons/vsc";
import { logout } from '../../services/apiLinks/authAPI';


const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showNav, setShowNav] = useState(false);
        
    const {user} = useSelector((state) => state.profile);
    const {token} = useSelector((state) => state.auth);
    const location = useLocation();

    const [userFirstName, setUserFirstName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userImage, setUserImage] = useState("");

    useEffect(() => {
      setUserFirstName(user?.firstName);
      setUserLastName(user?.lastName);
      setUserImage(user?.image);
    
    }, [user]);


    const matchRoute = (route) => {
        return matchPath({path: route}, location.pathname);
    }

    const navHandler = () => {
        setShowNav(showNav ? false : true);
    }



  return (

    <div>
        
        <div className='flex h-14 items-center justify-center border-b-[1px] border-b-[#2C333F] bg-[#161D29] transition-all duration-200'>

            <div className={`flex w-11/12 max-w-[1260px] items-center justify-between`}>

                <Link to="/">
                    <h1 className=' text-2xl bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-[#ffffff00] bg-clip-text font-bold'>SocietyBlogs</h1>
                </Link>

                <nav>
                    <ul className={`" hidden md:flex gap-x-12 text-[#DBDDEA]"`}>

                            <Link to={'/'}>
                                <p className={`${matchRoute('/')? "text-[#FFE83D]": "text-[#DBDDEA]" }`}> Home </p>
                            </Link>

                            <Link to={'/showAllBlogs'}>
                                <p className={`${matchRoute('/showAllBlogs')? "text-[#FFE83D]": "text-[#DBDDEA]" }`}> Blogs </p>
                            </Link>
                            
                            <Link to={'/contact'}>
                                <p className={`${matchRoute('/contact')? "text-[#FFE83D]": "text-[#DBDDEA]" }`}> Contact Us </p>
                            </Link>

                    </ul>
                </nav>

                <div className="hidden items-center gap-x-4 md:flex">

                    {token === null && (
                        <Link to="/login">
                            <button className="rounded-[8px] md:border border-[#2C333F] bg-[#161D29] px-[12px] py-[8px] text-[#AFB2BF]">
                                Log in
                            </button>
                        </Link>
                    )}
                    {token === null && (
                        <Link to="/signup">
                            <button className="rounded-[8px] md:border border-[#2C333F] bg-[#161D29] px-[12px] py-[8px] text-[#AFB2BF]">
                                Sign up
                            </button>
                        </Link>
                    )}
                    {token !== null && 
                        <Link to={'/dashboard'}>
                            <div className='flex gap-6 items-center'>
                            
                                <div className='text-lg text-white'>
                                    {userFirstName} {userLastName}
                                </div>
                                
                                <img width={30} height={30} className='rounded-full' src={userImage} alt='profile-picture'/>
                                
                            </div>
                        </Link>
                    }
                </div>

                <button onClick={() => navHandler()} className="mr-4 md:hidden">
                <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
                </button>

            </div>
            </div>

            
            <div className='relative'>

                <div className={`${showNav ? ' flex ' : 'absolute opacity-0 -translate-x-full hidden'}'flex flex-col gap-5 pl-16 pt-2 md:hidden transition-transform duration-700 ease-in-out'`}>
                    <div>
                        {token !== null && 
                            <Link to={'/dashboard'}>
                                <div onClick={navHandler} className='flex -ml-14 py-3 gap-6 items-center border-b-2 border-white border-opacity-40'>
                                
                                    <img width={30} height={30} className='rounded-full' src={userImage} />
                                    
                                    <div className='text-lg text-white'>
                                        {userFirstName} {userLastName}
                                    </div>
                                    
                                </div>
                            </Link>
                        }
                    </div>

                    <div className=''>
                        {token === null && (
                        <Link to="/login">
                            <div onClick={navHandler} className=' border-b-2 border-white border-opacity-40'>
                                <button className="rounded-[8px] mr-1 py-2 text-[#AFB2BF]">
                                    Log in
                                </button>
                            </div>
                        </Link>
                        )}
                    </div>

                    <div className=''>
                        {token === null && (
                            <Link to="/signup">
                                <div onClick={navHandler} className=' border-b-2 border-white border-opacity-40'>
                                    <button className="rounded-[8px] md:border py-2 text-[#AFB2BF]">
                                        Sign up
                                    </button>
                                </div>
                            </Link>
                        )}
                    </div>
                    
                    

                    <div className='border-b-2 py-2 border-white border-opacity-30'>
                        <Link to={'/'}>
                            <p onClick={navHandler} className={`${matchRoute('/')? "text-[#FFE83D]": "text-[#DBDDEA]" }`}> Home </p>
                        </Link>
                    </div>

                    <div className='border-b-2 py-2 border-white border-opacity-40'>
                        <Link to={'/showAllBlogs'}>
                            <p onClick={navHandler} className={`${matchRoute('/showAllBlogs')? "text-[#FFE83D]": "text-[#DBDDEA]" }`}> Blogs </p>
                        </Link>
                    </div>

                    <div className='border-b-2 py-2 border-white border-opacity-40'>
                        <Link to={'/contact'}>
                            <p onClick={navHandler} className={`${matchRoute('/contact')? "text-[#FFE83D]": "text-[#DBDDEA]" }`}> Contact Us </p>
                        </Link>
                    </div>

                    <div>
                        { user &&
                            <button onClick={() => dispatch(logout(navigate))} className="absolute rounded-md top-2 px-4 py-2 right-2 border text-lg font-lg text-[#838894]">
                                <div className="flex items-center gap-x-2">
                                    <VscSignOut className="text-lg" />
                                    <span>Logout</span>
                                </div>
                            </button>
                        }

                    </div>


                </div>

            </div>

    </div>
  )
}

export default Navbar