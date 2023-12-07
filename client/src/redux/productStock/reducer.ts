import { Reducer } from "redux";
import { stockActionTypes } from "./actionTypes";

export type ProductProps = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

export interface StockState {
  products: ProductProps[];
  balance: number;
}

const INITIAL_STATE: StockState = {
  products: [],
  balance: 0,
};

export const stockReducer: Reducer<StockState> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case stockActionTypes.ADD_PRODUCT: {
      return {
        ...state,
        products: [...state.products, { ...action.payload }],
      };
    }
    case stockActionTypes.REMOVE_PRODUCT: {
      return {
        ...state,
        products: [
          ...state.products.filter((product) => product.id !== action.payload),
        ],
      };
    }
    case stockActionTypes.EDIT_PRODUCT: {
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? {
                ...product,
                name: action.payload.name,
                quantity: action.payload.quantity,
                price: action.payload.price,
              }
            : product
        ),
      };
    }
    default:
      return state;
  }
};
