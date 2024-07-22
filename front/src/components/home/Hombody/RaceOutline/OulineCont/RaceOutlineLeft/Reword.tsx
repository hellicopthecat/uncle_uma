import SharedTxt from "../../../../../shared/sharedTxt";
import CrownIcon from "../../../../../svg/Crown";
import InnerLayout from "../../OutlineLayout/innerLayout";

export default function Reword({
  chaksun1,
  chaksun2,
  chaksun3,
  chaksun4,
  chaksun5,
  buga1,
  buga2,
  buga3,
}: {
  chaksun1: number;
  chaksun2: number;
  chaksun3: number;
  chaksun4: number;
  chaksun5: number;
  buga1: number;
  buga2: number;
  buga3: number;
}) {
  return (
    <>
      <div className="flex items-center gap-3">
        <SharedTxt
          txtType="span"
          txt=""
          className="block w-2 h-5 bg-blue-400"
        />
        <SharedTxt txtType="h4" txt="상금" />
      </div>
      <div className="flex justify-between">
        <InnerLayout>
          <div>
            <div className="flex justify-center items-end">
              <SharedTxt txtType="h3" txt="1" className="relative z-[2]" />
              <div className="size-8 absolute z-[1]">
                <CrownIcon />
              </div>
            </div>
          </div>

          <SharedTxt
            txtType="h6"
            txt={`${String(chaksun1).slice(0, -4)} 만원`}
          />
          <div className="flex flex-col items-center">
            <SharedTxt txtType="h6" txt="부가상금" />
            {buga1 ? (
              <SharedTxt
                txtType="h6"
                txt={`${String(buga1).slice(0, -4)} 만원`}
              />
            ) : (
              <SharedTxt txtType="h6" txt="0원" />
            )}
          </div>
        </InnerLayout>

        <InnerLayout>
          <div>
            <div className="flex justify-center items-end">
              <SharedTxt txtType="h3" txt="2" className="relative z-[2]" />
              <div className="size-8 absolute z-[1]">
                <CrownIcon />
              </div>
            </div>
          </div>
          <SharedTxt
            txtType="h6"
            txt={`${String(chaksun2).slice(0, -4)} 만원`}
          />
          <div className="flex flex-col items-center">
            <SharedTxt txtType="h6" txt="부가상금" />
            {buga1 ? (
              <SharedTxt
                txtType="h6"
                txt={`${String(buga2).slice(0, -4)} 만원`}
              />
            ) : (
              <SharedTxt txtType="h6" txt="0원" />
            )}
          </div>
        </InnerLayout>

        <InnerLayout>
          <div>
            <div className="flex justify-center items-end">
              <SharedTxt txtType="h3" txt="3" className="relative z-[2]" />
              <div className="size-8 absolute z-[1]">
                <CrownIcon />
              </div>
            </div>
          </div>
          <SharedTxt
            txtType="h6"
            txt={`${String(chaksun3).slice(0, -4)} 만원`}
          />
          <div className="flex flex-col items-center">
            <SharedTxt txtType="h6" txt="부가상금" />
            {buga1 ? (
              <SharedTxt
                txtType="h6"
                txt={`${String(buga3).slice(0, -4)} 만원`}
              />
            ) : (
              <SharedTxt txtType="h6" txt="0원" />
            )}
          </div>
        </InnerLayout>

        <InnerLayout>
          <div>
            <div className="flex justify-center items-end">
              <SharedTxt txtType="h3" txt="4" className="relative z-[2]" />
              <div className="size-8 absolute z-[1]">
                <CrownIcon />
              </div>
            </div>
          </div>
          <SharedTxt
            txtType="h6"
            txt={`${String(chaksun4).slice(0, -4)} 만원`}
          />
        </InnerLayout>

        <InnerLayout>
          <div>
            <div className="flex justify-center items-end">
              <SharedTxt txtType="h3" txt="5" className="relative z-[2]" />
              <div className="size-8 absolute z-[1]">
                <CrownIcon />
              </div>
            </div>
          </div>
          <SharedTxt
            txtType="h6"
            txt={`${String(chaksun5).slice(0, -4)} 만원`}
          />
        </InnerLayout>
      </div>
    </>
  );
}
