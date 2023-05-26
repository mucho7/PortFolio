import { useDispatch } from "react-redux";

import {
  clearTarget,
  setPersistTarget,
  setTarget,
} from "store/hoverTargetSlice";

import styled from "styled-components";

type ProjectParticipateProps = {
  participation: string[];
  targetNum: number;
};

function ProjectParticipate(props: ProjectParticipateProps) {
  const { participation, targetNum } = props;
  const dispatch = useDispatch();

  const handleMouseHover = (event: "click" | "enter" | "exit") => {
    switch (event) {
      case "click":
        dispatch(setPersistTarget(true));
        break;
      case "enter":
        dispatch(setTarget(targetNum));
        break;
      case "exit":
        dispatch(clearTarget());
        break;
    }
  };

  return (
    <>
      <TitleTypo>맡은 역할</TitleTypo>
      <ParticipationBox
        onClick={() => handleMouseHover("click")}
        onMouseEnter={() => handleMouseHover("enter")}
        onMouseLeave={() => handleMouseHover("exit")}
      >
        <ul>
          {participation.map((item, index) => {
            return <SmallTypo key={index}>{item}</SmallTypo>;
          })}
        </ul>
      </ParticipationBox>
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
  cursor: pointer;

  &: hover {
    background: rgba(29, 128, 159, 0.2);
  }
`;

const SmallTypo = styled.li({
  fontFamily: "KBO",
  fontSize: "1.3rem",
  fontWeight: 500,
  borderRadius: "1rem",
  margin: "0.5rem 0",
  transitionDuration: "0.5s",
});

export default ProjectParticipate;
