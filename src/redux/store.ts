import { Store, createStore } from "redux";

import { rootReducer } from "./rootReducer";
import { StockState } from "./productStock/reducer";

export interface ApplicationState {
  stockReducer: StockState;
}

export const store: Store<ApplicationState> = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
