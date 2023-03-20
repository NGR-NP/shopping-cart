import ProductCard from "../components/Home/ProductCard"
import { products } from '../assets/productData'
const ProductSec = () => {

    return (
        <div className="flex flex-wrap  xl:justify-start justify-center m-4 item-center gap-4">
            {products.map((product) => (
                <ProductCard key={product.id}
                    product={product} />
            ))
            }
        </div>
    )
}
export default ProductSec