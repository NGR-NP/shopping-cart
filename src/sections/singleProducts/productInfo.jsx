import StarIcon from '@mui/icons-material/Star'; import Rating from '../../components/Home/Rating';
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const ProductInfo = ({ product }) => {
    return (
        <section aria-labelledby="information-heading" className="mt-2">
            <p className="text-2xl text-white">{product.price}</p>

            {/* Reviews */}
            <div className="mt-6">
                <Rating rating={product.rating} />
            </div>
        </section>
    )
}
export default ProductInfo