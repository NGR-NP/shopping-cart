import { NavLink } from "react-router-dom"

const DesktopNavLinks = () => {
    return (
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 mx-auto" id="mobile-menu-2">
            <ul className="flex flex-col p-4 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
                <li>
                    <NavLink
                        to='/'
                        style={({ isActive }) => {
                            return {
                                color: isActive && "#0288d1"
                            }
                        }}
                        className="block py-2 pl-3 pr-4 rounded md:p-0 hover:text-[#34a7e6] text-white">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/cart' style={({ isActive }) => {
                        return {
                            color: isActive && "#0288d1"
                        }
                    }}
                        className="block py-2 pl-3 pr-4 rounded md:p-0 hover:text-[#34a7e6] text-white">Cart </NavLink>
                </li>
            </ul>
        </div >
    )
}
export default DesktopNavLinks