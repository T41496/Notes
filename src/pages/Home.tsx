import { useContext } from "react";
import { MainContext } from "../context/mainProvider";
import { Container } from "../components/Container/Container";
import { INote } from "../@types/INote";

// Компонент Корзина,которая будет экспортирована в App
// Действие удалния заметки
export const Home = () => {
  const { notes, setNotes, setDeleteNotes } = useContext(MainContext);
  const restoreNote = () => {};
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
