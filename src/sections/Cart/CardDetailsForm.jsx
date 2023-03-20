const CardDetailsForm = () => {
    return (
        <div className=" p-5 bg-gray-800 rounded overflow-visible">

            <div className="text-xl font-medium text-gray-100 block pb-3">Card Details</div>

            <div className="text-xs text-gray-400 ">Card Type</div>

            <div className="overflow-visible flex justify-between items-center mt-2">
                <div className="rounded w-52 h-28 bg-gray-500 py-2 px-4 relative right-10">

                    <div className="italic text-lg font-medium text-gray-200 underline">VISA</div>

                    <div className="flex justify-between items-center pt-4 ">

                        <div className="text-xs text-gray-200 font-medium">****</div>
                        <div className="text-xs text-gray-200 font-medium">****</div>
                        <div className="text-xs text-gray-200 font-medium">****</div>
                        <div className="text-xs text-gray-200 font-medium">****</div>

                    </div>

                    <div className="flex justify-between items-center mt-3">

                        <div className="text-xs  text-gray-200">Giga Tamarashvili</div>
                        <div className="text-xs  text-gray-200">12/18</div>
                    </div>
                </div>
                <div className="flex justify-center  items-center flex-col">

                    <img src="https://img.icons8.com/color/96/000000/mastercard-logo.png" width="40" className="relative right-5" />
                    <div className="text-xs font-medium text-gray-200 bottom-2 relative right-5">mastercard.</div>

                </div>

            </div>
            <div className="flex justify-center flex-col pt-3">
                <label className="text-xs text-gray-400 ">Name on Card</label>
                <input type="text" className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="Tezz Krki" />
            </div>
            <div className="flex justify-center flex-col pt-3">
                <label className="text-xs text-gray-400 ">Card Number</label>
                <input type="number" className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4 appearance-none" placeholder="****   ****   ****   ****" />
            </div>
            <div className="grid grid-cols-3 gap-2 pt-2 mb-3">

                <div className="col-span-2 ">

                    <label className="text-xs text-gray-400">Expiration Date</label>
                    <div className="grid grid-cols-2 gap-2">

                        <input type="number" className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="mm" />
                        <input type="number" className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="yyyy" />

                    </div>
                </div>
                <div className="">
                    <label className="text-xs text-gray-400">CVV</label>
                    <input type="number" className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4 appearance-none" placeholder="XXX" />
                </div>
            </div>
            <button className="h-12 w-full bg-blue-500 rounded focus:outline-none text-white hover:bg-blue-600">Check Out</button>
        </div>
    )
}
export default CardDetailsForm