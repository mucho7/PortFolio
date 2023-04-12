import styled from "styled-components";
import BlackHanSans from "../../assets/fonts/BlackHanSans-Regular.ttf";

function Projects() {
  return (
    <ProjectSection>
      <TitleSection>
        <TitleTypo>PROJECTS</TitleTypo>
      </TitleSection>
      <SkillContainer>
        {/* 프로젝트는 따로 컴포넌트를 만들어서 넣자 */}
      </SkillContainer>
    </ProjectSection>
  );
}

const ProjectSection = styled.div`
  padding: 4rem 2rem;
  margin: 0 auto;
  background: #1d809f;

  height: auto;
`;

const TitleSection = styled.div`
  display: table;
  position: relative;
  margin: 0 auto 3rem;
`;

const StyleForTypo = `
      position: relative;
      font-weight: 400;
    
      z-index: 1;
    
      @font-face {
        font-family: 'BlackHanSans';
        src: url(${BlackHanSans})
    }
    `;

const TitleTypo = styled.div`
  ${StyleForTypo}
  width: auto;

  font-size: 3rem;
  font-family: "BlackHanSans", sans-serif;

  color: white;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #cccccc;
  line-height: 1.5;
`;

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  height: calc(100% - (7.5rem + 1px));
`;

export default Projects;
