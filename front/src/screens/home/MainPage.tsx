import SharedSection from "../../components/shared/sharedSection";
import Homeheader from "../../components/home/Homeheader/Homeheader";
import RaceOutline from "../../components/home/Hombody/RaceOutline";
import RacingPlace from "../../components/home/Homefooter/RacingPlace";

export default function MainPage() {
  return (
    <SharedSection className="flex flex-col gap-20 h-full bg-main_3 bg-cover bg-no-repeat filter pb-32">
      <Homeheader />
      <RaceOutline />
      <RacingPlace />
    </SharedSection>
  );
}
