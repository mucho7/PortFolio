import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import { changeRef } from "store/containerRefSlice";
import ArchiveBox from "./ArchiveBox";

import styled from "styled-components";
import BlackHanSans from "../../assets/fonts/BlackHanSans-Regular.ttf";
import { GitHub } from "@mui/icons-material";

function Archiving() {
  const dispatch = useDispatch();
  const archiveRef = useRef<HTMLDivElement>(null);

  const archiveInfos = [
    { name: "GitHub", src: "", url: "", overview: "", detail: [] },
    { name: "velog", src: "", url: "", overview: "", detail: [] },
  ];

  useEffect(() => {
    const targetRef = archiveRef.current ? archiveRef.current.offsetTop : 0;
    dispatch(changeRef({ target: "archiveRef", value: targetRef }));
  }, []);

  return (
    <ArchiveSection ref={archiveRef}>
      <TitleSection>
        <TitleTypo>Archiving</TitleTypo>
      </TitleSection>
      <RowFlex>
        {archiveInfos.map((info, index) => {
          return <ArchiveBox key={index} info={info} />;
        })}
      </RowFlex>
    </ArchiveSection>
  );
}

const ArchiveSection = styled.div({
  background: "black",
  padding: "4rem 2rem",
  margin: "0 auto",

  height: "auto",
});

const TitleSection = styled.div`
  display: table;
  position: relative;
  margin: 0 auto 3rem;
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
  width: auto;

  font-size: 3rem;
  font-family: "BlackHanSans", sans-serif;

  color: white;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #cccccc;
  line-height: 1.5;
`;

const RowFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0 6%;

  @media (max-width: 1200px) {
    height: 65rem;
    padding: 0;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export default Archiving;
