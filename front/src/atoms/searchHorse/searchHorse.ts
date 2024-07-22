import {atom} from "recoil";

export const searchHorsePaginationAtom = atom({
  key: "seachHorsePagination",
  default: 1,
});

export const searchHorseRowAtom = atom({
  key: "searchHorseRow",
  default: 100,
});
