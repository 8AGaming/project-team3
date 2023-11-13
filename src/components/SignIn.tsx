import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAppDispatch } from "../store/hooks";
import { setPageName } from "../pages/pageNameSlice";

const Copyright = () => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ mt: 8, mb: 4 }}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="data:image/png;base64,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"
      >
        Team 3
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              {/* אפשרות להוספת פונקצית של שיחזור סיסמה במקרה של שיכחה */}
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                {/* קישור לעמוד הרשמה */}
                <Link
                  href="#"
                  variant="body2"
                  onClick={() => {
                    dispatch(setPageName("signup"));
                  }}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
};
