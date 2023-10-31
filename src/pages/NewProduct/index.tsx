import { useState } from "react";
import { ChangeEvent } from "react";

import { Container, Form, SelectImage } from "./styles";
import { ArrowLeft, Paperclip } from "@phosphor-icons/react";

export const NewProduct = () => {
  const [file, setFile] = useState("");
  function handleSelectProductImage() {
    const file = document.getElementById("file");
    file?.click();
  }
  console.log(file);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files![0];

    if (selectedFile) {
      const imageURL = URL.createObjectURL(selectedFile);
      setFile(imageURL);
    }
  };

  return (
    <Container>
      <ArrowLeft size={28} />
      <h1>Cadastre um novo produto:</h1>

      <Form>
        <input type="text" placeholder="Nome do Produto" />
        <input type="text" placeholder="Digite a quantidade de estoque" />
        <input type="text" placeholder="Digite o preço do produto" />
        <input type="text" placeholder="Coloque o link de uma imagem" />
        <input type="file" id="file" onChange={handleFileChange} />
        {file && <img src={file} alt="imagem do produto" width={200} />}
        <SelectImage onClick={handleSelectProductImage}>
          <span>
            Ou selecione uma imagem de seu dispositivo <Paperclip size={18} />
          </span>
        </SelectImage>
        <button type="button">Cadastrar novo Produto</button>
      </Form>
    </Container>
  );
};
