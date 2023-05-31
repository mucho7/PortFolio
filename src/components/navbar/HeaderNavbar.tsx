import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toTargetRef } from "store/containerRefSlice";
import { Menu } from "@mui/icons-material";

import styled from "styled-components";
import { Icon } from "@mui/material";
import HeaderMenu from "./HeaderMenu";
import HeaderHamburger from "./HeaderHamburger";

type TargetType = "infoRef" | "skillRef" | "archiveRef" | "projectRef";

function HeaderNavbar() {
  const dispatch = useDispatch();
  const [scrolled, setScrolled] = useState(false);
  const [innerSize, setInnerSize] = useState(0);
  const navOptions: { name: string; target: TargetType }[] = [
    { name: "About me", target: "infoRef" },
    { name: "Tech Stacks", target: "skillRef" },
    { name: "Projects", target: "projectRef" },
    { name: "Archiving", target: "archiveRef" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 0);
    };

    const handleResize = () => {
      setInnerSize(window.innerWidth);
    };

    handleResize();
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onClickHandler = (target: TargetType) => {
    dispatch(toTargetRef(target));
  };

  return (
    <StyledHeader scrolled={scrolled}>
      <NavContainer>
        <MyNameBox>김민찬 Portfolio</MyNameBox>
        {innerSize < 1200 ? (
          // 햄버거 버튼 추가 요망
          <HeaderHamburger
            onClickHandler={onClickHandler}
            navOptions={navOptions}
          />
        ) : (
          <HeaderMenu onClickHandler={onClickHandler} navOptions={navOptions} />
        )}
      </NavContainer>
    </StyledHeader>
  );
}

const StyledHeader = styled.header<{ scrolled: boolean }>`
  position: fixed;
  top: 0;

  width: 100%;

  color: ${(props) => (props.scrolled ? "black" : "rgba(255, 255, 255, 0.7)")};

  background: ${(props) => (props.scrolled ? "white" : "transparent")};

  z-index: 10;
`;

const getThemRow = `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NavContainer = styled.div`
  ${getThemRow}
  padding: 1.25rem 2rem;
`;

const MyNameBox = styled.div`
  display: inline-block;
  font-weight: 700;
  font-family: KBO;
  font-size: 1.5rem;
`;

export default HeaderNavbar;
