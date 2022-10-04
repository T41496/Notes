import { INote } from "./INote";

export interface IContainer {
  type: "trash" | "home" | "archive";
  notes: INote[];
  restoreFunc: (note: INote) => void;
  deleteFunc: (note: INote) => void;
}
