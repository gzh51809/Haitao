import { createStore } from 'redux';

import reducer from '../redux';

// 生成store
let store = createStore(reducer);

export default store;