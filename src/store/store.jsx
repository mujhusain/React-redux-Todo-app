
import { createStore } from "redux";
import {reducer} from '../reducers/todoReducers'

export const store=createStore(reducer);

// console.log("store", store.getState());