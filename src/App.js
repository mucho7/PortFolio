import React from "react";

import { HeaderNavbar } from "./components/navbar";
import { Info } from "./components/info";
import { Skills } from "./components/techStack";
import { Projects } from "./components/projects";

function App() {
  return (
    <React.Fragment>
      <HeaderNavbar />
      <Info />
      <Skills />
      <Projects />
    </React.Fragment>
  );
}

export default App;
