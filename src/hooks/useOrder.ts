import { useState } from "react";
import { menuItemsI } from "../interfaces/interfaces";

interface orderI extends menuItemsI {
    quantity: number
}

const useOrder = () => {
    const [order, setOrder] = useState<orderI[]>([])

    const insertItem = (orderItem : menuItemsI) => {
        const index = order.findIndex(item => item.id === orderItem.id)
        if(index >= 0) {
            const newOrder = order.map(item => {
                if(item.id === orderItem.id) {
                    return {...orderItem, quantity: item.quantity++}
                }
                return item
            })

            setOrder(newOrder)
        }
        else{
            setOrder([...order, {...orderItem, quantity: 1}])
        }
    }

    const deleteItem = (id: number) => {
        const orderDeleted = order.filter(item => item.id !== id)
        setOrder(orderDeleted)
    }

    return {
        order,
        insertItem,
        deleteItem
    }

}

export default useOrder