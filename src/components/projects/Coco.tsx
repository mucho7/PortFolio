import {
  docker,
  ec2,
  jenkins,
  nginx,
  reactjs,
  spring,
  springboot,
  styledcomponents,
} from "assets/images/techStack";
import ProjectTemplate from "./ProjectTemplate";
import { coco1, coco2, coco3, coco4 } from "assets/images";

function Coco() {
  const data = {
    targetNum: 1,
    title: "실시간 코드 공유 사이트 COCO",
    info: "23년 상반기 (SSAFY 6인 프로젝트)",
    url: "https://github.com/mucho7/COCO",
    content:
      "**코딩테스트를 준비하는 취준생을 위한 실시간 코드 공유 플랫폼**입니다. 기존 코딩 플랫폼의 단점을 보완하여 사용자 입장에서 더 빠르고 편리하게 공부를 진행할 수 있도록 돕기위해 기획한 서비스입니다.\n\n대규모 프로젝트에 처음으로 **React**를 도입하여 개인적으로 의미가 깊었습니다. **Redux**나 **styled-components**같은 기본적인 React라이브러리들을 활용했습니다.\n\n**WebRTC**를 활용하여 사용자들이 실시간 코드를 공유하고 코드를 그림으로 설명할 수 있게 **CanvasAPI**를 활용했습니다.\n\n다양한 **React Hook**에 대해 알 수 있었고 **MSA구조**를 처음으로 도입하며 배포에 대한 기본지식을 배울 수 있었습니다. 그 결과, SSAFY 내부평가에서 좋은 평가를 받아 **2등으로 우수상**을 수상했습니다.",
    participation: [
      "프론트엔드 팀장으로서 공통 컴포넌트 작성",
      "MonacoEditor를 활용하여 VS code와 동일한 형식의 webIDE 제공",
      "Markdown 형식의 게시글 작성 기능 구현",
      "코드 하이라이팅 기능을 통해 가독성 증진 ",
      "React가 처음인 팀원을 위해 스터디 조직",
      "Figma를 사용해 와이어프레임 작성",
    ],
    mainFunc: [
      { content: "실시간 코드 공유", isMine: false },
      { content: "Markdown형식의 게시글 본문", isMine: true },
      { content: "VS code형식의 코드 작성", isMine: true },
      { content: "코드 블록 하이라이팅", isMine: true },
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
        title: "Backend",
        contents: [
          { name: "Spring", src: spring, isMine: false },
          { name: "Spring Boot", src: springboot, isMine: false },
        ],
      },
      {
        title: "Infra",
        contents: [
          { name: "AWS EC2", src: ec2, isMine: false },
          { name: "Jenkins", src: jenkins, isMine: false },
          { name: "NginX", src: nginx, isMine: false },
          { name: "Docker", src: docker, isMine: false },
        ],
      },
    ],
    images: [coco1, coco2, coco3, coco4],
  };

  return <ProjectTemplate data={data} />;
}

export default Coco;
