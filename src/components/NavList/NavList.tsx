import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import {
  DeleteOutlineOutlined as Delete,
  LightbulbOutlined as Light,
} from "@mui/icons-material";
import { INavListItems } from "../../@types/INavListItems";

// Сайдбар с опциями "Заметки", "Корзина"
export const NavList = ({
  toggleDrawer,
}: {
  toggleDrawer: (val: boolean) => void;
}) => {
  const navList: INavListItems[] = [
    { name: "Заметки", icon: <Light />, path: "/" },
    { name: "Корзина", icon: <Delete />, path: "delete" },
  ];

  return (
    <List style={{ paddingTop: "90px", paddingRight: "30px" }}>
      {navList.map((list) => (
        // С нажатием на опцию сайдбар закрывается
        <ListItem key={list.name} onClick={() => toggleDrawer(false)}>
          <Link
            style={{
              textDecoration: "none",
              display: "flex",
              color: "inherit",
              cursor: "pointer",
            }}
            // Переход на страницу опции
            to={list.path}
          >
            <ListItemIcon style={{ alignItems: "center" }}>
              {list.icon}
            </ListItemIcon>
            <ListItemText primary={list.name} />
          </Link>
        </ListItem>
      ))}
    </List>
  );
};
