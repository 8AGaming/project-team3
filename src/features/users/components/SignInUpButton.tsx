import { Button } from "@mui/material";
import { FC } from "react";
import { SignInUpButtonInterface } from "../interfaces/SignInUpButtonInterface";

const SignInUpButton: FC<SignInUpButtonInterface> = ({ text, isValid }) => {
  return (
    <>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={!isValid}
      >
        {text}
      </Button>
    </>
  );
};

export default SignInUpButton;
