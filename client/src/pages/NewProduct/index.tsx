import { yupResolver } from "@hookform/resolvers/yup";
import { ArrowLeft } from "@phosphor-icons/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Input } from "../../components/Form/Input";
import { api } from "../../lib/api";
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

export const NewProduct = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(newProductFormSchema),
  });
  const handleSubmit: SubmitHandler<FormData> = async ({
    name,
    price,
    quantity,
  }) => {
    await api.post("/product", {
      name,
      price,
      quantity,
    });
    navigate("/");
  };

  return (
    <Container>
      <Link to="/">
        <ArrowLeft />
      </Link>
      <h1>Cadastre um novo produto:</h1>

      <Form onSubmit={onSubmit(handleSubmit)}>
        <Input
          type="text"
          label="Nome do Produto:"
          error={errors.name}
          placeholder="Nome do Produto"
          {...register("name")}
        />
        <Input
          type="number"
          label="Quantidade de estoque:"
          error={errors.quantity}
          placeholder="Digite a quantidade de estoque"
          {...register("quantity")}
        />
        <Input
          type="number"
          label="Preço do produto:"
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
