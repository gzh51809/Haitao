// state默认值
let defaultState = {
    cartlist: [{
        id: 254708,
        img: "https://resource.51taouk.com/AdminImages/Product/6/1a1b78de-4edb-4522-b874-3b99ce5cbdbb.jpg",
        name: "英国原装爱他美 白金版 1段 0-6个月 奶粉800G",
        price: 13.99,
        oldprice: 19.99,
        qty: 2,
        total:27.98
    }, {
            id: 254709,
            img: "https://resource.51taouk.com/AdminImages/Product/6/1a1b78de-4edb-4522-b874-3b99ce5cbdbb.jpg",
            name: "英国原装爱他美 白金版 1段 0-6个月 奶粉800G",
            price: 13.99,
            oldprice: 19.99,
            qty: 3,
            total: 41.97
        }],
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