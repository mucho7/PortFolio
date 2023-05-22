import styled from "styled-components";

type GitButtonProps = {
  url: string;
};

function GitButton(props: GitButtonProps) {
  const { url } = props;
  const onClickHandler = () => {
    window.open(url);
  };

  return <ButtonWrapper onClick={onClickHandler}>Git 둘러보기</ButtonWrapper>;
}

const ButtonWrapper = styled.div({
  background: "black",
  width: "6rem",
  borderRadius: "7px",
  cursor: "pointer",
});

export default GitButton;
