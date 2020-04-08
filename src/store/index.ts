
import { createStore, compose } from "redux";
import { rootReducer } from "../reducer"

const composeEnhancers =
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__({})

const enhancer = composeEnhancers();

const store = createStore(rootReducer, {}, enhancer);

export default store;