import { Gear, Trash } from "@phosphor-icons/react";
import { ProductProps } from "../../redux/productStock/reducer";

import { Container, Settings, Content } from "./styles";
import { removeProductToStock } from "../../redux/productStock/actions";
import { useDispatch } from "react-redux";

interface ProductComponentProps {
  product: ProductProps;
}

export const Product = ({ product }: ProductComponentProps) => {
  const dispatch = useDispatch();
  const handleProductRemove = () => {
    dispatch(removeProductToStock(product.id));
  };

  return (
    <Container>
      <Settings>
        <Gear size={16} />
        <Trash size={16} onClick={handleProductRemove} />
      </Settings>
      <Content>
        <div>
          <h3>NOME DO PRODUTO:</h3>
          <span>{product.name}</span>
        </div>
        <div>
          <h3>QUANTIDADE:</h3>
          <span>{product.quantity}</span>
        </div>
        <div>
          <h3>PREÇO UNITÁRIO:</h3>
          <span>
            R$
            {product.price.toString().includes(",00") ||
            product.price.toString().includes(".")
              ? product.price.toFixed(2).toString().replace(".", ",")
              : `${product.price},00`}
          </span>
        </div>
      </Content>
    </Container>
  );
};
