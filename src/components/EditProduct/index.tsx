import { yupResolver } from "@hookform/resolvers/yup";
import { ArrowLeft } from "@phosphor-icons/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { editProductFromStock } from "../../redux/productStock/actions";
import { ProductProps } from "../../redux/productStock/reducer";
import { Input } from "../../components/Form/Input";
import { Container, Form } from "./styles";

interface FormData {
  name: string;
  quantity: number;
  price: number;
}

const newProductFormSchema = yup.object().shape({
  name: yup.string().required("Campo Obrigatório"),
  quantity: yup
    .number()
    .required("Campo Obrigatório")
    .typeError("O valor deve ser um número")
    .min(1, "O número deve ser maior que 0"),
  price: yup
    .number()
    .typeError("O valor deve ser um número")
    .min(1, "O número deve ser maior que 0")
    .required("Campo Obrigatório"),
});

interface EditProductProps {
  products: ProductProps;
  closeModal: () => void;
}

export const EditProduct = ({ products, closeModal }: EditProductProps) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(newProductFormSchema),
  });
  const handleSubmit: SubmitHandler<FormData> = (data) => {
    dispatch(
      editProductFromStock({
        id: products.id,
        ...data,
      })
    );
    closeModal();
  };

  return (
    <Container>
      <ArrowLeft onClick={closeModal} />
      <h1>Editar Informações do produto: {products.name.toUpperCase()}</h1>

      <Form onSubmit={onSubmit(handleSubmit)}>
        <Input
          type="text"
          label="Novo nome do Produto:"
          value={products.name}
          error={errors.name}
          placeholder="Nome do Produto"
          {...register("name")}
        />
        <Input
          type="number"
          label="Nova quantidade de estoque:"
          value={products.quantity}
          error={errors.quantity}
          placeholder="Digite a quantidade de estoque"
          {...register("quantity")}
        />
        <Input
          type="number"
          label="Novo preço do produto:"
          value={products.price}
          error={errors.price}
          placeholder="Digite o preço do produto"
          {...register("price")}
          step="0.01"
        />

        <button type="submit">Cadastrar novo Produto</button>
      </Form>
    </Container>
  );
};
