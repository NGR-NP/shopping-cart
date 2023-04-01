import { RemoveShoppingCartOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import CartBottom from "../../components/cart/CartBottom"
import { selectCurrentCart } from "../../Redux/cart/CartSlice"
import UserCartLists from './UserCartList'
const CartCard = () => {
    const cart = useSelector(selectCurrentCart)
    const dispatch = useDispatch()
    return (
        <div className="py-12">
            <div className="max-w-screen-lg mx-auto bg-[#111827] shadow-lg rounded-lg">
                <div className="md:flex">
                    <div className="p-4 px-5 py-5 w-full">
                        <div className="grid gap-2">
                            <div className="col-span-2 p-5">
                                <h1 className="text-xl font-medium text-gray-100">Shopping Cart</h1>
                                {cart.qty < 1 ?
                                    <div className="flex flex-col gap-7 justify-center items-center m-9 w-auto h-60 bg-gray-700 rounded-lg item-center">
                                        <RemoveShoppingCartOutlined sx={{ fontSize: "5rem" }} className="text-gray-100" />
                                        <p className="px-6 py-2 text-red-100 bg-gray-900 rounded-lg">empty cart</p>
                                    </div>
                                    :
                                    cart?.product.map((product) => (
                                        <UserCartLists key={product.uid} product={product} />
                                    )
                                    )}
                                <CartBottom />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CartCard