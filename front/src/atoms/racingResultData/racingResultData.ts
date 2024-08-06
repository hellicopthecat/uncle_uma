import {MutableRefObject} from "react";
import {atom} from "recoil";

export const racingSlideRef =
  atom<MutableRefObject<HTMLDivElement | null> | null>({
    key: "racingSlideRef",
    default: null,
  });
export const slideWidth = atom({
  key: "slideWidth",
  default: 0,
});
