import { stockActionTypes } from "./actionTypes";
import { ProductProps } from "./reducer";

export const addProductToStock = (payload: ProductProps) => ({
  type: stockActionTypes.ADD_PRODUCT,
  payload,
});

export const removeProductToStock = (payload: number) => ({
  type: stockActionTypes.REMOVE_PRODUCT,
  payload,
});

export const increaseQuantity = (payload: number) => ({
  type: stockActionTypes.INCREASE_PRODUCT_QUANTITY,
  payload,
});

export const decreaseQuantity = (payload: number) => ({
  type: stockActionTypes.DECREASE_PRODUCT_QUANTITY,
  payload,
});