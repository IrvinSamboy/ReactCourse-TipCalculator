
export default function Order() {
    return (
        <div className=" px-2">
            <div className="flex justify-between py-6 items-center">
                <div className="font-semibold">
                    <p>Pizza a la leña Chica - $30.00</p>
                    <p className="font-black">Cantidad: 1-$30.00</p>
                </div>
                <p className="bg-red-500 text-white px-[11.5px] py-1 rounded-full">X</p>
            </div>
            <div className="flex justify-between py-6 items-center">
                <div className="font-semibold">
                    <p>Pizza a la leña Chica - $30.00</p>
                    <p className="font-black">Cantidad: 1-$30.00</p>
                </div>
                <p className="bg-red-500 text-white px-[11.5px] py-1 rounded-full">X</p>
            </div>
            <div className="flex justify-between py-6 items-center">
                <div className="font-semibold">
                    <p>Pizza a la leña Chica - $30.00</p>
                    <p className="font-black">Cantidad: 1-$30.00</p>
                </div>
                <p className="bg-red-500 text-white px-[11.5px] py-1 rounded-full">X</p>
            </div>
            <div className=" mb-10">
                <h2 className="text-2xl font-black mb-2">Tip:</h2>
                <div className="flex gap-2">
                    <label htmlFor="10">10%</label>
                    <input type="radio" id="10" />
                </div>
                <div className="flex gap-2">
                    <label htmlFor="20">20%</label>
                    <input type="radio" id="10" />
                </div>
                <div className="flex gap-2">
                    <label htmlFor="50">50%</label>
                    <input type="radio" id="50" />
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-black mb-2">Total and tips:</h2>
                <div className="flex flex-col gap-3">
                    <p>Subtotal: <span className="font-bold">$100.00</span></p>
                    <p>Tip: <span className="font-bold">$10.00</span></p>
                    <p>Total: <span className="font-bold">$100.00</span></p>
                </div>
            </div>
            <button className="text-white bg-black w-full p-3 font-bold mt-5">SAVE ORDER</button>
        </div>
    )
}
