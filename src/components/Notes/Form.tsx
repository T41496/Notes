import { ChangeEvent, FC, useContext, useRef, useState } from "react";
import { Box, ClickAwayListener, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { v4 as uuid } from "uuid";
import { MainContext } from "../../context/mainProvider";
import { INote } from "../../@types/INote";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: auto;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
  border-color: #e0e0e0;
  width: 600px;
  border-radius: 8px;
  min-height: 30px;
  padding: 10px 15px;
`;

const defaultNote: INote = {
  id: "",
  heading: "",
  text: "",
};

const Form: FC = () => {
  const [showTextField, setShowTextField] = useState<boolean>(false);
  const [newNote, setNewNote] = useState<INote>(defaultNote);
  const { setNotes } = useContext(MainContext);
  const containerRef = useRef<any>();

  // Действие клика мыши на любое место после ввода
  const handleClickAway = () => {
    setShowTextField(false);
    containerRef.current.style.minheight = "30px";
    if (newNote.heading || newNote.text)
      setNotes((prevArr) => [newNote, ...prevArr]);
    setNewNote({ ...defaultNote, id: uuid() });
  };

  // Действие на поле ввода заметки
  const onTextAreaClick = () => {
    setShowTextField(true);
    if (containerRef.current) containerRef.current.style.minheight = "70px";
  };

  // Ввод текста
  const onTextChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => setNewNote({ ...newNote, [e.target.name]: e.target.value });
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Container ref={containerRef}>
        {showTextField && (
          <TextField
            placeholder="Введите заголовок"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            style={{ marginBottom: 10 }}
            onChange={(e) => onTextChange(e)}
            name="heading"
            value={newNote.heading}
          />
        )}
        <TextField
          placeholder="Заметка..."
          multiline
          maxRows={Infinity}
          variant="standard"
          InputProps={{ disableUnderline: true }}
          onClick={onTextAreaClick}
          onChange={(e) => onTextChange(e)}
          name="text"
          value={newNote.text}
        />
      </Container>
    </ClickAwayListener>
  );
};

export default Form;
