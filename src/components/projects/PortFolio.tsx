import ProjectTemplate from "./ProjectTemplate";
import { githubButton, portfolio1 } from "assets/images";

import {
  reactjs,
  redux,
  styledcomponents,
  typescript,
} from "assets/images/techStack";

function PortFolio() {
  const data = {
    targetNum: 3,
    title: "포트폴리오 웹 페이지 구현",
    info: "23년 상반기",
    url: "https://github.com/mucho7/PortFolio",
    participation: [
      "전체적인 페이지 레이아웃 설정",
      "JS로 만든 페이지를 TS로 Refactor",
      "포트폴리오가 필요한 다른 동료와 공유",
    ],
    content:
      "포트폴리오를 만들어 채용 담당자에게 **내 장점과 역량을 한 눈에** 보여주고자 기획한 페이지입니다.\n\n",
    mainFunc: [
      { content: "꽤나 괜찮은 디자인", isMine: true },
      { content: "다양한 이벤트 처리", isMine: true },
      { content: "배워보고 싶은 기술의 연습장", isMine: true },
    ],
    techStack: [
      {
        title: "Frontend",
        contents: [
          { name: "Typescript", src: typescript, isMine: true },
          { name: "React", src: reactjs, isMine: true },
          { name: "Redux", src: redux, isMine: true },
          { name: "styled-components", src: styledcomponents, isMine: true },
        ],
      },
      {
        title: "Infra",
        contents: [{ name: "Github Page", src: githubButton, isMine: true }],
      },
    ],
    images: [portfolio1],
  };

  return <ProjectTemplate data={data} />;
}

export default PortFolio;
