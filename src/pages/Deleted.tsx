import { useContext } from "react";
import { MainContext } from "../context/mainProvider";
import { Container } from "../components/Container/Container";
import { INote } from "../@types/INote";

// Компонент Корзина,которая будет экспортирована в App
// Действия удаления и восстановления заметки
export const DeleteNotes = () => {
  const { deleteNotes, setDeleteNotes, setNotes } = useContext(MainContext);
  const restoreNote = (deleteNote: INote) => {
    setDeleteNotes(deleteNotes.filter((data) => data.id !== deleteNote.id));
    setNotes((prevArr) => [deleteNote, ...prevArr]);
  };
  const removeNote = (deleteNote: INote) =>
    setDeleteNotes(deleteNotes.filter((data) => data.id !== deleteNote.id));
  return (
    <Container
      type={"trash"}
      notes={deleteNotes}
      deleteFunc={removeNote}
      restoreFunc={restoreNote}
    />
  );
};
