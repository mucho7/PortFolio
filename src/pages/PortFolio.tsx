import { HeaderNavbar } from "components/navbar";
import { Info } from "components/info";
import { Skills } from "components/techStack";
import { Projects } from "components/projects";
import { Archiving } from "components/arcive";

function PortFolio() {
  return (
    <>
      <HeaderNavbar />
      <Info />
      <Skills />
      <Projects />
      <Archiving />
    </>
  );
}

export default PortFolio;
