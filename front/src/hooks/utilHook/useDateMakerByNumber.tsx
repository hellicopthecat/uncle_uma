import SharedTxt from "../../components/shared/sharedTxt";

export const useDateMakerByNumber = (dates: number, br = false) => {
  const year = new Date(dates).getFullYear();
  const month = String(new Date(dates).getMonth() + 1).padStart(2, "0");
  const date = new Date(dates).getDate();

  const hours = String(new Date(dates).getHours()).padStart(2, "0");
  const minutes = String(new Date(dates).getMinutes()).padStart(2, "0");
  const seconds = String(new Date(dates).getSeconds()).padStart(2, "0");

  return (
    <>
      <SharedTxt txtType="span" txt={`${year}.${month}.${date}.`} />
      {br && <br />}
      <SharedTxt txtType="span" txt={`${hours}:${minutes}:${seconds}`} />
    </>
  );
};
