import Overview from "./Overview";
import AboutMe from "./AboutMe";
import {
  Person,
  CalendarToday,
  FmdGood,
  LocalPhone,
  Email,
  School,
} from "@mui/icons-material";

function Info() {
  const infos = [
    { name: "이름", value: "김민찬", icon: Person },
    { name: "생년월일", value: "94.08.04", icon: CalendarToday },
    { name: "주소지", value: "경기도 화성시", icon: FmdGood },
    { name: "연락처", value: "010-9957-3068", icon: LocalPhone },
    { name: "이메일", value: "ydjm1994@gmail.com", icon: Email },
    { name: "학력", value: "경북대학교", icon: School },
  ];
  return (
    <>
      <Overview />
      <AboutMe infos={infos} />
    </>
  );
}

export default Info;
