import React from "react";

import styled from "styled-components";
import { HeaderNavbar } from "./components/navbar";
import { Info } from "./components/info";
import { Skills } from "./components/techStack";

function App() {
  return (
    <React.Fragment>
      <StyledHeader>
        <HeaderNavbar />
      </StyledHeader>
      <Info />
      <Skills />
    </React.Fragment>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;

  width: 100%;
  max-width: 72rem;

  color: rgba(255, 255, 255, 0.7);
  background: transparent;

  z-index: 10;
`;

export default App;
