import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(getFormattedTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function getFormattedTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#3f51b5",
        color: "white",
        padding: "10px 0",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="body2">
          © {new Date().getFullYear()} Team 3 | Local Time: {currentTime}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
