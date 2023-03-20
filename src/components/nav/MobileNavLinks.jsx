import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useState } from 'react';

const MobileNavLinks = () => {
    const [visible, setVisible] = useState(false)
    return (
        <div className="flex relative items-center md:order-3">
            <button type="button" className="flex p-2 mr-3 text-sm bg-gray-800 rounded-full md:mr-0  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600">
                <span className="sr-only">Open user menu</span>
                <AccountCircleOutlinedIcon className="w-8 h-8 text-[#edf1f3] rounded-full" />
            </button>


            {
                visible && <div className="z-50 absolute top-12 right-3 text-base list-none divide-y rounded-lg shadow bg-gray-700 divide-gray-600" id="user-dropdown">
                    <div className="px-4 py-3">
                        <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                        <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                    </div>
                    <ul className="py-2" aria-labelledby="user-menu-button">
                        <li>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                        </li>
                    </ul>
                </div>

            }
            <button onClick={() => setVisible(!visible)} type="button" className="inline-flex items-center p-2 ml-1 text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="mobile-menu-2">
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
        </div>
    )
}
export default MobileNavLinks