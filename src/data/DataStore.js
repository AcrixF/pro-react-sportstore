import { ShopReducer } from "./ShopReducer";
import { createStore } from "redux";

export const SportStoreDataStore = createStore(ShopReducer)