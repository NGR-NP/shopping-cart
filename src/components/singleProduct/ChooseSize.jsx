import { RadioGroup } from '@headlessui/react'
import { useState } from 'react'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const ChooseSize = ({ product, selectedSize, setSelectedSize }) => {
    console.log(selectedSize)

    return (
        <div className="mt-10">
            <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium">Size</h4>
                <a href="#" className="text-sm font-medium text-indigo-200 hover:text-indigo-400">
                    Size guide
                </a>
            </div>

            <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                <div className="grid grid-cols-4 gap-4">
                    {product.sizes.map((size) => (
                        <RadioGroup.Option
                            key={size.name}
                            value={size}
                            disabled={!size.inStock}
                            className={({ active }) =>
                                classNames(
                                    size.inStock
                                        ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                        : 'cursor-not-allowed bg-gray-500 text-gray-200 hover:bg-gray-600',
                                    active ? 'ring-2 ring-[#0288d1]' : '',
                                    'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-100 focus:outline-none sm:flex-1'
                                )
                            }
                        >
                            {({ active, checked }) => (
                                <>
                                    <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                    {size.inStock ? (
                                        <span
                                            className={classNames(
                                                active ? 'border' : 'border-2',
                                                checked ? 'border-indigo-500' : 'border-transparent',
                                                'pointer-events-none absolute -inset-px rounded-md'
                                            )}
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <span
                                            aria-hidden="true"
                                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                        >
                                            <svg
                                                className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                viewBox="0 0 100 100"
                                                preserveAspectRatio="none"
                                                stroke="currentColor"
                                            >
                                                <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                            </svg>
                                        </span>
                                    )}
                                </>
                            )}
                        </RadioGroup.Option>
                    ))}
                </div>
            </RadioGroup>
        </div>
    )
}
export default ChooseSize
