import { useState, useEffect, useRef } from "react";

import styled from "styled-components";
import { front, back, commnu, versionControl } from "../../assets/images";
import { useDispatch } from "react-redux";
import { changeRef } from "store/containerRefSlice";

function Skills() {
  const dispatch = useDispatch();
  const skillRef = useRef<HTMLDivElement>(null);
  const [innerSize, setInnerSize] = useState(window.innerWidth);

  const skillOptions = [
    { name: "Frontend", src: front },
    { name: "Backend", src: back },
    { name: "Commnunity", src: commnu },
    { name: "Version Control", src: versionControl },
  ];

  useEffect(() => {
    const handleResize = () => setInnerSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const targetRef = skillRef.current ? skillRef.current.offsetTop : 0;
    dispatch(changeRef({ target: "skillRef", value: targetRef }));
  }, [skillRef, dispatch]);

  return (
    <SkillSection innerSize={innerSize} ref={skillRef}>
      <TitleSection>
        <TitleTypo>SKILLS</TitleTypo>
      </TitleSection>
      <SkillContainer innerSize={innerSize}>
        {skillOptions.map((item, index) => {
          const { name, src } = item;
          return (
            <SkillItemBox key={index}>
              <SkillNameTypo>{name}</SkillNameTypo>
              <SkillImg src={src} alt={"기술스택"} />
            </SkillItemBox>
          );
        })}
      </SkillContainer>
    </SkillSection>
  );
}

const SkillSection = styled.div<{ innerSize: number }>`
  padding: 4rem 2rem 0rem 2rem;
  margin: 0 auto;
  background: #f9c51d;

  height: ${(props) =>
    props.innerSize >= 900
      ? "60rem"
      : props.innerSize >= 600
      ? "70rem"
      : "auto"};
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
  font-family: 'BlackHanSans';
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

const SkillContainer = styled.div<{ innerSize: number }>`
  padding: ${(props) => (props.innerSize > 1200 ? "0 15%" : "0")};
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
