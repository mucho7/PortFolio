import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux/";

import { changeRef } from "store/containerRefSlice";

import styled from "styled-components";
import Coco from "./Coco";
import HelloWorld from "./HelloWorld";
import DongBang from "./DongBang";
import PortFolio from "./PortFolio";

function Projects() {
  const dispatch = useDispatch();
  const projectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targetRef = projectRef.current ? projectRef.current.offsetTop : 0;
    dispatch(changeRef({ target: "projectRef", value: targetRef }));
  }, [projectRef, dispatch]);

  return (
    <ProjectSection ref={projectRef}>
      <TitleSection>
        <TitleTypo>PROJECTS</TitleTypo>
      </TitleSection>
      {/* <DongBang />
      <PortFolio />
      <HelloWorld /> */}
      <Coco />
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
  font-family: 'BlackHanSans';
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

export default Projects;
