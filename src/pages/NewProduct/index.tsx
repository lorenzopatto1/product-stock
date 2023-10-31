import { FormEvent } from "react";
import { Container, Form } from "./styles";
import { ArrowLeft } from "@phosphor-icons/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { addProductToStock } from "../../redux/productStock/actions";

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

export const NewProduct = ({
  set,
}: React.Dispatch<React.SetStateAction<boolean>>) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit: onSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(newProductFormSchema),
  });
  const handleSubmit: SubmitHandler<FormData> = (data) => {
    dispatch(addProductToStock({ id: Math.random(), ...data }));
    set(false);
  };

  console.log(errors);

  return (
    <Container>
      <ArrowLeft size={28} onClick={() => set(false)} />
      <h1>Cadastre um novo produto:</h1>

      <Form onSubmit={onSubmit(handleSubmit)}>
        <Input
          type="text"
          label="Nome do Produto:"
          error={errors.name}
          name="name"
          placeholder="Nome do Produto"
          {...register("name")}
        />
        <Input
          type="number"
          label="Quantidade de estoque:"
          error={errors.quantity}
          name="quantity"
          placeholder="Digite a quantidade de estoque"
          {...register("quantity")}
        />
        <Input
          type="number"
          label="Preço do produto:"
          error={errors.price}
          name="price"
          placeholder="Digite o preço do produto"
          {...register("price")}
          step="0.01"
        />

        <button type="submit">Cadastrar novo Produto</button>
      </Form>
    </Container>
  );
};
