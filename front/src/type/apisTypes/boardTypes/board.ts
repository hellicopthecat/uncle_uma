import {DocumentData} from "firebase/firestore";

export interface IBoardTypes {
  id: number;
  createdAt: {seconds: number; nanoseconds: number};
  updateAt: {seconds: number; nanoseconds: number};
  title: string;
  textContent: string;
  writer: string;
  edit: boolean;
}

export interface IBoardDataType extends DocumentData, IBoardTypes {}
