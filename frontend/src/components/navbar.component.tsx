import { NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { navbarLinks } from "../constants"
import notificationIcon from "../static/icons/notification.svg"
import avatar from "../static/images/avatar.png"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav className="bg-white">
                <div className="w-full shadow-2xl shadow-gray-200 rounded-b-[25px] lg:hidden z-50">
                    <div className="flex items-center justify-between p-4">
                        <Link to="/login">
                            <div className="h-12 w-12  flex items-center justify-center relative">
                                <img src={avatar} alt="نام کاربر" className="w-full rounded-full" />
                                <div className="absolute h-2 w-2 rounded-full bg-rose-600 bottom-0 right-1 animate-ping" />
                            </div>
                        </Link>

                        <button className="h-12 w-12 border border-black rounded-full flex items-center justify-center">
                            <img src={notificationIcon} alt="اعلان ها" className="w-[26px]" />
                        </button>
                    </div>
                </div>

                <div className="fixed bottom-0 right-0 left-0 w-full bg-white p-4 shadow-2xl shadow-black lg:hidden z-50 rounded-t-[25px]">
                    <ul className="flex justify-between bg-white px-2 relative">
                        {
                            navbarLinks.map((menu, i) => (
                                <li key={i}>
                                    <NavLink
                                        to={menu.url}
                                        className={
                                            ({ isActive }) => isActive
                                                ? "flex justify-center flex-col items-center gap-1 text-black font-bold"
                                                : "flex justify-center flex-col items-center gap-1 text-black"
                                        }>
                                        <img src={menu.icon} alt={menu.name} className="size-6" />

                                        <span className="text-md mt-1.5">{menu.name}</span>
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>

            <Outlet />
        </>
    )
}

export default Navbar   