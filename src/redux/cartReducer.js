// state默认值
let defaultState = {
    cartlist: [],
    step: 0
}
let cartReducer = function (state = defaultState, action) {
    // action{ type: 'xx', palyload: { xx } }
    switch (action.type) {
        case 'addCart':
            return {
                ...state,
                cartlist: [...state.cartlist, action.payload]
            }
        default:
            return state;
    }
}
export default cartReducer;