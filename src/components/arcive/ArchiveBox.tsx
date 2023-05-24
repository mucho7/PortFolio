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

  return (
    <ArchiveWrapper>
      <></>
    </ArchiveWrapper>
  );
}

const ArchiveWrapper = styled.div`
  width: 30rem;
  height: 30rem;
  background: white;

  border-radius: 2rem;
`;

export default ArchiveBox;
