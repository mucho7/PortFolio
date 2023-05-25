import { marked } from "marked";

import GitButton from "./GitButton";
import ProjectCarousel from "./ProjectCarousel";
import ProjectMainFunc from "./ProjectMainFunc";
import ProjectStacks from "./ProjectStacks";
import ProjectParticipate from "./ProjectParticipate";

import styled from "styled-components";
import { Grid } from "@mui/material";

type SingleTechStack = {
  name: string;
  src: string;
  isMine: boolean;
};

type TechStackList = {
  title: string;
  contents: SingleTechStack[];
};

interface ProjectTemplateProps {
  data: {
    title: string;
    info: string;
    content: string;
    mainFunc: string[];
    techStack: TechStackList[];
    images: string[];
    url: string;
  };
}

function ProjectTemplate(params: ProjectTemplateProps) {
  const { title, info, content, techStack, images, url, mainFunc } =
    params.data;

  return (
    <TemplateBox>
      <TitleTypo>{title}</TitleTypo>
      <InfoTypo>{info}</InfoTypo>
      <Grid container style={{ alignItems: "center" }}>
        <ProjectCarousel images={images} />
        <Grid item lg={1}></Grid>
        <Grid item xs={12} xl={6}>
          <ColFlexBox>
            <HrLine />
            <ProjectParticipate participation={""} />
            <HrLine />
            <ProjectDetail
              dangerouslySetInnerHTML={{ __html: marked(content) }}
            />
            <HrLine />
            <ProjectMainFunc mainFunc={mainFunc ? mainFunc : [""]} />
            {techStack.map((item) => {
              const { title, contents } = item;
              return (
                <ProjectStacks title={title} contents={contents} key={title} />
              );
            })}
            <GitButton url={url} />
          </ColFlexBox>
        </Grid>
      </Grid>
    </TemplateBox>
  );
}

const TemplateBox = styled.div`
  padding: 3rem;
  margin: 0 auto 2rem;
  border-radius: 1rem;
  background-color: #fff;
`;

const ProjectDetail = styled.div`
  width: 100%;
  max-width: 1200px;
  font-family: KBO;
  font-size: 18px;
  line-height: 1.5;
`;

const styleForTypo = `
  position: relative;
  font-weight: 400;

  font-family: 'BlackHanSans';
  z-index: 1;
`;

const TitleTypo = styled.div`
  ${styleForTypo}
  font-family: BlackHanSans, sans-serif;
  font-weight: 400;
  font-size: 2.5rem;
  color: #222;
  text-align: center;
`;

const InfoTypo = styled.div`
  ${styleForTypo}
  margin-bottom: 2rem;
  font-weight: 400;
  font-size: 1rem;
  color: #6c757d;
  text-align: center;
  opacity: 0.8;
`;

const ColFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  width: 100%;
`;

const HrLine = styled.hr`
  height: 2px;
  border: 0;
  background-color: #dee2e6;
  margin: 1rem 0;
`;

export default ProjectTemplate;
