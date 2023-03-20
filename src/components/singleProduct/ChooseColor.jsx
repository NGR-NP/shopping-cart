import { RadioGroup } from '@headlessui/react'
import { useState } from 'react'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const ChooseColor = ({ product, selectedColor, setSelectedColor }) => {
    console.log(selectedColor);
    return (
        <div>
            <h4 className="text-sm font-medium text-white">Color</h4>

            <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                <span className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                        <RadioGroup.Option
                            key={color.name}
                            value={color}
                            className={({ active, checked }) =>
                                classNames(
                                    color.selectedClass,
                                    active && checked ? 'ring ring-offset-1' : '',
                                    !active && checked ? 'ring-2' : '',
                                    'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                                )
                            }
                        >
                            <span title={color.name}
                                aria-hidden="true"
                                className={classNames(
                                    color.class,
                                    'h-8 w-8 rounded-full border border-black border-opacity-10'
                                )}
                            />
                        </RadioGroup.Option>
                    ))}
                </span>
            </RadioGroup>
        </div>
    )
}
export default ChooseColor