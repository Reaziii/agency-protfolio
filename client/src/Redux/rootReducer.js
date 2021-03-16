import {combineReducers} from 'redux';
import pagesReducer from './Pages/pages-reducer';
import domainReducer from './Domain/domain-reducer';
import cartReducer from './Cart/cart-reducer';
import popupReducer from './Popup/popup-reducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import sessionStorage from 'redux-persist/lib/storage/session';


const persistConfig = {
    key: 'root',
    storage: sessionStorage,
    whitelist: ['pages', 'popup', 'cart']
  };
  
const rootReducer = combineReducers({
    pages: pagesReducer,
    domain: domainReducer,
    cart: cartReducer,
    popup: popupReducer,
})

export default persistReducer(persistConfig, rootReducer);