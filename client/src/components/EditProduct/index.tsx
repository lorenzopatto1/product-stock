import { yupResolver } from "@hookform/resolvers/yup";
import { ArrowLeft } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { Input } from "../../components/Form/Input";
import { api } from "../../lib/api";
import { ProductProps } from "../../redux/productStock/reducer";
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

export const EditProduct = () => {
  const params = useParams();
  const id = params.id!;
  const [product, setProduct] = useState<ProductProps>();

  useEffect(() => {
    api.get<ProductProps[]>("/").then((response) => {
      const data = response.data.find((product) => product.id == id);
      setProduct(data);
    });
  }, [id]);

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
    await api.put(`/product/${id}`, {
      name,
      price,
      quantity,
    });
    navigate("/");
  };

  return (
    <Container>
      <ArrowLeft onClick={() => navigate("/")} />
      <h1>Editar Informações do produto: {product?.name.toUpperCase()}</h1>

      <Form onSubmit={onSubmit(handleSubmit)}>
        <Input
          type="text"
          label="Novo nome do Produto:"
          value={product?.name}
          error={errors.name}
          placeholder="Nome do Produto"
          {...register("name")}
        />
        <Input
          type="number"
          label="Nova quantidade de estoque:"
          value={product?.quantity}
          error={errors.quantity}
          placeholder="Digite a quantidade de estoque"
          {...register("quantity")}
        />
        <Input
          type="number"
          label="Novo preço do produto:"
          value={product?.price}
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
