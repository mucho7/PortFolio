import { useSelector } from "react-redux";
import { RootState } from "store";

import styled from "styled-components";

type SingleMainFunc = {
  content: string;
  isMine: boolean;
};

type MainFuncProps = {
  mainFunc: SingleMainFunc[];
  targetNum: number;
};

function ProjectMainFunc(params: MainFuncProps) {
  const { mainFunc, targetNum } = params;
  const isTarget =
    useSelector((state: RootState) => state.hoverSlice.target) === targetNum;

  return (
    <RowFlexBox>
      <TitleTypo>주요 기능</TitleTypo>
      <ul>
        {mainFunc.map((item, index) => {
          const { content, isMine } = item;
          return (
            <SmallTypo
              key={index}
              style={{
                transform:
                  isMine && isTarget ? "translate3d(20px, 0px, 0)" : "",
                background: isMine && isTarget ? "rgba(29, 128, 159, 0.2)" : "",
              }}
            >
              {content}
            </SmallTypo>
          );
        })}
      </ul>
    </RowFlexBox>
  );
}

const RowFlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  & > *:first-child {
    flex-basis: 30%;
  }

  & > *:last-child {
    flex-basis: 70%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > *:first-child,
    & > *:last-child {
      flex-basis: 100%;
    }
  }
`;

const TitleTypo = styled.div`
  font-family: KBO, sans-serif;
  font-weight: 1000;
  color: #222;
  text-align: start;
  font-size: 1.5rem;
  width: 100%;
`;

const SmallTypo = styled.li({
  width: "fit-content",
  fontFamily: "KBO",
  fontSize: "1.3rem",
  fontWeight: 500,
  borderRadius: "1rem",
  margin: "0.5rem 0",
  padding: "0.2rem 1rem",
  transitionDuration: "0.5s",
});

export default ProjectMainFunc;
