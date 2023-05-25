import { marked } from "marked";

import styled from "styled-components";

type ProjectParticipateProps = {
  participation: string;
};

function ProjectParticipate(props: ProjectParticipateProps) {
  //   const { participation } = props;
  const participation = "dkdkdkkdk";

  return (
    <>
      <TitleTypo>맡은 역할</TitleTypo>
      <ParticipationBox
        dangerouslySetInnerHTML={{ __html: marked(participation) }}
      />
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

const ParticipationBox = styled.div`
  width: 100%;
  max-width: 1200px;

  padding: 0.5rem 1rem;
  margin: 1rem 0;

  font-size: 16px;
  font-family: noto-sans;
  line-height: 1.5;

  border-radius: 20px;
  &: hover {
    background: rgba(29, 128, 159, 0.2);
  }
`;

export default ProjectParticipate;
