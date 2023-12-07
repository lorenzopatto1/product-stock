export type StockActionTypes = keyof typeof stockActionTypes;

export const stockActionTypes = {
  ADD_PRODUCT: "stock/addProduct",
  REMOVE_PRODUCT: "stock/removeProduct",
  EDIT_PRODUCT: "stock/editProduct",
  DECREASE_PRODUCT_QUANTITY: "stock/decreaseProductQuantity",
};
