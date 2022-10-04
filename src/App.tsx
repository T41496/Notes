import "./App.css";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import { useContext, useState } from "react";
import Drawer from "@mui/material/Drawer";
import { NavList } from "./components/NavList/NavList";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { DeleteNotes } from "./pages/Deleted";
import { MainContext } from "./context/mainProvider";

export const App = () => {
  const [open, setOpen] = useState<boolean>(false);
  const onOpenMenu = () => setOpen((val) => !val);
  const { setSearch } = useContext(MainContext);
  const toggleDrawer = (open: boolean) => {
    setOpen(open);
    setSearch("");
  };
  return (
    <Box style={{ display: "flex", width: "100%" }}>
      <Router>
        <HeaderBar onOpenMenu={onOpenMenu} />
        <Drawer open={open} onClose={() => toggleDrawer(false)}>
          <NavList toggleDrawer={toggleDrawer} />
        </Drawer>
        <Box style={{ width: "100%" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/delete" element={<DeleteNotes />} />
          </Routes>
        </Box>
      </Router>
    </Box>
  );
};
