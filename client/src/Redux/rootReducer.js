import {combineReducers} from 'redux';
import pagesReducer from './Pages/pages-reducer';
import domainReducer from './Domain/domain-reducer';
import cartReducer from './Cart/cart-reducer';
import popupReducer from './Popup/popup-reducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import sessionStorage from 'redux-persist/lib/storage/session';
import {userReducer} from './user/user.Reducer'

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['pages', 'popup', 'cart','user']
  };
  
const rootReducer = combineReducers({
    pages: pagesReducer,
    domain: domainReducer,
    cart: cartReducer,
    popup: popupReducer,
    user : userReducer,
})

export default persistReducer(persistConfig, rootReducer);