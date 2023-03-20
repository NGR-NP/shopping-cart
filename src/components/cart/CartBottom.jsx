import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { selectCurrentCart } from "../../Redux/cart/CartSlice"

const CartBottom = () => {
    const cart = useSelector(selectCurrentCart)
    const navigate = useNavigate()
    return (
        <div className="flex justify-between max-sm:flex-col-reverse max-sm:gap-4 items-center mt-6 pt-6 border-t">
            <div className="flex items-center">
                <i className="fa fa-arrow-left text-sm pr-2"></i>
                <div
                    onClick={() => navigate('/')}
                    className="text-md  font-medium cursor-pointer text-blue-500">
                    Continue Shopping
                </div >
            </div>

            <div className="flex justify-center items-end">
                <div className="text-sm font-medium text-gray-200 mr-1">Subtotal:</div>
                <div className="text-lg font-bold text-gray-500 "> Rs.{cart.total}</div>

            </div>

        </div >
    )
}
export default CartBottom