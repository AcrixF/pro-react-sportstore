import { ShopReducer } from "./ShopReducer";
import { createStore } from "redux";
import { CommonReducer } from "./CommonReducer";
import { CartReducer } from "./CartReducer";

// export const SportStoreDataStore = createStore(ShopReducer)

export const SportStoreDataStore = createStore(CommonReducer(ShopReducer, CartReducer))