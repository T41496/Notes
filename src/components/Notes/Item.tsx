import { Card, CardActions, CardContent, Typography } from "@mui/material";
import {
  DeleteOutlineOutlined as Delete,
  RestoreFromTrashOutlined as Restore,
} from "@mui/icons-material";
import { FC } from "react";
import { styled } from "@mui/material/styles";
import { IItem } from "../../@types/IItem";

//После ввода заголовка и содержания создаются заметки в виде отдельных карточек

const StyledCard = styled(Card)`
  width: 240px;
  border-radius: 8px;
  margin: 8px;
  border: 1px solid #e0e0e0;
  box-shadow: none;
`;
export const Item: FC<IItem> = ({ note, type, restoreFunc, deleteFunc }) => {
  return (
    <StyledCard>
      <CardContent>
        {/* название заметки */}
        <Typography>{note.heading}</Typography>
        {/* содержание заметки */}
        <Typography>{note.text}</Typography>
      </CardContent>
      {/* Иконки(+ их действия) корзины и восстановления в начальной странице и корзине */}
      <CardActions>
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
