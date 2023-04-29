import { useEffect, useState } from "react";
import styled from "styled-components";

function HeaderNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [innerSize, setInnerSize] = useState(0);
  const navOptions = [
    { name: "About me" },
    { name: "Tech Stacks" },
    // { name: "Github" },
    { name: "Projects" },
    { name: "Career" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 0);
    };

    const handleResize = () => {
      setInnerSize(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledHeader scrolled={scrolled}>
      <NavContainer>
        <MyNameBox>김민찬 Portfolio</MyNameBox>
        {innerSize < 900 ? (
          <></>
        ) : (
          <NavItemContainer>
            {navOptions.map((option, index) => {
              const { name } = option;
              return <div key={index}>{name}</div>;
            })}
          </NavItemContainer>
        )}
      </NavContainer>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
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

export default HeaderNavbar;
