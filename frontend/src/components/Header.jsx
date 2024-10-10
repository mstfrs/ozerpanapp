import { useFrappeAuth } from "frappe-react-sdk";
import { Navigate, useNavigation } from "react-router-dom";

const Header = () => {
  const { currentUser, logout } = useFrappeAuth();
  const navigate = useNavigation()

  return (
    <div className="bg-slate-400 flex justify-between px-4 py-1 gap-5 items-center">
      <img src="/logobg.jpg" className="w-8 h-8" alt="" />
      <div className="flex gap-5 items-center">
        <div>
          {/* {currentUser} */}
          <div className="w-full flex justify-center">
            <button
              onClick={
                logout
              }
              className="flex items-center text-white border border-gray-300 rounded-lg shadow-md px-6 py-1 text-sm font-medium  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <span>Logout</span>
            </button>
          </div>
        </div>
        <img src="/employee.jpg" className="w-8 h-8 rounded-full" alt="" />
      </div>
    </div>
  )
}

export default Header
