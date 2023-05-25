import ProjectTemplate from "./ProjectTemplate";

import {
  docker,
  ec2,
  jenkins,
  kotlin,
  nginx,
  pytorch,
  reactjs,
  s3,
  spring,
  springboot,
  styledcomponents,
  tensorflow,
} from "assets/images/techStack";

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
    mainFunc: [
      "AI 식사 기록",
      "AI 그림인식으로 캐릭터에게 선물주기",
      "AI 얼굴 인식을 활용한 게임",
      "커뮤니티",
      "사용자 개인 / 영양사 통계",
      "관리자의 회원 일괄 등록",
    ],
    techStack: [
      {
        title: "Frontend",
        contents: [
          { name: "React", src: reactjs, isMine: true },
          { name: "styled-components", src: styledcomponents, isMine: true },
        ],
      },
      {
        title: "AI / ML",
        contents: [
          // { name: "OpenCV", src: , isMine: true },
          { name: "Pytorch", src: pytorch, isMine: false },
          { name: "TensorFlow", src: tensorflow, isMine: false },
        ],
      },
      {
        title: "Backend",
        contents: [
          { name: "Spring", src: spring, isMine: false },
          { name: "Spring Boot", src: springboot, isMine: false },
          { name: "Kotlin", src: kotlin, isMine: false },
        ],
      },
      {
        title: "Infra",
        contents: [
          { name: "AWS EC2", src: ec2, isMine: false },
          { name: "AWS S3", src: s3, isMine: false },
          { name: "Jenkins", src: jenkins, isMine: false },
          { name: "NginX", src: nginx, isMine: false },
          { name: "Docker", src: docker, isMine: false },
        ],
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
