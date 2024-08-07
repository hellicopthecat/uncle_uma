import {atom} from "recoil";

export const searchHorsePaginationAtom = atom({
  key: "seachHorsePagination",
  default: 1,
});

export const searchHorseRowAtom = atom({
  key: "searchHorseRow",
  default: 100,
});

export const searchHorseMinPageAtom = atom({
  key: "searchHorseMinPage",
  default: 0,
});
export const searchHorseMaxPageAtom = atom({
  key: "searchHorseMaxPage",
  default: 10,
});

export const searchHorseEndPageAtom = atom({
  key: "searchHorseEndPage",
  default: 1,
});

export const searchHorseTotalPageAtom = atom({
  key: "searchHorseTotalPage",
  default: 1,
});
