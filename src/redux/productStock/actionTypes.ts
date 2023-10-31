export type StockActionTypes = {
  ADD_PRODUCT: string;
  REMOVE_PRODUCT: string;
  INCREASE_PRODUCT_QUANTITY: string;
  DECREASE_PRODUCT_QUANTITY: string;
}

export const stockActionTypes: StockActionTypes = {
  ADD_PRODUCT: "stock/addProduct",
  REMOVE_PRODUCT: "stock/removeProduct",
  INCREASE_PRODUCT_QUANTITY: "stock/increaseProductQuantity",
  DECREASE_PRODUCT_QUANTITY: "stock/decreaseProductQuantity"
}