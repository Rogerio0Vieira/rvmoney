import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";


export function App() { //Utilizar o export ao inves do export default
  return (
    <>
      <Header />
      <Dashboard/>
      <GlobalStyle />
    </>
  );
}


