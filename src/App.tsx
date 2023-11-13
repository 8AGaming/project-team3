import { Button } from "@mui/material";
import "./App.css";
import SignInPage from "./pages/SignInPage";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { setPageName } from "./pages/pageNameSlice";
import SignUpPage from "./pages/SignUpPage";

const App = () => {
  const pageName = useAppSelector((store) => store.pageName).pageName;
  const dispatch = useAppDispatch();
  if (pageName == "home")
    return (
      <>
        <Button
          onClick={() => {
            dispatch(setPageName("signin"));
          }}
        >
          Sign In
        </Button>
        <Button
          onClick={() => {
            dispatch(setPageName("signup"));
          }}
        >
          Sign Up
        </Button>
      </>
    );
  if (pageName == "signin") return <SignInPage />;
  if (pageName == "signup") return <SignUpPage />;
};

export default App;
