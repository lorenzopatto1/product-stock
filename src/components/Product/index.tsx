import { Gear, Trash } from "@phosphor-icons/react";
import { ProductProps } from "../../redux/productStock/reducer";

import { Container, Settings, Content } from "./styles";

interface ProductComponentProps {
  product: ProductProps;
}

export const Product = ({ product }: ProductComponentProps) => {
  return (
    <Container>
      <Settings>
        <Gear size={16} />
        <Trash size={16} />
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
          <h3>PREÇO:</h3>
          <span>{product.price}</span>
        </div>
        <div>
          <img src={product.img} alt="imagem do produto" />
        </div>
      </Content>
    </Container>
  );
};
