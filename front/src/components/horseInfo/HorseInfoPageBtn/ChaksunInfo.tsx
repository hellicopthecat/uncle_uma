import {useRecoilValue} from "recoil";
import {IHorseInfo} from "../../../type/apiTypes";
import {chaksunSlideAtom} from "../../../atoms/chaksunSlideAtom";
import SharedTxt from "../../shared/sharedTxt";

export default function ChaksunInfo({
  horse,
  index,
}: {
  horse: Pick<
    IHorseInfo,
    | "ord1CntT"
    | "ord1CntY"
    | "ord2CntT"
    | "ord2CntY"
    | "ord3CntT"
    | "ord3CntY"
    | "rcCntT"
    | "rcCntY"
  >;
  index: number;
}) {
  const chaksun = useRecoilValue(chaksunSlideAtom);
  return (
    <div
      className="absolute bottom-24 bg-white px-2 w-full left-0 right-0 "
      style={{display: chaksun === index ? "flex" : "none"}}
    >
      <div className="animate-chaksunSlide xl:animate-chaksunSlideXl  flex items-center justify-center gap-10">
        <div className="flex items-center gap-2 ">
          <div className="flex items-center gap-2">
            <SharedTxt
              txtType="span"
              txt=""
              className="size-2 rounded-full bg-blue-400"
            />
            <SharedTxt
              txtType="p"
              txt="통산1착수"
              className="text-nowrap text-lg font-semibold"
            />
          </div>
          <SharedTxt
            txtType="p"
            txt={`${horse.ord1CntT} 회`}
            className="self-end text-lg"
          />
        </div>
        <div className="flex items-center gap-2 ">
          <div className="flex items-center gap-2">
            <SharedTxt
              txtType="span"
              txt=""
              className="size-2 rounded-full bg-blue-400"
            />
            <SharedTxt
              txtType="p"
              txt="통산2착수"
              className="text-nowrap text-lg font-semibold"
            />
          </div>
          <SharedTxt
            txtType="p"
            txt={`${horse.ord2CntT} 회`}
            className="self-end text-lg"
          />
        </div>
        <div className="flex items-center gap-2 ">
          <div className="flex items-center gap-2">
            <SharedTxt
              txtType="span"
              txt=""
              className="size-2 rounded-full bg-blue-400"
            />
            <SharedTxt
              txtType="p"
              txt="통산3착수"
              className="text-nowrap text-lg font-semibold"
            />
          </div>
          <SharedTxt
            txtType="p"
            txt={`${horse.ord3CntT} 회`}
            className="self-end text-lg"
          />
        </div>
        <div className="flex items-center gap-2 ">
          <div className="flex items-center gap-2">
            <SharedTxt
              txtType="span"
              txt=""
              className="size-2 rounded-full bg-blue-400"
            />
            <SharedTxt
              txtType="p"
              txt="통산출주수"
              className="text-nowrap text-lg font-semibold"
            />
          </div>
          <SharedTxt
            txtType="p"
            txt={`${horse.rcCntT} 회`}
            className="self-end text-lg"
          />
        </div>
        <div className="flex items-center gap-2 ">
          <div className="flex items-center gap-2">
            <SharedTxt
              txtType="span"
              txt=""
              className="size-2 rounded-full bg-blue-400"
            />
            <SharedTxt
              txtType="p"
              txt="최근1년1착수"
              className="text-nowrap text-lg font-semibold"
            />
          </div>
          <SharedTxt
            txtType="p"
            txt={`${horse.ord1CntY} 회`}
            className="self-end text-lg"
          />
        </div>
        <div className="flex items-center gap-2 ">
          <div className="flex items-center gap-2">
            <SharedTxt
              txtType="span"
              txt=""
              className="size-2 rounded-full bg-blue-400"
            />
            <SharedTxt
              txtType="p"
              txt="최근1년2착수"
              className="text-nowrap text-lg font-semibold"
            />
          </div>
          <SharedTxt
            txtType="p"
            txt={`${horse.ord2CntY} 회`}
            className="self-end text-lg"
          />
        </div>
        <div className="flex items-center gap-2 ">
          <div className="flex items-center gap-2">
            <SharedTxt
              txtType="span"
              txt=""
              className="size-2 rounded-full bg-blue-400"
            />
            <SharedTxt
              txtType="p"
              txt="최근1년3착수"
              className="text-nowrap text-lg font-semibold"
            />
          </div>
          <SharedTxt
            txtType="p"
            txt={`${horse.ord3CntY} 회`}
            className="self-end text-lg"
          />
        </div>
        <div className="flex items-center gap-2 ">
          <div className="flex items-center gap-2">
            <SharedTxt
              txtType="span"
              txt=""
              className="size-2 rounded-full bg-blue-400"
            />
            <SharedTxt
              txtType="p"
              txt="최근1년출주수"
              className="text-nowrap text-lg font-semibold"
            />
          </div>
          <SharedTxt
            txtType="p"
            txt={`${horse.rcCntY} 회`}
            className="self-end text-lg"
          />
        </div>
      </div>
    </div>
  );
}
