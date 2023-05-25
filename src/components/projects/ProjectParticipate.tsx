import styled from "styled-components";

type ProjectParticipateProps = {};

function ProjectParticipate(props: ProjectParticipateProps) {
  return (
    <>
      <TitleTypo>맡은 역할</TitleTypo>
    </>
  );
}

const TitleTypo = styled.div({
  fontFamily: "KBO",
  fontWeight: "1000",
  color: "#222",
  textAlign: "start",
  fontSize: "1.5rem",
  width: "100%",
});

export default ProjectParticipate;
