import { Dispatch, SetStateAction } from "react";
import { INote } from "./INote";

export interface IState {
  search: string;
  notes: INote[];
  restoreNotes: INote[];
  deleteNotes: INote[];
  setSearch: Dispatch<SetStateAction<string>>;
  setNotes: Dispatch<SetStateAction<INote[]>>;
  setrestoreNotes: Dispatch<SetStateAction<INote[]>>;
  setDeleteNotes: Dispatch<SetStateAction<INote[]>>;
}
