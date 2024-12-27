export interface menuItemsI {
    id: number,
    name: string,
    price: number
}

export interface orderI extends menuItemsI {
    quantity: number
}