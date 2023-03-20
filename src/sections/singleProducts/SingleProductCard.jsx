import ProductInfo from './productInfo'
import ProductOptions from './ProductOptions'
const SingleProductCard = () => {
    const name = "vest"
    const imgUrl = "/images/mens/white-vest.png"
    return (
        <div className="relative mt-10 flex w-full items-center overflow-hidden bg-gray-900 px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
            <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">

                <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                    <img src={imgUrl} alt={name} className="object-cover object-center" />
                </div>

                <div className="sm:col-span-8 text-start text-white capitalize lg:col-span-7">
                    <h2 className="text-2xl font-bold text-white sm:pr-12">{name}</h2>

                    <ProductInfo />
                    <ProductOptions />

                </div>
            </div>

        </div>
    )
}
export default SingleProductCard