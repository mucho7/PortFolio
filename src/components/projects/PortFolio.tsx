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
      "꽤나 괜찮은 디자인",
      "다양한 이벤트 처리",
      "배워보고 싶은 기술의 연습장",
    ],
    techStack: [
      {
        title: "Frontend",
        contents: [
          { name: "Typescript", src: typescript, isMine: true },
          { name: "React", src: reactjs, isMine: true },
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
