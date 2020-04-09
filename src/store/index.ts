import { createStore } from "redux";
import { rootReducer } from "../reducer"
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction"
// const composeEnhancers =
//   typeof window === "object" &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose;

const composeEnhancers = composeWithDevTools();

const store = createStore(rootReducer, {}, composeEnhancers);

export default store;