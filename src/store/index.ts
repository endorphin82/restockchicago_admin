import { createStore } from "redux";
import { rootReducer } from "../reducer"
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction"
import * as actions from "../actions/index"
const composeEnhancers = composeWithDevTools();

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type ActionsTypes = ReturnType<InferValueTypes<typeof actions>>;
// export type ActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<InferValueTypes<typeof actions>>;

export const store = createStore(rootReducer, {}, composeEnhancers);