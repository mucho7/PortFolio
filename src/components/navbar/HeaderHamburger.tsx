import { useState } from "react";

import styled from "styled-components";
import { Icon } from "@mui/material";
import { Menu } from "@mui/icons-material";

type TargetType = "infoRef" | "skillRef" | "archiveRef" | "projectRef";

type HeaderHamburgerProps = {
  navOptions: { name: string; target: TargetType }[];
  onClickHandler: (target: TargetType) => void;
};

function HeaderHamburger(props: HeaderHamburgerProps) {
  const { navOptions, onClickHandler } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HamburgerContainer>
      <Icon component={Menu} fontSize='large' onClick={onHandler} />
      <PopUpBox style={{ display: isOpen ? "" : "none" }}>
        {navOptions.map((option, index) => {
          const { name, target } = option;
          return (
            <NavOption key={index} onClick={() => onClickHandler(target)}>
              {name}
            </NavOption>
          );
        })}
      </PopUpBox>
    </HamburgerContainer>
  );
}

const HamburgerContainer = styled.div({
  cursor: "pointer",
});

const PopUpBox = styled.div({
  position: "absolute",
  background: "white",
  transitionDuration: "1s",
});

const NavOption = styled.div`
  cursor: pointer;
  padding: 0.5rem;

  &: hover {
    color: white;
    background: gray;
  }
`;

export default HeaderHamburger;
