import { INote } from "./INote";

export interface IItem {
  type: "trash" | "home" | "archive";
  note: INote;
  restoreFunc: (note: INote) => void;
  deleteFunc: (note: INote) => void;
}
