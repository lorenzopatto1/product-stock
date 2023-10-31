import { Container, Header, Main, Search } from "./styles";
import logo from "./assets/logo.webp";
import { useState } from "react";
import { NewProduct } from "./pages/NewProduct/index";
import { useSelector } from "react-redux";
import { ApplicationState } from "./redux/store";
import { Product } from "./components/Product";

function App() {
  const [newProduct, setNewProduct] = useState(false);
  const [search, setSearch] = useState("");
  const { products } = useSelector(
    (rootReducer: ApplicationState) => rootReducer.stockReducer
  );

  return (
    <Container>
      {newProduct ? (
        <>
          <NewProduct set={setNewProduct} />
        </>
      ) : (
        <>
          <Header>
            <div>
              <img src={logo} alt="logo" />
              <span>Bem vindo ao seu estoque</span>
            </div>
            <button onClick={() => setNewProduct(true)}>
              Cadastrar novo produto
            </button>
          </Header>
          <Main>
            <h1>Produtos em Estoque:</h1>
            <Search>
              <input
                type="text"
                placeholder="Barra de pesquisa"
                onChange={(event) => setSearch(event.target.value)}
              />
            </Search>
            <div>
              {products ? (
                <>
                  {products
                    .filter((product) => product.name.includes(search))
                    .map((product) => (
                      <Product key={product.id} product={product} />
                    ))}
                </>
              ) : (
                <div>Nenhum produto no estoque</div>
              )}
            </div>
          </Main>
        </>
      )}
    </Container>
  );
}

export default App;
