import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCurrentCart } from '../../Redux/cart/CartSlice';
const CartBadge = () => {
    const cart = useSelector(selectCurrentCart)
    const navigate = useNavigate()
    return (
        <div className="flex relative items-center md:order-2 max-md:ml-auto">
            <button type="button" onClick={() => navigate("/cart")} className="flex p-2 mr-3 text-sm text-gray-400 bg-gray-800 rounded-full max-md:mr-6 focus:outline-none focus:ring-2 hover:bg-gray-700 focus:ring-gray-600" id="user-menu-button">
                <Badge badgeContent={cart.qty} color="primary">
                    <ShoppingCartOutlinedIcon className="text-[#edf1f3] w-8 h-8 rounded-full" />
                </Badge>
            </button>

        </div >
    )
}
export default CartBadge