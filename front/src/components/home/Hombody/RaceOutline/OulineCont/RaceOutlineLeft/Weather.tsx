import SharedTxt from "../../../../../shared/sharedTxt";
import {
  CloudyIcon,
  RainyIcon,
  SunnyIcon,
} from "../../../../../svg/WeatherIcons";

export default function Weather({weather}: {weather: string}) {
  function WeaterIcon({weatherStatus}: {weatherStatus: string}) {
    switch (weatherStatus) {
      case "맑음":
        return <SunnyIcon />;
      case "흐림":
        return <CloudyIcon />;
      case "비":
        return <RainyIcon />;
      default:
        return <CloudyIcon />;
    }
  }
  return (
    <div className="flex items-center gap-5">
      <div className="size-8">
        <WeaterIcon weatherStatus={weather} />
      </div>
      <div className="">
        <SharedTxt txtType="h5" txt="날씨" />
        <SharedTxt txtType="h5" txt={!weather ? "업데이트중" : weather} />
      </div>
    </div>
  );
}
