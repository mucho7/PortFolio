import { ProjectContent } from "./ProjectTemplate";
import {
  helloWorld1,
  helloWorld2,
  helloWorld3,
  helloWorld4,
  helloWorld5,
  helloWorld6,
  helloWorld7,
  helloWorld8,
  helloWorld9,
} from "../../assets/images";

function HelloWorld() {
  const data = {
    title: "유저 참여형 식단 플랫폼 지옥뷔페",
    info: "23년 상반기 (SSAFY 6인 프로젝트)",
    content: "content",
    descript: "descript",
    images: [
      helloWorld1,
      helloWorld2,
      helloWorld6,
      helloWorld7,
      helloWorld8,
      helloWorld9,
      helloWorld3,
      helloWorld5,
      helloWorld4,
    ],
  };

  return <ProjectContent data={data} />;
}

export default HelloWorld;
