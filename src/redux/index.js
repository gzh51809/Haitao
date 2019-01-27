import { combineReducers } from 'redux';

// 引入reducer
import cartReducer from './cartReducer';

// 把多个reducer组合成一个reducer
const rootReducer = combineReducers({
    cart: cartReducer
})

export default rootReducer;