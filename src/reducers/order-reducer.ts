import { menuItemsI, orderI } from "../interfaces/interfaces"

export type orderActions = 
    {type: 'insert-item', payload: {newItem: menuItemsI}} |
    {type: 'delete-item', payload: {id: number}} |
    {type: 'set-tip-percentage', payload: {percentage : number}} |
    {type: 'save-order'}

export type orderState = {
    order: orderI[]
    tipPercentage: number
}

export const initialState = {
    order: [],
    tipPercentage: 0
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

    else if(type === 'set-tip-percentage') {
        returnState = {
            ...state,
            tipPercentage: actions.payload.percentage
        }
    }
    else if(type === 'save-order') {

        localStorage.setItem('order', JSON.stringify(order))

        returnState = {
            order: [],
            tipPercentage: 0
        }
    }

    return returnState

}