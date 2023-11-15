import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HeaderSignInButton from "./HeaderSignInButton";

interface HeaderButtonsProps {
  pages: string[];
}

const HeaderButtons: React.FC<HeaderButtonsProps> = ({ pages }) => {
  const navigate = useNavigate();

  return (
    <Typography
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={() => {
              if (page === "Categories") navigate("/categories");
              if (page === "Products") navigate("/products");
            }}
            sx={{ my: 2, mx: 1, color: "white", display: "inline-block" }}
          >
            {page}
          </Button>
        ))}
      </Box>
      <Box sx={{ marginLeft: "auto" }}>
        <HeaderSignInButton />
      </Box>
    </Typography>
  );
};

export default HeaderButtons;
