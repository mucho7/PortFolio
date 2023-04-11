import React from "react";

import styled from "styled-components";
import { HeaderNavbar } from "./components/navbar";
import { Info } from "./components/info";

function App() {
  return (
    <div style={{ width: "100%" }}>
      <StyledHeader>
        <HeaderNavbar />
      </StyledHeader>
      <Info />
    </div>
  );
}

const StyledHeader = styled.header`
  postion: fixed;
  top: 0;
  z-index: 10;
  color: rgba(33, 37, 41, 0.8);
  background: transparent;
`;

export default App;
