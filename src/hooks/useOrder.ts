import { useState } from "react";
import { menuItemsI, orderI } from "../interfaces/interfaces";

const useOrder = () => {
    const [order, setOrder] = useState<orderI[]>([])
    const [tip, setTip] = useState(0)
    const insertItem = (orderItem : menuItemsI) => {
        const index = order.findIndex(item => item.id === orderItem.id)
        if(index >= 0) {
            const newOrder = order.map(item => {
                if(item.id === orderItem.id) {
                    return {...orderItem, quantity: item.quantity + 1}
                }
                return item
            })
            setOrder(newOrder)
            console.log(newOrder)
        }
        else{
            setOrder([...order, {...orderItem, quantity: 1}])
        }
    }

    const deleteItem = (id: number) => {
        const orderDeleted = order.filter(item => item.id !== id)
        setOrder(orderDeleted)
    }

    const getSubtotal = () : number =>{
        return order.reduce((acumulator, currentvalue) => 
            acumulator + (currentvalue.price * currentvalue.quantity), 0)
    }

    const getTip = () : number => {
        return tip * getSubtotal()
    }

    const getTotal = (tip : number) : number => {
        return getSubtotal() + getTip()
    }

    return {
        order,
        setTip,
        insertItem,
        deleteItem,
        getTotal,
        getTip,
        getSubtotal
    }

}

export default useOrder