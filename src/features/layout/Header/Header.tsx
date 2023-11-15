import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import AdbIcon from "@mui/icons-material/Adb";
import { Typography, Box } from "@mui/material";
import { HeaderNav } from "./HeaderNav";
import { useNavigate } from "react-router-dom";
import HeaderButtons from "./HeaderButtons";

const pages = ["Categories", "Products", "Pricing", "Blog"];

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="fixed" sx={{ width: "100%" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => {
              navigate("/home");
            }}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Team 3
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <HeaderNav pages={pages} />
          </Box>

          <HeaderButtons pages={pages} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;