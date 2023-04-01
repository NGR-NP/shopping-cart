import Logo from '../components/mix/Logo';
import CartBadge from '../components/nav/cartBadge';
import DesktopNavLinks from '../components/nav/DesktopNavLinks';
import MobileNavLinks from '../components/nav/MobileNavLinks';

const NavBar = () => {
    return (

        <nav className=" border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-gray-900 sticky top-0">
            <div className="container flex flex-wrap justify-between items-center mx-auto md:gap-3">
                <Logo />
                <CartBadge />
                <DesktopNavLinks />
                <MobileNavLinks />
            </div>
        </nav>

    )
}
export default NavBar