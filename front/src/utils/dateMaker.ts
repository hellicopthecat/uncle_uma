export const dateMaker = (debut: number | string) => {
  if (debut === "-") {
    return "아직 데뷔하지 않았습니다.";
  }
  const year = String(debut).substring(0, 4);
  const month = String(debut).substring(4, 6);
  const date = String(debut).substring(6, 8);
  return `${year}년 ${month}월 ${date}일`;
};
