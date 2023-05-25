import ProjectTemplate from "./ProjectTemplate";
import { githubButton, portfolio1 } from "assets/images";

import { reactjs, styledcomponents, typescript } from "assets/images/techStack";

function PortFolio() {
  const data = {
    title: "포트폴리오",
    info: "23년 상반기",
    url: "https://github.com/mucho7/PortFolio",
    content:
      "포트폴리오를 만들어 채용 담당자에게 **내 장점과 역량을 한 눈에** 보여주고자 기획한 페이지입니다.\n\n",
    mainFunc: [
      "전략게임 연습",
      "게임별 세부 통계, 종합 분석",
      "진짜 빅데이터 사주팔자",
    ],
    techStack: [
      {
        title: "Frontend",
        contents: [
          { name: "React", src: reactjs, isMine: true },
          { name: "styled-components", src: styledcomponents, isMine: true },
          { name: "Typescript", src: typescript, isMine: true },
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
