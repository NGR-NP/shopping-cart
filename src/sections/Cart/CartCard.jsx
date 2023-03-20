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
                    <div className="w-full p-4 px-5 py-5">
                        <div className="grid gap-2 ">
                            <div className="col-span-2 p-5">
                                <h1 className="text-xl text-gray-100 font-medium ">Shopping Cart</h1>
                                {cart.qty < 1 ?
                                    <p className="m-9">empty cart</p>
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