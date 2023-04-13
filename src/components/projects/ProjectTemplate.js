import Slider from "react-slick";

import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BlackHanSans from "../../assets/fonts/BlackHanSans-Regular.ttf";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

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

  //   const ImgBox =

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => {
        return (
          <div key={index}>
            <img src={image} alt={index} />
          </div>
        );
      })}
    </Slider>
  );
}

function ProjectDescript(params) {
  const { descript } = params;
  return <SmallTypo>{descript}</SmallTypo>;
}

function ProjectContent(params) {
  const { title, content, descript, images } = params.data;
  return (
    <TemplateBox>
      <TitleTypo>{title}</TitleTypo>
      <ProjectCarousel images={images} />
      <SmallTypo>{content}</SmallTypo>
      <ProjectDescript descript={descript} />
    </TemplateBox>
  );
}

const TemplateBox = styled.div`
  padding: 3rem;
  margin: 0 auto 2rem;
  border-radius: 1rem;
  background-color: #fff;
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
  padding-bottom: 0.5rem;
  font-family: BlackHanSans, sans-serif;
  font-weight: 400;
  font-size: 2.5rem;
  color: #222;
  text-align: center;
`;

const SmallTypo = styled.div`
  ${StyleForTypo}
  font-size: 1.2rem;
  font-weight: 800;
  font-family: "Noto Sans KR", sans-serif;
  white-space: pre-wrap;

  color: #212529;
`;

export { ProjectContent };
