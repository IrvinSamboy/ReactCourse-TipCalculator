import { menuItemsI, orderI } from "../interfaces/interfaces"

export type orderActions = 
    {type: 'insert-item', payload: {newItem: menuItemsI}}

export type orderState = {
    order: orderI
    tip: number
}

export const initialState = {
    order: [],
    tip: 0
}

export const orderReducer = (
    state : orderState = initialState,
    actions: orderActions
) => {

    const {type} = actions
    const {order, tip} = state

}