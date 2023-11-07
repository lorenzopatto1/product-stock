import { useState } from "react";
import { useSelector } from "react-redux";
import logo from "../../assets/logo.webp";
import { Product } from "../../components/Product";
import { ApplicationState } from "../../redux/store";
import { Container, Header, Main, Search } from "./styles";
import { Link } from "react-router-dom";

function App() {
  const [search, setSearch] = useState("");
  const { products } = useSelector(
    (rootReducer: ApplicationState) => rootReducer.stockReducer
  );

  return (
    <Container>
      <>
        <Header>
          <div>
            <img src={logo} alt="logo" />
            <span>Bem vindo ao seu estoque</span>
          </div>
          <Link to="/product/create">
            <button>Cadastrar novo produto</button>
          </Link>
        </Header>
        <Main>
          <h1>Produtos em Estoque:</h1>
          <Search>
            <input
              type="text"
              placeholder="Barra de pesquisa"
              onChange={(event) => setSearch(event.target.value.toLowerCase())}
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
    </Container>
  );
}

export default App;
