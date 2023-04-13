import { ProjectContent } from "./ProjectTemplate";
import { coco1, coco2, coco3, coco4 } from "../../assets/images";

function Coco() {
  const data = {
    title: "실시간 코드 공유 사이트 COCO",
    info: "23년 상반기 (SSAFY 6인 프로젝트)",
    content: "content",
    descript: "descript",
    images: [coco1, coco2, coco3, coco4],
  };

  return <ProjectContent data={data} />;
}

export default Coco;
