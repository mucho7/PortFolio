import Slider from "react-slick";

import styled from "styled-components";
import { marked } from "marked";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BlackHanSans from "../../assets/fonts/BlackHanSans-Regular.ttf";
import { ArrowBackIos, ArrowForwardIos, Title } from "@mui/icons-material";
import React from "react";

function ProjectCarousel(params) {
  const { images } = params;

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIos style={{ fontSize: "32px", color: "#000" }} />
      </div>
    );
  };

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIos style={{ fontSize: "32px", color: "#000" }} />
      </div>
    );
  };

  const StyledSlider = styled(Slider)`
    width: 50%;
    height: auto;
  `;

  const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 66.6666%;
  `;

  const Image = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
  `;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <StyledSlider {...settings}>
      {images.map((image, index) => {
        return (
          <ImageWrapper>
            <Image src={image} alt={index} key={index} />
          </ImageWrapper>
        );
      })}
    </StyledSlider>
  );
}

function ProjectDetail(params) {
  const { content } = params;
  const MarkdownWrapper = styled.div`
    font-family: sans-serif;
    font-size: 16px;
    line-height: 1.5;
  `;

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
          <RowFlexBox
            key={index}
            style={{ justifyContent: "start", alignItems: "center" }}
          >
            <TitleTypo
              style={{ textAlign: "start", fontSize: 24, width: "30%" }}
            >
              {item.name}
            </TitleTypo>
            <SmallTypo
              style={{
                textAlign: "start",
                fontSize: 16,
                fontWeight: 200,
                width: "70%",
                alignSelf: "center",
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
      <RowFlexBox>
        <ProjectCarousel images={images} />
        <ColFlexBox>
          <ProjectDetail content={content} />
          <HrLine />
          <ProjectDescript descript={descript} />
        </ColFlexBox>
      </RowFlexBox>
    </TemplateBox>
  );
}

const TemplateBox = styled.div`
  padding: 3rem;
  margin: 0 auto 2rem;
  border-radius: 1rem;
  background-color: #fff;
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
  padding-bottom: 0.5rem;
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
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

const ColFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  margin-left: 5rem;
  width: 100%;
`;

const HrLine = styled.hr`
  height: 2px;
  border: 0;
  background-color: #dee2e6;
  margin: 1rem 0;
`;

export { ProjectContent };
