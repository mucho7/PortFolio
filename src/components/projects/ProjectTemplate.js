import styled from "styled-components";

function ProjectTemplate(params) {
  const { child } = params;
  return <TemplateBox>{child}</TemplateBox>;
}

const TemplateBox = styled.div`
  padding: 3rem;
  margin: 0 auto 2rem;
  border-radius: 1rem;
  background-color: #fff;
`;

export default ProjectTemplate;
