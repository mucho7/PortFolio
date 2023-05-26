import { HeaderNavbar } from "./components/navbar";
import { Info } from "./components/info";
import { Skills } from "./components/techStack";
import { Projects } from "./components/projects";
import { Provider } from "react-redux"; // Provider 추가
import { store } from "store";
import { Archiving } from "components/arcive";
import GlobalStyles from "styles/GlobalStyles";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <HeaderNavbar />
      <Info />
      <Skills />
      <Projects />
      <Archiving />
    </Provider>
  );
}

export default App;
