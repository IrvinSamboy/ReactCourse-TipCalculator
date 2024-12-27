import { orderI } from "../interfaces/interfaces"

interface OrderPropsI {
    order: orderI[];
    deleteItem: (id: number) => void 
}

export default function Order({order, deleteItem} : OrderPropsI) {
    return (
        <div className=" px-2">
            {
                order.map((item) => (
                    <div className="flex justify-between py-6 items-center">
                        <div className="font-semibold">
                            <p>{item.name} - ${item.price}</p>
                            <p className="font-black">Cantidad: {item.quantity} - ${item.quantity * item.price}</p>
                        </div>
                        <p 
                            className="bg-red-500 text-white px-[11.5px] py-1 rounded-full cursor-pointer" 
                            onClick={() => deleteItem(item.id)}
                        >X</p>
                    </div>
                ))
            }
            
            
            <button className="text-white bg-black w-full p-3 font-bold mt-5">SAVE ORDER</button>
        </div>
    )
}
