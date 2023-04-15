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
    descript: [
      {
        name: "주요기능",
        content:
          "AI 식사 기록, AI 그림인식으로 캐릭터에게 선물주기, AI 얼굴 인식을 활용한 게임, 커뮤니티, 사용자 / 영양사 통계, 영양사 일괄 등록",
      },
      {
        name: "Github",
        content: "https://github.com/mucho7/backupSpecialProject",
      },
      {
        name: "AI / ML",
        content: "OpenCV, Pytorch, TensorFlow",
      },
      {
        name: "Frontend",
        content: "React, styled-components",
      },
      {
        name: "Backend",
        content: "Spring, Spring Boot, Kotlin, S3",
      },
      {
        name: "Infra",
        content: "AWS EC2, Jenkins, NginX, Docker",
      },
    ],
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
