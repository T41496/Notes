import { useContext } from "react";
import { MainContext } from "../context/mainProvider";
import { Container } from "../components/Container/Container";
import { INote } from "../@types/INote";

// Компонент Корзина,которая будет экспортирована в App
// Действия удаления заметки
export const Home = () => {
  const { notes, setNotes, setrestoreNotes, setDeleteNotes } =
    useContext(MainContext);
  const restoreNote = (note: INote) => {
    setNotes(notes.filter((data) => data.id !== note.id));
    setrestoreNotes((prevArr) => [note, ...prevArr]);
  };
  const deleteNote = (note: INote) => {
    setNotes(notes.filter((data) => data.id !== note.id));
    setDeleteNotes((prevArr) => [note, ...prevArr]);
  };
  return (
    <Container
      type={"home"}
      notes={notes}
      restoreFunc={restoreNote}
      deleteFunc={deleteNote}
    />
  );
};
