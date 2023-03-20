import { useDispatch } from 'react-redux'
import ChooseColor from '../../components/singleProduct/ChooseColor'
import ChooseSize from '../../components/singleProduct/ChooseSize'
import { addProduct } from '../../Redux/cart/CartSlice'
const ProductOptions = ({ product, ...props }) => {
    const dispatch = useDispatch()
    const handleClick = (e) => {
        e.preventDefault()
        dispatch(addProduct({
            "uid": product.id + props.selectedColor + props.selectedSize,
            "id": product.id,
            "name": product.name,
            "imgUrl": product.imgUrl,
            "price": product.price,
            "rating": product.rating,
            "size": props.selectedSize,
            "color": props.selectedColor,
            "qty": 1
        },
        ))
    }

    return (
        <section aria-labelledby="options-heading" className="mt-10">

            <h3 id="options-heading" className="sr-only">
                Product options
            </h3>

            <form>
                <ChooseColor
                    product={product}
                    setSelectedColor={props.setSelectedColor}
                    selectedColor={props.selectedColor}
                />
                <ChooseSize
                    product={product}
                    selectedSize={props.selectedSize}
                    setSelectedSize={props.setSelectedSize}
                />

                <button
                    onClick={handleClick}
                    className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Add to bag
                </button>

            </form>
        </section>
    )
}
export default ProductOptions