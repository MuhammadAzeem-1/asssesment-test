import { combineReducers } from "redux";
import products from "./products";
import users from "./Users";

export default combineReducers({
  products,
  users,
});
