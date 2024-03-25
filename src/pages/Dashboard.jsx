import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { VscSignOut } from "react-icons/vsc"
import { useDispatch } from "react-redux"
import { logout } from "../services/apiLinks/authAPI"

import ButtonComp from "../components/HomePage/Button"

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading: profileLoading } = useSelector((state) => state.profile)
  const { loading: authLoading } = useSelector((state) => state.auth)
  const {user} = useSelector((state) => state.profile);

  if (profileLoading || authLoading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <div className="">
      { user &&
      <div className="relative hidden md:block mx-auto w-11/12 max-w-[1260px]">
        <button onClick={() => dispatch(logout(navigate))} className="absolute rounded-md top-2 px-4 py-2 right-2 border text-lg font-lg text-[#838894]">
          <div className="flex items-center gap-x-2">
            <VscSignOut className="text-lg" />
            <span>Logout</span>
          </div>
        </button>
      </div>
      }

      <div className=' w-11/12 max-w-[1260px] lg:mt-28'>
        <div className="w-11/12 lg:mx-auto gap-10 flex flex-col items-center ">

          <div className="relative w-11/12 max-w-[450px] ">
            <p className="text-white my-10 text-lg">
              Publish your passions your way. Whether you'd like to share your knowledge, experiences or the latest news, create a unique and beautiful blog.
            </p>
            <ButtonComp children={"Create Blog"} active={true} linkto={'/blog/createBlog'}/>
            
          </div>

          <div className="relative pb-10 flex flex-col justify-between w-11/12 max-w-[450px] ">
            <div className="h-[50%]"></div>
            <p className="text-white my-10 text-lg">See all of the blogs created by you here.</p>
            <ButtonComp className="w-[100px]" children={"See your Blogs"} active={true} linkto={'/blog/userBlogs'} />
          </div>
        </div>
      </div>


    </div>
  )
}

export default Dashboard