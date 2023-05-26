import ProjectTemplate from "./ProjectTemplate";

import {
  docker,
  ec2,
  firebase,
  jenkins,
  kafka,
  kurento,
  mongodb,
  nginx,
  opencv,
  pytorch,
  reactjs,
  s3,
  spring,
  springboot,
  styledcomponents,
  tensorflow,
  typescript,
} from "assets/images/techStack";

import {
  dongbang1,
  dongbang2,
  dongbang3,
  dongbang4,
  dongbang5,
  dongbang7,
  dongbang8,
  dongbang9,
  dongbang10,
  dongbang11,
} from "assets/images";

function DongBang() {
  const data = {
    targetNum: 4,
    title: "역검 연습을 위한 동방역검",
    info: "23년 상반기  (SSAFY 6인 프로젝트)",
    url: "https://github.com/mucho7/Dongbang",
    content:
      "면접 전 AI 역량검사를 시행하는 기업은 현재 1000개 이상이며 **개발자용 AI 역검** 이 출시되며 대비의 필요성이 커지고 있습니다.\n\n AI 역량검사는 연습을 통해 좋은 결과를 얻을 수 있지만 **지원자를 위한 서비스는 존재하지 않으며 시험 응시 후 정확한 결과를 확인하기 어렵습니다.**\n\n 동방역검은 AI 역량검사 지원자를 위한 서비스로 **AI 역량검사 전략게임을 연습하고 수치화된 게임 채점 결과와 영상 분석 결과를 제공**합니다.",
    participation: [
      "프론트엔드 팀장으로서 공통 컴포넌트 작성",
      "모든 프론트엔드 코드 리뷰 및 피드백",
      "4개의 게임 중 3개의 게임 구현",
      "랜덤하게 문제를 제공하는 알고리즘 구현",
      "TensorFlow.js를 활용해 응시자의 얼굴 인식 기능 구현",
      "시험 페이지를 HOC 디자인 패턴으로 작성",
      "Firebase를 활용한 회원 기능 구현",
      "Kurento와 관련된 코드 TS로 전환 및 리팩토링",
      "Wireframe, Flow chart, 시퀀스 다이어그램, 간트 차트 등 공용 문서 작성",
    ],
    mainFunc: [
      { content: "전략게임 연습", isMine: true },
      { content: "게임별 세부 통계", isMine: false },
      { content: "종합 분석", isMine: false },
      { content: "빅데이터 사주팔자", isMine: true },
      { content: "분석완료 알람기능", isMine: false },
    ],
    techStack: [
      {
        title: "Frontend",
        contents: [
          { name: "Typescript", src: typescript, isMine: true },
          { name: "React", src: reactjs, isMine: true },
          { name: "styled-components", src: styledcomponents, isMine: true },
          { name: "TensorFlow", src: tensorflow, isMine: true },
        ],
      },
      {
        title: "AI / ML",
        contents: [
          { name: "OpenCV", src: opencv, isMine: false },
          { name: "Pytorch", src: pytorch, isMine: false },
          { name: "TensorFlow", src: tensorflow, isMine: false },
        ],
      },
      {
        title: "Backend",
        contents: [
          { name: "Spring", src: spring, isMine: false },
          { name: "Spring Boot", src: springboot, isMine: false },
          { name: "Kurento", src: kurento, isMine: true },
        ],
      },
      {
        title: "Infra",
        contents: [
          { name: "AWS EC2", src: ec2, isMine: false },
          { name: "AWS S3", src: s3, isMine: false },
          { name: "Jenkins", src: jenkins, isMine: false },
          { name: "Firebase", src: firebase, isMine: true },
          { name: "NginX", src: nginx, isMine: false },
          { name: "Docker", src: docker, isMine: false },
          { name: "Kafka", src: kafka, isMine: false },
          { name: "MongoDB", src: mongodb, isMine: false },
        ],
      },
    ],
    images: [
      dongbang4,
      dongbang3,
      dongbang2,
      dongbang1,
      dongbang5,
      dongbang7,
      dongbang8,
      dongbang9,
      dongbang10,
      dongbang11,
    ],
  };

  return <ProjectTemplate data={data} />;
}

export default DongBang;
