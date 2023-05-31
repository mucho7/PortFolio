import { store } from "store";
import { Provider } from "react-redux";
import GlobalStyles from "styles/GlobalStyles";
import PortFolio from "pages/PortFolio";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <PortFolio />
    </Provider>
  );
}

export default App;
