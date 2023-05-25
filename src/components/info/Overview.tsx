import styled from "styled-components";
import DeskSetUp from "../../assets/images/deskSetUp.jpg";

function Overview() {
  return (
    <ShortPR>
      <HandmadeFilter />
      <LargerTypo>
        - 김민찬 - <br /> 웹 프론트엔드 개발자 포트폴리오
      </LargerTypo>
      <StyledHr />
      <SmallTypo>안녕하세요.</SmallTypo>
      <SmallTypo>LTS를 사랑하는 개발자 김민찬입니다.</SmallTypo>
    </ShortPR>
  );
}

const ShortPR = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-image: url("${DeskSetUp}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 589px;
`;

const HandmadeFilter = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  background: rgba(114, 92, 78, 0.7);
  width: 100%;
  height: 100%;
`;

const StyleForTypo = `
  position: relative;
  font-weight: 400;
  text-align: center;

  font-family: 'BlackHanSans';
  z-index: 1;
`;

const LargerTypo = styled.div`
  ${StyleForTypo}
  font-size: 3rem;
  font-family: "BlackHanSans", sans-serif;

  color: white;
`;

const SmallTypo = styled.div`
  ${StyleForTypo}
  font-size: 1.2rem;
  font-weight: 800;
  white-space: pre-wrap;

  color: rgba(255, 255, 255, 0.6);
`;

const StyledHr = styled.hr`
  position: relative;

  width: 3.25rem;
  height: 0;
  margin: 1.5rem auto;
  border: none;
  border-top: 0.2rem solid #f4623a;
  opacity: 1;

  z-index: 1;
`;

export default Overview;
