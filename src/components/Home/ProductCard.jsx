import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { addProduct } from "../../Redux/cart/CartSlice"
import Rating from "./Rating"
const ProductCard = ({ product }) => {
    const dispatch = useDispatch()
    const handleClick = () => {

        dispatch(addProduct({
            "uid": product.id + product.colors[0] + product.sizes[0],
            "id": product.id,
            "name": product.name,
            "imgUrl": product.imgUrl,
            "price": product.price,
            "rating": product.rating,
            "size": product.sizes[0],
            "color": product.colors[0],
            "qty": 1
        },))
    }
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700">
            <Link to={`/product/${product.id}`}>
                <img className="p-8 rounded-t-lg h-[487px] object-cover" src={product.imgUrl} alt="product image" />
            </Link>
            <div className="px-5 pb-5 break-words">
                <Link to={`/product/${product.id}`}>

                    <h5 className="text-xl uppercase line-clamp-1 font-semibold tracking-wide text-gray-900 dark:text-white">{product.name}</h5>
                </Link>
                <Rating rating={product.rating} />
                <div className="flex items-center flex-wrap justify-between gap-3">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">Rs.{product.price}</span>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 ml-auto focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleClick}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}
export default ProductCard