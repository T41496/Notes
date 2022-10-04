import { Box, Grid } from "@mui/material";
import { FC, useContext } from "react";
import { IContainer } from "../../@types/IContainer";
import { styled } from "@mui/material/styles";
import { EmptyNotes } from "../Notes/EmptyNotes";
import Form from "../Notes/Form";
import { Item } from "../Notes/Item";
import { MainContext } from "../../context/mainProvider";
import { INote } from "../../@types/INote";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

export const Container: FC<IContainer> = ({
  type,
  notes,
  deleteFunc,
  restoreFunc,
}) => {
  // Поиск по содержанию и названию заметки
  const { search } = useContext(MainContext);
  const searchNotes: INote[] = search
    ? notes.filter(
        (note) =>
          note.text.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
          note.heading.toLowerCase().indexOf(search.toLowerCase()) > -1
      )
    : [];
  // Показ результата поиска если его есть
  const notesList: INote[] = search ? searchNotes : notes;

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        {type === "home" && <Form />}
        {/* Определение наличия заметок и показ соответвующего текста на странице */}
        {notesList.length === 0 && (
          <EmptyNotes
            title={
              type === "trash"
                ? "В корзине ничего нет."
                : "Здесь будут ваши заметки."
            }
          />
        )}
        {/* Показ созданных заметок */}
        <Grid container>
          {notesList.map((note) => (
            <Grid item key={note.id}>
              {type === "trash" && (
                <Item
                  type={"trash"}
                  note={note}
                  deleteFunc={deleteFunc}
                  restoreFunc={restoreFunc}
                />
              )}

              {type === "home" && (
                <Item
                  note={note}
                  deleteFunc={deleteFunc}
                  restoreFunc={restoreFunc}
                  type={"home"}
                />
              )}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
