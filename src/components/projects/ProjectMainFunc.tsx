import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { setPersistTarget, setTarget } from "store/hoverTargetSlice";

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
  const dispatch = useDispatch();
  const { mainFunc, targetNum } = params;
  const isTarget =
    useSelector((state: RootState) => state.hoverSlice.target) === targetNum;

  const onToggleClickHandler = () => {
    if (isTarget) {
      dispatch(setTarget(0));
      dispatch(setPersistTarget(false));
    } else {
      dispatch(setTarget(targetNum));
      dispatch(setPersistTarget(true));
    }
  };

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
      <ParticipateMobileButton
        style={{ display: window.innerWidth > 1200 ? "none" : "" }}
        onClick={onToggleClickHandler}
      >
        맡은 역할 보기
      </ParticipateMobileButton>
    </RowFlexBox>
  );
}

const RowFlexBox = styled.div`
  position: relative;
  display: flex;
  justify-content: start;
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
  width: fit-content;
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

const ParticipateMobileButton = styled.button`
  position: absolute;
  left: 0;
  top: 0;

  padding: 0.5rem;

  font-size: 1.2rem;
  font-family: KBO;
  color: white;
  background: black;
  border: none;
  border-radius: 1rem;

  cursor: pointer;
  transition-duration: 1s;

  &: hover {
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.2);
  }
`;

export default ProjectMainFunc;
