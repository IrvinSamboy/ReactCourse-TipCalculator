import { useMemo } from "react";
import { orderActions, orderState } from "../reducers/order-reducer";

interface OrderPropsI {
    state: orderState
    dispatch: React.Dispatch<orderActions>
}

export default function Order({ state, dispatch }: OrderPropsI) {

    const getSubTotal = useMemo(() => {
        return state.order.reduce(
            (acumulator, currentvalue) => acumulator + (currentvalue.price * currentvalue.quantity), 0)
        }, [state])

    const getTip = useMemo(() => {
        return state.tipPercentage * getSubTotal
    }, [state])

    const getTotal = useMemo(() => {
        return getSubTotal + getTip
    } , [state])

    return (
        <div className=" px-2">
            {
                state.order.length > 0 ?
                    <>
                        {
                            state.order.map((item) => (
                                <div className="flex justify-between py-6 items-center">
                                    <div className="font-semibold">
                                        <p>{item.name} - ${item.price}</p>
                                        <p className="font-black">Quantity: {item.quantity} - ${item.quantity * item.price}</p>
                                    </div>
                                    <p
                                        className="bg-red-500 text-white px-[11.5px] py-1 rounded-full cursor-pointer"
                                        onClick={() => dispatch({type: 'delete-item', payload: {id : item.id}})}
                                    >X</p>
                                </div>
                            ))
                        }
                        <div className=" mb-10">
                            <h2 className="text-2xl font-black mb-2">Tip:</h2>
                            <div className="flex gap-2">
                                <label htmlFor="10">10%</label>
                                <input type="radio" id="10" name="tip" 
                                onChange={() => dispatch({type: 'set-tip-percentage', payload: {percentage: 0.10}})} 
                                />
                            </div>
                            <div className="flex gap-2">
                                <label htmlFor="20">20%</label>
                                <input type="radio" id="20" name="tip"
                                onChange={() => dispatch({type: 'set-tip-percentage', payload: {percentage: 0.20}})} 
                                />
                            </div>
                            <div className="flex gap-2">
                                <label htmlFor="50">50%</label>
                                <input type="radio" id="50" name="tip" 
                                onChange={() => dispatch({type: 'set-tip-percentage', payload: {percentage: 0.50}})}
                                />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-black mb-2">Total and tips:</h2>
                            <div className="flex flex-col gap-3">
                                <p>Subtotal: <span className="font-bold">${getSubTotal}</span></p>
                                <p>Tip: <span className="font-bold">${getTip}</span></p>
                                <p>Total: <span className="font-bold">${getTotal}</span></p>
                            </div>
                        </div>
                        <button 
                            className="text-white bg-black w-full p-3 font-bold mt-5"
                            onClick={() => dispatch({type: 'save-order'})}
                        >SAVE ORDER</button>
                    </>
                    : <p className="text-xl text-center">You have no orders</p>
            }

        </div>
    )
}
