import { orderI } from "../interfaces/interfaces"

interface OrderPropsI {
    order: orderI[];
    deleteItem: (id: number) => void
    getSubtotal: () => number 
    getTotal: () => number
    getTip: () => number
    setTip: (value: number) => void
    saveOrder: () => void
}

export default function Order({ order, deleteItem, getSubtotal, getTotal, setTip, getTip, saveOrder }: OrderPropsI) {
    return (
        <div className=" px-2">
            {
                order.length > 0 ?
                    <>
                        {
                            order.map((item) => (
                                <div className="flex justify-between py-6 items-center">
                                    <div className="font-semibold">
                                        <p>{item.name} - ${item.price}</p>
                                        <p className="font-black">Quantity: {item.quantity} - ${item.quantity * item.price}</p>
                                    </div>
                                    <p
                                        className="bg-red-500 text-white px-[11.5px] py-1 rounded-full cursor-pointer"
                                        onClick={() => deleteItem(item.id)}
                                    >X</p>
                                </div>
                            ))
                        }
                        <div className=" mb-10">
                            <h2 className="text-2xl font-black mb-2">Tip:</h2>
                            <div className="flex gap-2">
                                <label htmlFor="10">10%</label>
                                <input type="radio" id="10" name="tip" onChange={() => setTip(0.10)} />
                            </div>
                            <div className="flex gap-2">
                                <label htmlFor="20">20%</label>
                                <input type="radio" id="20" name="tip" onChange={() => setTip(0.20)} />
                            </div>
                            <div className="flex gap-2">
                                <label htmlFor="50">50%</label>
                                <input type="radio" id="50" name="tip" onChange={() => setTip(0.50)} />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-black mb-2">Total and tips:</h2>
                            <div className="flex flex-col gap-3">
                                <p>Subtotal: <span className="font-bold">${getSubtotal()}</span></p>
                                <p>Tip: <span className="font-bold">${getTip()}</span></p>
                                <p>Total: <span className="font-bold">${getTotal()}</span></p>
                            </div>
                        </div>
                        <button 
                            className="text-white bg-black w-full p-3 font-bold mt-5"
                            onClick={saveOrder}
                        >SAVE ORDER</button>
                    </>
                    : <p className="text-xl text-center">You have no orders</p>
            }

        </div>
    )
}
