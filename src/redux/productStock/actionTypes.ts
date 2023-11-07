export type StockActionTypes = {
  ADD_PRODUCT: string;
  REMOVE_PRODUCT: string;
  EDIT_PRODUCT: string;
  DECREASE_PRODUCT_QUANTITY: string;
};

export const stockActionTypes: StockActionTypes = {
  ADD_PRODUCT: "stock/addProduct",
  REMOVE_PRODUCT: "stock/removeProduct",
  EDIT_PRODUCT: "stock/editProduct",
  DECREASE_PRODUCT_QUANTITY: "stock/decreaseProductQuantity",
};
