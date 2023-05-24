import styled from "styled-components";
import { githubButton } from "assets/images";

type GitButtonProps = {
  url: string;
};

function GitButton(props: GitButtonProps) {
  const { url } = props;
  const onClickHandler = () => {
    window.open(url);
  };

  return (
    <ButtonWrapper onClick={onClickHandler}>
      <GitIcon style={{ backgroundImage: `url(${githubButton})` }} />
      <GitTypo>Git</GitTypo>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div({
  display: "flex",
  alignItems: "center",

  width: "6rem",
  height: "2rem",
  padding: "0.5rem",
  borderRadius: "7px",

  "&: hover": {
    background: "rgba(0, 0, 0, 0.2)",
  },
});

const GitIcon = styled.div({
  width: "3rem",
  height: "2rem",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
});

const GitTypo = styled.div({
  height: "1.5rem",
  fontSize: "1.5rem",
  fontFamily: "BlackHanSans",
  cursor: "pointer",
});

export default GitButton;
