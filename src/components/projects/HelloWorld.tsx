import ProjectTemplate from "./ProjectTemplate";
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
} from "assets/images";

function HelloWorld() {
  const data = {
    title: "유저 참여형 식단 플랫폼 지옥뷔페",
    info: "23년 상반기 (SSAFY 6인 프로젝트)",
    content:
      "**AI를 활용해 먹은 량을 측정하는 구내식당 플랫폼**입니다. 음식물 쓰레기로 인해 발생하는 경제적 / 환경적 손실을 줄이고자 기획한 프로젝트입니다.\n\n**사용자와 매니저에게 각각 모바일과 데스크탑 웹**을 제공하여 UIUX적인 측면에서 접근성을 높이고자 했습니다. 업무의 양이 많아 기존에 사용해봤던 **React**와 **styled-components**를 활용해서 프로젝트를 진행했습니다",
    url: "https://github.com/mucho7/backupSpecialProject",
    descript: [
      {
        name: "주요기능",
        content:
          "AI 식사 기록, AI 그림인식으로 캐릭터에게 선물주기, AI 얼굴 인식을 활용한 게임, 커뮤니티, 사용자 / 영양사 통계, 영양사 일괄 등록",
      },
      // {
      //   name: "Github",
      //   content: "https://github.com/mucho7/backupSpecialProject",
      // },
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

  return <ProjectTemplate data={data} />;
}

export default HelloWorld;
