import { ProjectContent } from "./ProjectTemplate";
import { coco1, coco2, coco3, coco4 } from "../../assets/images";

function Coco() {
  const data = {
    title: "실시간 코드 공유 사이트 COCO",
    content: "content",
    descript: "descript",
    images: [coco1, coco2, coco3, coco4],
  };

  return <ProjectContent data={data} />;
}

export default Coco;
