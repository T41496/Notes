import {
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { alpha, styled } from "@mui/material/styles";
import logo from "../../assets/d.png";
import { useContext } from "react";
import { MainContext } from "../../context/mainProvider";

const Header = styled(AppBar)`
  background: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #c5c6c8;
  z-index: 1201;
`;

const Heading = styled(Typography)`
  font-size: 24px;
  margin-left: 25px;
  color: #444648;
`;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  background: "#F0F3F4",
  color: "#75797D",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  borderRadius: "10px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    "&:focus": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
      boxShadow: "2px 1px 20px 3px rgba(0, 0, 0, 0.3)",
      borderRadius: "10px",
    },
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));

export const HeaderBar = ({ onOpenMenu }: { onOpenMenu: () => void }) => {
  const { search, setSearch } = useContext(MainContext);
  const onSearch = (e: string) => setSearch(e);
  return (
    // Верхняя часть страницы с её названием и полем для поиска (Header)
    <Header>
      <Toolbar>
        <IconButton
          sx={{ marginRight: "20px" }}
          edge="start"
          onClick={onOpenMenu}
        >
          <Menu />
        </IconButton>

        <img src={logo} alt="logo" style={{ height: 40, width: 40 }} />
        <Heading>Notes 1.0 by Tony Wills</Heading>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Поиск"
            inputProps={{ "aria-label": "search" }}
            value={search}
            onChange={(e) => onSearch(e.currentTarget.value)}
          />
        </Search>
      </Toolbar>
    </Header>
  );
};

export default HeaderBar;
