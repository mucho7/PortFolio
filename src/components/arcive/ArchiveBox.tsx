import styled from "styled-components";

type ArchiveBoxProps = {
  info: {
    name: string;
    src: string;
    url: string;
    overview: string;
    detail: string[];
  };
};

function ArchiveBox(props: ArchiveBoxProps) {
  const { name, src, url, overview, detail } = props.info;

  const onClickHandler = () => {
    window.open(url);
  };

  return (
    <ArchiveWrapper onClick={onClickHandler}>
      <RowFlex>
        <LogoImg src={src} alt={"dlalwl"} />
        <NameTypo>{name}</NameTypo>
      </RowFlex>
      <div>{url.slice(8)}</div>
      <OvTypo>{overview}</OvTypo>
      {detail.map((item, index) => {
        return <DesTypo key={index}>{item}</DesTypo>;
      })}
    </ArchiveWrapper>
  );
}

const ArchiveWrapper = styled.div`
  width: 22rem;
  height: 16rem;
  padding: 2rem;
  background: white;

  border-radius: 2rem;
  cursor: pointer;
  transition-duration: 0.5s;

  &: hover {
    color: white;
    background: #f9c51d;
    transform: translate3d(0, -20px, 0);
  }
`;

const LogoImg = styled.img`
  width: 3rem;
  height: 3rem;

  margin-right: 1rem;
`;

const RowFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  margin-bottom: 1rem;
`;

const StyleForTypo = `
  position: relative;
  font-weight: 500;

  font-family: noto-sans;
  
  `;

const NameTypo = styled.div`
  ${StyleForTypo}
  font-size: 2rem;
  font-weight: 1000;
`;

const OvTypo = styled.div`
  ${StyleForTypo}
  font-size: 1.2rem;
  font-weight: 600;
  margin: 1rem 0;
`;

const DesTypo = styled.li`
  ${StyleForTypo}
  margin: 1rem 0;
`;

export default ArchiveBox;
