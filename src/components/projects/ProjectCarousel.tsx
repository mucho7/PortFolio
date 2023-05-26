import { useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { Grid } from "@mui/material";

function ProjectCarousel(params: { images: string[] }) {
  const { images } = params;
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Grid item xs={12}>
      <StyledSlider ref={sliderRef} {...settings}>
        {images.map((image, index) => {
          return <Image src={image} alt={"카루젤 그림"} key={index} />;
        })}
      </StyledSlider>
    </Grid>
  );
}

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
