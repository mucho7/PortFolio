import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import { Grid, Icon, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { changeRef } from "store/containerRefSlice";

type AboutMeProps = {
  infos: {
    name: string;
    value: string;
    // icon: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
      muiName: string;
    };
  }[];
};

function AboutMe(params: AboutMeProps) {
  const { infos } = params;
  const dispatch = useDispatch();
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targetRef = infoRef.current ? infoRef.current.offsetTop : 0;
    dispatch(changeRef({ target: "infoRef", value: targetRef }));
  }, [infoRef, dispatch]);

  return (
    <AboutMeContent ref={infoRef}>
      <TitleSection>
        <TitleTypo>ABOUT ME</TitleTypo>
      </TitleSection>
      <Grid container>
        {infos.map((info, index) => {
          const { name, value, icon } = info;
          return (
            <Grid item xs={12} md={4} key={index}>
              <AboutMeContentItem>
                <StyledIcon fontSize="large" component={icon} />
                <div>
                  <SmallTypo>{name}</SmallTypo>
                  <SmallTypo>{value}</SmallTypo>
                </div>
              </AboutMeContentItem>
            </Grid>
          );
        })}
      </Grid>
    </AboutMeContent>
  );
}

const AboutMeContent = styled.div`
  padding: 4rem 2rem;
  margin: 0 auto;
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
  z-index: 1;
`;

const TitleTypo = styled.div`
  ${StyleForTypo}
  width: auto;

  font-size: 3rem;
  font-family: "BlackHanSans", sans-serif;

  color: black;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #cccccc;
  line-height: 1.5;
`;

const AboutMeContentItem = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  padding-left: calc(50% - 6rem);
`;

const StyledIcon = styled(Icon)({
  width: "2rem",
  minWidth: "2rem",
  height: "2rem",
  marginTop: "0.2rem",
  marginRight: "2rem",
}) as typeof Icon;

const SmallTypo = styled.div`
  ${StyleForTypo}
  font-size: 1.2rem;
  font-weight: 800;
  font-family: KBO;
  white-space: pre-wrap;
  margin: 0.5rem 0;

  color: #212529;
`;

export default AboutMe;
