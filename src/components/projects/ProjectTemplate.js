import React from "react";

import ProjectCarousel from "./ProjectCarousel";

import styled from "styled-components";
import { marked } from "marked";
import BlackHanSans from "../../assets/fonts/BlackHanSans-Regular.ttf";
import { Grid } from "@mui/material";

function ProjectDetail(params) {
  const { content } = params;

  const Markdown = ({ content }) => {
    const html = marked(content);
    return <MarkdownWrapper dangerouslySetInnerHTML={{ __html: html }} />;
  };
  return <Markdown content={content} />;
}

function ProjectDescript(params) {
  const { descript } = params;
  return (
    <div>
      {descript.map((item, index) => {
        return (
          <RowFlexBox key={index}>
            <TitleTypo
              style={{
                textAlign: "start",
                fontSize: 24,
                width: "30%",
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
                width: "70%",
              }}
            >
              {item.content}
            </SmallTypo>
          </RowFlexBox>
        );
      })}
    </div>
  );
}

function ProjectContent(params) {
  const { title, info, content, descript, images } = params.data;
  return (
    <TemplateBox>
      <TitleTypo>{title}</TitleTypo>
      <InfoTypo>{info}</InfoTypo>
      <Grid container>
        <ProjectCarousel images={images} />
        <Grid item xs={12} lg={6}>
          <ColFlexBox>
            <ProjectDetail content={content} />
            <HrLine />
            <ProjectDescript descript={descript} />
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

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ColFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  margin-left: 1rem;
  width: 100%;
`;

const HrLine = styled.hr`
  height: 2px;
  border: 0;
  background-color: #dee2e6;
  margin: 1rem 0;
`;

export { ProjectContent };
