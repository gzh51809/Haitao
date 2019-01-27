// state默认值
let defaultState = {
    cartlist: [],
    step: 0
}
let cartReducer = function (state = defaultState, action) {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                cartlist: [...state.cartlist, action.payload]
            }
        default:
            return state;
    }
}
export default cartReducer;