import {useLocation} from "react-router-dom";
export default function AboutHorse() {
  let location = useLocation();
  console.log(location.state);
  const aboutHorse = {
    hrName: location.state.hrName, //말이름
    hrNo: location.state.hrNo, //말번호
    birthday: location.state.birthday, //말생일
    localName: location.state.name, //출생지
    sex: location.state.sex, //성별
    rank: location.state.rank, //말 등급
    meet: location.state.meet, //시행경마장명
    chaksunT: location.state.chaksunT, //통산착순상금
    hrLastAmt: location.state.hrLastAmt, //말도입가
    faHrName: location.state.faHrName, //부마명 아빠말
    faHrNo: location.state.faHrNo, //부마번
    moHrName: location.state.moHrName, // 모마명 엄마말
    moHrNo: location.state.moHrNo, // 모마번
    ord1CntT: location.state.ord1CntT, // 통산1착회수
    ord1CntY: location.state.ord1CntY, // 최근 1년 1착회수
    ord2CntT: location.state.ord2CntT, //통산 2착회수
    ord2CntY: location.state.ord2CntY, // 최근 1년 2착회수
    ord3CntT: location.state.ord3CntT, //통산 3착회수
    ord3CntY: location.state.ord3CntY, // 최근 1년 2착회수
    owName: location.state.owName, //마주명
    owNo: location.state.owNo, //마주번호
    rating: location.state.rating, //레이팅 레이팅이란 경주에 출전하여 보여준 경주마의 경주능력에 따라 경주마의 능력을 수치화한 경주마 능력평가 지수로 이해할 수 있습니다. 경마에 있어서 레이팅은 경주마가 그간 거둔 경주성적에 따라 일반적으로 1∼140 구간에서 결정되며, 상위등급 경주마일수록 레이팅이 높습니다.
    rcCntT: location.state.rcCntT, //통산총출주회수
    rcCntY: location.state.rcCntY, //최근1년총출주회수
    trName: location.state.trName, //조교사명 경주를 할 수 있도록 경주마를 훈련시키고 마필의 경주능력을 향상시킬 수 있도록 사육·관리한다.
    trNo: location.state.trNo, //조교사번호
  };
  return (
    <div>
      <h1>im the horse</h1>
      <h1>{aboutHorse.hrName}</h1>
    </div>
  );
}
