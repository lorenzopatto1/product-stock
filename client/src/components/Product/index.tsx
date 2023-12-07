import { Gear, Trash } from "@phosphor-icons/react";

export type ProductProps = {
  id?: string;
  name: string;
  price: number;
  quantity: number;
};

import { useNavigate } from "react-router-dom";
import { api } from "../../lib/api";
import {
  Container,
  Content,
  Price,
  ProductName,
  Quantity,
  Settings,
} from "./styles";

interface ProductComponentProps {
  product: ProductProps;
}

export const Product = ({ product }: ProductComponentProps) => {
  const navigate = useNavigate();

  const handleProductRemove = async () => {
    await api.delete(`/product/${product.id}`);
  };

  return (
    <>
      <Container>
        <Settings>
          <Gear size={16} onClick={() => navigate(`/product/${product.id}`)} />
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
