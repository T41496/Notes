import { createContext, ReactNode, useState } from "react";
import { IState } from "../@types/IState";
import { INote } from "../@types/INote";

const initialContext: IState = {
  search: "",
  notes: [],
  restoreNotes: [],
  deleteNotes: [],
  setNotes: (): void => {},
  setSearch: (): void => {},
  setRestoreNotes: (): void => {},
  setDeleteNotes: (): void => {},
};

export const MainContext = createContext<IState>(initialContext);

export const MainProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const [notes, setNotes] = useState<INote[]>([]);
  const [restoreNotes, setRestoreNotes] = useState<INote[]>([]);
  const [deleteNotes, setDeleteNotes] = useState<INote[]>([]);

  return (
    <MainContext.Provider
      value={{
        search,
        setSearch,
        notes,
        setNotes,
        restoreNotes,
        setRestoreNotes,
        deleteNotes,
        setDeleteNotes,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
