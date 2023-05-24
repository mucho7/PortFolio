import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toTargetRef } from "store/containerRefSlice";

import styled from "styled-components";

type TargetType = "infoRef" | "skillRef" | "archiveRef" | "projectRef";

function HeaderNavbar() {
  const dispatch = useDispatch();
  const [scrolled, setScrolled] = useState(false);
  const [innerSize, setInnerSize] = useState(0);
  const navOptions: { name: string; target: TargetType }[] = [
    { name: "About me", target: "infoRef" },
    { name: "Tech Stacks", target: "skillRef" },
    { name: "Archiving", target: "archiveRef" },
    { name: "Projects", target: "projectRef" },
    // { name: "Career" },
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
        {innerSize < 1000 ? (
          // 햄버거 버튼 추가 요망
          <></>
        ) : (
          <NavItemContainer>
            {navOptions.map((option, index) => {
              const { name, target } = option;
              return (
                <NavOption onClick={() => onClickHandler(target)} key={index}>
                  {name}
                </NavOption>
              );
            })}
          </NavItemContainer>
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

const NavItemContainer = styled.div`
  ${getThemRow}
  font-weight: 700;
  font-size: 1rem;
  width: 40%;
`;

const MyNameBox = styled.div`
  display: inline-block;
  font-weight: 700;
  font-size: 1.5rem;
`;

const NavOption = styled.div`
  cursor: pointer;
  padding: 0.5rem;
  &: hover {
    color: white;
    background: gray;
  }
`;

export default HeaderNavbar;
