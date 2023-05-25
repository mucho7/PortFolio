import styled from "styled-components";

function ProjectMainFunc(params: { mainFunc: string[] }) {
  const { mainFunc } = params;
  return (
    <RowFlexBox>
      <TitleTypo>주요 기능</TitleTypo>
      <div>
        {mainFunc.map((item, index) => {
          return <SmallTypo key={index}>{item}</SmallTypo>;
        })}
      </div>
    </RowFlexBox>
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
  font-family: KBO, sans-serif;
  font-weight: 1000;
  color: #222;
  text-align: start;
  font-size: 1.5rem;
  width: 100%;
`;

const SmallTypo = styled.li({
  fontFamily: "KBO",
  fontSize: "1.1rem",
  fontWeight: 500,
  width: "100%",
  margin: "0.5rem 0",
});

export default ProjectMainFunc;
