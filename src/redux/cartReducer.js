// state默认值
let defaultState = {
    cartlist: [],
    step: 0
}
let cartReducer = function (state = defaultState, action) {
    // action{ type: 'xx', palyload: {id,img,name,price,oldprice,qty,total} }
    switch (action.type) {
        case 'addCart':
            return {
                ...state,
                cartlist: [...state.cartlist, action.payload]
            }
        case 'updateCart':
            // action{type:'xxx',payload:{id,qty,total}}
            return {
                ...state,
                cartlist:state.cartlist.map((item)=>{
                    if (item.id === action.payload.id){
                        item.qty = action.payload.qty;
                        item.total = action.payload.total
                    }
                    return item;
                })
            }
        case 'removeCart':
            // action{type:'xxx',payload:{id}}
            return {
                ...state,
                cartlist: state.cartlist.filter(item => item.id !== action.payload.id)
            }
        case 'removeMoreCart':
            // action{type:'xxx',payload:{id:[]}}
            let list;
            if (action.payload.id.length === state.cartlist.length){
                list=[];
            }else{
                action.payload.id.forEach((id) => {
                    state.cartlist =state.cartlist.filter((item) => {
                        return item.id !== id;
                    })
                    list = state.cartlist;
                })
            }
            return {
                ...state,
                cartlist:list
            }
        default:
            return state;
    }
}
export default cartReducer;