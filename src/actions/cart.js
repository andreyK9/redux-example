export const addToCart = (item) => {
    return {
        type: 'ADD_PRODUCT',
        payload: item
    };
}

export const deleteFromCart = (item) => {

    return {
        type: 'DELETE_PRODUCT',
        payload: item
    };
}