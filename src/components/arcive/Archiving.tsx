// import { useEffect, useRef } from "react";
// import { useDispatch } from "react-redux";

// import { changeRef } from "store/containerRefSlice";
import ArchiveBox from "./ArchiveBox";

import styled from "styled-components";
import { githubButton, velog } from "assets/images";

function Archiving() {
  // const dispatch = useDispatch();
  // const archiveRef = useRef<HTMLDivElement>(null);

  const archiveInfos = [
    {
      name: "velog",
      src: velog,
      url: "https://velog.io/@kimjih94",
      overview: "공부 및 지식 공유 목적의 블로그입니다.",
      detail: [
        "스스로 공부하며 깨달은 것을 정리하고 기록",
        "웹 개발자가 되기 위해 공부한 지식 정리",
        "겪었던 문제를 공유하여 동료와 함께 발전",
      ],
    },
    {
      name: "GitHub",
      src: githubButton,
      url: "https://github.com/mucho7",
      overview: "소스 코드 저장소입니다.",
      detail: [
        "알고리즘을 풀었던 코드",
        "과거 프로젝트, 토이 프로젝트의 코드",
        "SSAFY 내부에서 진행했던 프로젝트의 코드",
      ],
    },
  ];

  // useEffect(() => {
  //   const targetRef = archiveRef.current ? archiveRef.current.offsetTop : 0;
  //   dispatch(changeRef({ target: "archiveRef", value: targetRef }));
  // }, [dispatch, archiveRef]);

  return (
    // <ArchiveSection ref={archiveRef}>
    <ArchiveSection>
      <TitleSection>
        <TitleTypo>ARCHIVING</TitleTypo>
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

  font-family: 'BlackHanSans';
  z-index: 1;
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
    height: 45rem;
    padding: 0;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export default Archiving;
