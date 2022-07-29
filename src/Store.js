import { createStore } from "redux";
import counterReducer from "./Services/reducers/CounterReducer";


const store = createStore(counterReducer)

export default store