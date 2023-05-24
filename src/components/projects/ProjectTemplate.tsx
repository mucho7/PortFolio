import { marked } from "marked";

import ProjectCarousel from "./ProjectCarousel";
import BlackHanSans from "assets/fonts/BlackHanSans-Regular.ttf";
import GitButton from "./GitButton";

import styled from "styled-components";
import { Grid } from "@mui/material";

interface ProjectTemplateProps {
  data: {
    title: string;
    info: string;
    content: string;
    descript: Descript[];
    images: string[];
    url: string;
  };
}

interface Descript {
  name: string;
  content: string;
}

function ProjectDetail(params: { content: string }) {
  const { content } = params;
  return (
    <MarkdownWrapper dangerouslySetInnerHTML={{ __html: marked(content) }} />
  );
}

function ProjectDescript(params: { descript: Descript[]; url: string }) {
  const { descript, url } = params;
  return (
    <>
      {descript.map((item, index) => {
        return (
          <RowFlexBox key={index}>
            <TitleTypo
              style={{
                textAlign: "start",
                fontSize: 24,
                width: "100%",
              }}
            >
              {item.name}
            </TitleTypo>
            <SmallTypo
              style={{
                alignSelf: "normal",
                textAlign: "start",
                fontSize: 16,
                fontWeight: 200,
                width: "100%",
              }}
            >
              {item.content}
            </SmallTypo>
          </RowFlexBox>
        );
      })}
      <RowFlexBox>
        <TitleTypo
          style={{
            textAlign: "start",
            fontSize: 24,
            width: "100%",
          }}
        >
          Github
        </TitleTypo>
        <div>
          <GitButton url={url} />
        </div>
      </RowFlexBox>
    </>
  );
}

function ProjectTemplate(params: ProjectTemplateProps) {
  const { title, info, content, descript, images, url } = params.data;
  return (
    <TemplateBox>
      <TitleTypo>{title}</TitleTypo>
      <InfoTypo>{info}</InfoTypo>
      <Grid container style={{ alignItems: "center" }}>
        <ProjectCarousel images={images} />
        <Grid item xs={12} lg={6}>
          <ColFlexBox>
            <ProjectDetail content={content} />
            <HrLine />
            <ProjectDescript descript={descript} url={url} />
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

const MarkdownWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.5;
`;

const styleForTypo = `
  position: relative;
  font-weight: 400;

  z-index: 1;

  @font-face {
    font-family: 'BlackHanSans';
    src: url(${BlackHanSans})
}
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

const SmallTypo = styled.div`
  ${styleForTypo}
  font-size: 1.2rem;
  font-weight: 800;
  font-family: "Noto Sans KR", sans-serif;
  white-space: pre-wrap;

  color: #212529;
`;

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
