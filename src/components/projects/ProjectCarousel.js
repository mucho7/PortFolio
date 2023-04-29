import { useRef } from "react";
import Slider from "react-slick";

import styled from "styled-components";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid } from "@mui/material";

function ProjectCarousel(params) {
  const { images } = params;
  const sliderRef = useRef();

  //   const PrevArrow = () => {
  //     const prev = () => {
  //       if (sliderRef.current) {
  //         sliderRef.current.slickPrev();
  //       }
  //     };
  //     return <ArrowBackIos style={styleForArr} onClick={prev} />;
  //   };

  //   const NextArrow = () => {
  //     const next = () => {
  //       if (sliderRef.current) {
  //         sliderRef.current.slickNext();
  //       }
  //     };
  //     return <ArrowForwardIos onClick={next} />;
  //   };

  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <StyledGrid item xs={12} lg={6}>
      <StyledSlider ref={sliderRef} {...settings}>
        {images.map((image, index) => {
          return <Image src={image} alt={index} key={index} />;
        })}
      </StyledSlider>
      {/* <PrevArrow />
      <NextArrow /> */}
    </StyledGrid>
  );
}

const StyledGrid = styled(Grid)({
  display: "flex",
  alignItems: "center",
});

const StyledSlider = styled(Slider)({
  maxWidth: "100%",
  marginBottom: "2rem",
});

const Image = styled.img({
  width: "100%",
  maxHeight: "40rem",
  objectFit: "contain",
});

export default ProjectCarousel;
