import styled from "styled-components";
import BlackHanSans from "assets/fonts/BlackHanSans-Regular.ttf";

function ProjectMainFunc(params: { mainFunc: string[] }) {
  const { mainFunc } = params;
  return (
    <>
      <RowFlexBox>
        <TitleTypo>주요 기능</TitleTypo>
        <div>
          {mainFunc.map((item, index) => {
            return <SmallTypo key={index}>{item}</SmallTypo>;
          })}
        </div>
      </RowFlexBox>
    </>
  );
}

const RowFlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
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
  font-family: BlackHanSans, sans-serif;
  font-weight: 400;
  color: #222;
  text-align: start;
  font-size: 1.5rem;
  width: 100%;
`;

const SmallTypo = styled.li({
  fontFamily: "noto-sans",
  alignSelf: "normal",
  textAlign: "start",
  fontSize: 16,
  fontWeight: 200,
  width: "100%",
});

export default ProjectMainFunc;
