import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "store";

type SingleTechStack = {
  name: string;
  src: string;
  isMine: boolean;
};

type ProjectStacksProps = {
  title: string;
  contents: SingleTechStack[];
  targetNum: number;
};

function ProjectStacks(props: ProjectStacksProps) {
  const { title, contents, targetNum } = props;
  const isTarget =
    useSelector((state: RootState) => state.hoverSlice.target) === targetNum;
  return (
    <RowFlexBox>
      <TitleTypo>{title}</TitleTypo>
      <div>
        {contents.map((content) => {
          const { name, src, isMine } = content;
          return (
            <TechStackImg
              src={src}
              alt={name}
              key={name}
              style={{
                transform:
                  isMine && isTarget ? "translate3d(0px, -20px, 0)" : "",
                background: isMine && isTarget ? "rgba(29, 128, 159, 0.2)" : "",
                borderRadius: isMine ? "50%" : "",
              }}
            />
          );
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
  font-family: BlackHanSans, sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  text-align: start;
  color: #222;
`;

const TechStackImg = styled.img({
  width: "4rem",
  height: "4rem",
  marginRight: "0.5rem",
  transitionDuration: "0.5s",
});

export default ProjectStacks;
