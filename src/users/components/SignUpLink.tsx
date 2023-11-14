import { Grid, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignUpLink = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link
            variant="body2"
            onClick={() => {
              navigate("/signin");
            }}
          >
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default SignUpLink;
