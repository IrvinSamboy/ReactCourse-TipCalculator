import { menuItemsI, orderI } from "../interfaces/interfaces"

export type orderActions = 
    {type: 'insert-item', payload: {newItem: menuItemsI}} |
    {type: 'delete-item', payload: {id: number}} |
    {type: 'get-subtotal', payload: {id: number}}

export type orderState = {
    order: orderI[]
    tip: number
    subtotal: number
    total: number
}

export const initialState = {
    order: [],
    tip: 0,
    subtotal: 0,
    total: 0
}

export const orderReducer = (
    state : orderState = initialState,
    actions: orderActions
) => {

    let returnState = state

    const {type} = actions
    const {order} = state

    if(type === 'insert-item') {
        const index = order.findIndex(item => item.id === actions.payload.newItem.id)
        if(index >= 0) {
            const newOrder = order.map(item => {
                if(item.id === actions.payload.newItem.id) {
                    return {...actions.payload.newItem, quantity: item.quantity + 1}
                }
                return item
            })
            
            returnState = {
                ...state,
                order: newOrder
            }
        }
        else{
            returnState = {
                ...state,
                order: [...order, {...actions.payload.newItem, quantity: 1}]
            }
        }
    }

    else if(type === 'delete-item') {
        const orderDeleted = order.filter(item => item.id !== actions.payload.id)
        returnState = {
            ...state,
            order: orderDeleted
        }
    }

    else if(type === 'get-subtotal') {
        returnState = {
            ...state,
            subtotal: order.reduce((acumulator, currentvalue) => 
                acumulator + (currentvalue.price * currentvalue.quantity), 0)
        }
    }

    return returnState

}