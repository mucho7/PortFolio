import styled from "styled-components";

function HeaderNavbar(params) {
  const navOptions = [
    { name: "About me" },
    { name: "Tech Stacks" },
    { name: "Github" },
    { name: "Projects" },
    { name: "Career" },
  ];

  return (
    <NavContainer>
      <MyNameBox>김민찬 Portfolio</MyNameBox>
      <NavItemContainer>
        {navOptions.map((option, index) => {
          const { name } = option;
          return <div key={index}>{name}</div>;
        })}
      </NavItemContainer>
    </NavContainer>
  );
}

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
  width: 50%;
`;

const MyNameBox = styled.div`
  display: inline-block;
  font-weight: 700;
  font-size: 1.5rem;
`;

export default HeaderNavbar;
