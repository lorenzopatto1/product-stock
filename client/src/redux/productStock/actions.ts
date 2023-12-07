import { stockActionTypes } from "./actionTypes";
import { ProductProps } from "./reducer";

export const addProductToStock = (payload: ProductProps) => ({
  type: stockActionTypes.ADD_PRODUCT,
  payload,
});

export const removeProductToStock = (payload: string) => ({
  type: stockActionTypes.REMOVE_PRODUCT,
  payload,
});

export const editProductFromStock = (payload: ProductProps) => ({
  type: stockActionTypes.EDIT_PRODUCT,
  payload,
});

export const decreaseQuantity = (payload: number) => ({
  type: stockActionTypes.DECREASE_PRODUCT_QUANTITY,
  payload,
});
