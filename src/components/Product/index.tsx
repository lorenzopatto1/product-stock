import { Gear, Trash } from "@phosphor-icons/react";
import { ProductProps } from "../../redux/productStock/reducer";

import {
  Container,
  Settings,
  ProductName,
  Price,
  Content,
  Quantity,
} from "./styles";
import { removeProductToStock } from "../../redux/productStock/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { EditProduct } from "../EditProduct";

interface ProductComponentProps {
  product: ProductProps;
}

export const Product = ({ product }: ProductComponentProps) => {
  const [editModal, setEditModal] = useState(false);

  const closeEditModal = () => {
    setEditModal(false);
  };

  const dispatch = useDispatch();
  const handleProductRemove = () => {
    dispatch(removeProductToStock(product.id));
  };

  return (
    <>
      {editModal && (
        <EditProduct closeModal={closeEditModal} products={product} />
      )}
      <Container>
        <Settings>
          <Gear size={16} onClick={() => setEditModal(true)} />
          <Trash size={16} onClick={handleProductRemove} />
        </Settings>
        <Content>
          <ProductName>{product.name.toUpperCase()}</ProductName>
          <Price>
            <span>
              R$
              {product.price.toString().includes(",00") ||
              product.price.toString().includes(".")
                ? product.price.toFixed(2).toString().replace(".", ",")
                : `${product.price},00`}
            </span>
          </Price>
          <Quantity>
            <h3>QUANTIDADE:</h3>
            <span>{product.quantity}</span>
          </Quantity>
        </Content>
      </Container>
    </>
  );
};
