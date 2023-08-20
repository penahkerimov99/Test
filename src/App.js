import { MainContext } from "./untils/MainContext";

//components
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Login } from "./components/Login";
import { MobileMenu } from "./components/MobileMenu";

function App() {
  return (
    <MainContext>
      <Header />
      <Main />
      <Login />
      <MobileMenu />
    </MainContext>
  );
}

export default App;
