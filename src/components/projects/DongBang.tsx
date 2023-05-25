import ProjectTemplate from "./ProjectTemplate";
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
    title: "역검 연습을 위한 동방역검",
    info: "23년 상반기  (SSAFY 6인 프로젝트)",
    url: "https://github.com/mucho7/",
    content:
      "면접 전 AI 역량검사를 시행하는 기업은 현재 1000개 이상이며 **개발자용 AI 역검** 이 출시되며 대비의 필요성이 커지고 있습니다.\n\n AI 역량검사는 연습을 통해 좋은 결과를 얻을 수 있지만 **지원자를 위한 서비스는 존재하지 않으며 시험 응시 후 정확한 결과를 확인하기 어렵습니다.**\n\n 동방역검은 AI 역량검사 지원자를 위한 서비스로 **AI 역량검사 전략게임을 연습하고 수치화된 게임 채점 결과와 영상 분석 결과를 제공**합니다.",
    mainFunc: [
      "전략게임 연습",
      "게임별 세부 통계",
      "종합 분석",
      "빅데이터 사주팔자",
    ],
    descript: [
      {
        name: "Frontend",
        content: "React, styled-components, Typescript, TensorFlow.js",
      },
      {
        name: "Backend",
        content:
          "Spring, Spring Boot, JPA, Kurento, FastAPI, SQLAlchemy, Spring Data Mongo, Spring Security",
      },
      {
        name: "Infra",
        content:
          "AWS EC2, AWS S3, Jenkins, Firebase, NginX, Docker, kafka, MySQL, MongoDB",
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

  // return <ProjectTemplate data={data} />;
}

export default DongBang;
