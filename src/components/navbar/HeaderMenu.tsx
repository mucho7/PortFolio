import styled from "styled-components";

type TargetType = "infoRef" | "skillRef" | "archiveRef" | "projectRef";

type HeaderMenuProps = {
  navOptions: { name: string; target: TargetType }[];
  onClickHandler: (target: TargetType) => void;
};

function HeaderMenu(props: HeaderMenuProps) {
  const { navOptions, onClickHandler } = props;
  return (
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
  );
}

const getThemRow = `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NavItemContainer = styled.div`
  ${getThemRow}
  font-weight: 700;
  font-size: 1rem;
  width: 40%;
`;

const NavOption = styled.div`
  cursor: pointer;
  padding: 0.5rem;

  &: hover {
    color: white;
    background: gray;
  }
`;
export default HeaderMenu;
