import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { decQty, incQty, removeProduct } from "../../Redux/cart/CartSlice"
import DeleteIcon from '@mui/icons-material/Delete';
const UserCartLists = ({ product }) => {
    const dispatch = useDispatch()
    const handleClick = (type) => {
        if (type === "dec") {
            dispatch(decQty({ uid: product.uid }))
        } else {
            dispatch(incQty({ uid: product.uid }))
        }
    }
    return (
        <div className="flex justify-between max-sm:flex-col max-sm:gap-8 text-white items-center mt-6 pt-6">
            <div className="flex  items-center">
                <img src={product.imgUrl} width="60" height="60" className="rounded-full " />

                <div className="flex flex-col mx-4 text-start">
                    <Link to={`/product/${product.id}`}>
                        <div className="md:text-md font-medium line-clamp-1">{product.name}</div>
                    </Link>
                    <div className="flex my-5 gap-2 item-center">
                        <div className={`text-xs font-light text-gray-400 h-5 w-5 rounded-full ${product.color?.class}`} />
                        <div className="text-xs font-light text-gray-400 flex items-center">{product.color?.name}</div><b>|</b>
                        <div className="text-xs font-light text-gray-400 flex items-center">Size: </div>
                        <div className="text-xs font-light text-gray-400 flex items-center">{product.size?.name}</div>

                    </div>
                    <div className="flex my-5 gap-2 item-center">
                    </div>
                </div>

            </div>

            <div className="flex justify-center items-center">

                <div className="pr-8 flex ">
                    <div className={`${product.qty <= 2 ? "text-red-500" : "text-white"}font-semibold cursor-pointer`} onClick={() => handleClick("dec")}>-</div>
                    <input type="tel" className="focus:outline-none appearance-none text-black bg-gray-100 border h-6 w-8 rounded text-sm px-[0.7rem] mx-2" value={product.qty} onChange={(e) => setQty(e.target.value)} />
                    <div className="font-semibold cursor-pointer" onClick={() => handleClick("inc")}>+</div>
                </div>

                <div className="pr-8 ">
                    <div className="text-xs font-medium">{product.price * product.qty}</div>
                </div>

                <div>
                    <DeleteIcon onClick={() => dispatch(removeProduct({ uid: product.uid }))} className="text-xs font-medium text-red-500"></DeleteIcon>
                </div>

            </div>

        </div>
    )
}
export default UserCartLists