import Logo from '../components/mix/Logo';
import CartBadge from '../components/nav/cartBadge';
import DesktopNavLinks from '../components/nav/DesktopNavLinks';

const NavBar = () => {
    return (

        <nav className=" border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-gray-900 sticky top-0">
            <div className="container flex flex-wrap items-center justify-between md:gap-3 mx-auto">
                <Logo />
                <CartBadge />
                <DesktopNavLinks />
            </div>
        </nav>

    )
}
export default NavBar