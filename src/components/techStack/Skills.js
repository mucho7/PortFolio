import styled from "styled-components";
import BlackHanSans from "../../assets/fonts/BlackHanSans-Regular.ttf";
import { front, back, commnu, versionControl } from "../../assets/images";

function Skills() {
  const skillOptions = [
    { name: "Frontend", src: front },
    { name: "Backend", src: back },
    { name: "Commnunity", src: commnu },
    { name: "Version Control", src: versionControl },
  ];

  return (
    <SkillSection>
      <TitleSection>
        <TitleTypo>SKILLS</TitleTypo>
      </TitleSection>
      <SkillContainer>
        {skillOptions.map((item, index) => {
          const { name, src } = item;
          return (
            <SkillItemBox key={index}>
              <SkillNameTypo>{name}</SkillNameTypo>
              <SkillImg src={src} />
            </SkillItemBox>
          );
        })}
      </SkillContainer>
    </SkillSection>
  );
}

const SkillSection = styled.div`
  padding: 4rem 2rem;
  margin: 0 auto;
  background: #f9c51d;

  height: 50rem;
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

  color: black;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: black;
  line-height: 1.5;
`;

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  height: calc(100% - (7.5rem + 1px));
`;

const SkillItemBox = styled.div`
  color: #f4623a;
  flex-shrink: 0;
  width: auto;
  padding: 1.5rem;
  margin: 0 auto 2rem;
  border-radius: 1rem;
  background-color: #fff;
`;

const SkillNameTypo = styled(TitleTypo)`
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #ccc;
  font-weight: 700;
  font-size: 1.5rem;
  color: #f4623a;
  font-family: Noto Sans KR, sans-serif;
`;

const SkillImg = styled.img`
  max-width: 15rem;
`;

export default Skills;
