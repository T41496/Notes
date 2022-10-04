import { useState, ChangeEvent } from "react";
import {
  Card,
  CardActions,
  Button,
  CardContent,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { IItem } from "../../@types/IItem";
import { FC } from "react";
import {
  DeleteOutlineOutlined as Delete,
  RestoreFromTrashOutlined as Restore,
} from "@mui/icons-material";
import { INote } from "../../@types/INote";

// Управление карточками заметки

const StyledCard = styled(Card)`
  width: 240px;
  border-radius: 8px;
  margin: 8px;
  border: 1px solid #e0e0e0;
  box-shadow: none;
`;

export const Item: FC<IItem> = ({ note, type, restoreFunc, deleteFunc }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [note1, setNote1] = useState<INote>(note);

  // Редактор
  const handleEdit = () => {
    setIsEditable(!isEditable);
  };

  // Отображение изменений в заметке
  const onTextChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    console.log(e.target.value);
    setNote1({ ...note1, [e.target.name]: e.target.value });
  };

  return (
    // Карточки
    <StyledCard>
      <CardContent>
        <TextField
          id="standard-basic"
          disabled={!isEditable}
          value={note1.heading}
          name="heading"
          variant="standard"
          onChange={(e) => onTextChange(e)}
          onBlur={() => setIsEditable(false)}
        />
        <TextField
          id="standard-basic"
          disabled={!isEditable}
          value={note1.text}
          name="text"
          variant="standard"
          onChange={(e) => onTextChange(e)}
          onBlur={() => setIsEditable(false)}
        />
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleEdit}>
          Edit
        </Button>
        {type === "home" && (
          <>
            <Delete
              fontSize="small"
              onClick={() => deleteFunc(note)}
              style={{ cursor: "pointer" }}
            />
          </>
        )}

        {type === "trash" && (
          <>
            <Delete
              fontSize="small"
              style={{ marginLeft: "auto", cursor: "pointer" }}
              onClick={() => deleteFunc(note)}
            />
            <Restore
              fontSize="small"
              onClick={() => restoreFunc(note)}
              style={{ cursor: "pointer" }}
            />
          </>
        )}
      </CardActions>
    </StyledCard>
  );
};
