import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import { changeRef } from "store/containerRefSlice";

import { HeaderNavbar } from "components/navbar";
import { Info } from "components/info";
import { Skills } from "components/techStack";
import { Projects } from "components/projects";
import { Archiving } from "components/arcive";

function PortFolio() {
  const dispatch = useDispatch();
  const archiveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resetRef = () => {
      const targetRef = archiveRef.current ? archiveRef.current.offsetTop : 0;
      dispatch(changeRef({ target: "archiveRef", value: targetRef }));
    };

    window.addEventListener("resize", resetRef);

    return () => {
      window.removeEventListener("resize", resetRef);
    };
  }, [dispatch]);

  return (
    <>
      <HeaderNavbar />
      <Info />
      <Skills />
      <Projects />
      <div ref={archiveRef}>
        <Archiving />
      </div>
    </>
  );
}

export default PortFolio;
