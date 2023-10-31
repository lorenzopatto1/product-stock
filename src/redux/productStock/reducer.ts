import { Reducer } from "redux";
import { stockActionTypes } from "./actionTypes";

export type ProductProps = {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
};

export interface StockState {
  products: ProductProps[];
  balance: number;
}

const INITIAL_STATE: StockState = {
  products: [
    {
      id: 1,
      name: "teste",
      price: 1,
      img: "https://picsum.photos/200/300",
      quantity: 1,
    },
    {
      id: 2,
      name: "teste",
      price: 1,
      img: "https://picsum.photos/200/300",
      quantity: 1,
    },
    {
      id: 3,
      name: "teste",
      price: 1,
      img: "https://picsum.photos/200/300",
      quantity: 1,
    },
    {
      id: 4,
      name: "teste",
      price: 1,
      img: "https://picsum.photos/200/300",
      quantity: 1,
    },
    {
      id: 5,
      name: "teste",
      price: 1,
      img: "https://picsum.photos/200/300",
      quantity: 1,
    },
    {
      id: 6,
      name: "teste",
      price: 1,
      img: "https://picsum.photos/200/300",
      quantity: 1,
    },
    {
      id: 7,
      name: "teste",
      price: 1,
      img: "https://picsum.photos/200/300",
      quantity: 1,
    },
    {
      id: 8,
      name: "teste",
      price: 1,
      img: "https://picsum.photos/200/300",
      quantity: 1,
    },
    {
      id: 9,
      name: "teste",
      price: 1,
      img: "https://picsum.photos/200/300",
      quantity: 1,
    },
    {
      id: 10,
      name: "teste",
      price: 1,
      img: "https://picsum.photos/200/300",
      quantity: 1,
    },
    {
      id: 11,
      name: "teste",
      price: 1,
      img: "https://picsum.photos/200/300",
      quantity: 1,
    },
    {
      id: 12,
      name: "teste",
      price: 1,
      img: "https://picsum.photos/200/300",
      quantity: 1,
    },
    {
      id: 13,
      name: "teste",
      price: 1,
      img: "https://picsum.photos/200/300",
      quantity: 1,
    },
  ],
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
    default:
      return state;
  }
};
