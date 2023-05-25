import styled from "styled-components";

type SingleTechStack = {
  name: string;
  src: string;
  isMine: boolean;
};

type ProjectStacksProps = {
  title: string;
  contents: SingleTechStack[];
};

function ProjectStacks(props: ProjectStacksProps) {
  const { title, contents } = props;

  return (
    <RowFlexBox>
      <TitleTypo>{title}</TitleTypo>
      <div>
        {contents.map((content) => {
          const { name, src, isMine } = content;
          return <TechStackImg src={src} alt={name} key={name} />;
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
});

export default ProjectStacks;
