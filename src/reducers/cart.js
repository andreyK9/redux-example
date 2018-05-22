const initialState = ['макароны', 'баклажан', 'оливки']//уже в корзине


export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [...state, action.payload];

        case 'DELETE_PRODUCT': {
            const arr = [];
            state.map(el => { arr.push(el) });
            if (arr.indexOf(action.payload) !== -1) {
                const index = arr.indexOf(action.payload)
                arr.splice(index, 1);
                return arr
            }
        }
        default:
            return state;
    }
};