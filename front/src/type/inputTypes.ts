export interface ILoginInputTypes {
  email: string;
  password: string;
}

export interface IJoinInputTypes {
  email: string;
  password: string;
  nickNm: string;
  pwCheck?: string;
}

export interface ISearchHorseTypes {
  currentPage: number;
  rows: number;
  horseName?: string;
  horseId?: string;
  locationNum: number;
}
