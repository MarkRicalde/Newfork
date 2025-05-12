import { AppBar, Toolbar, Typography, Button, Avatar, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const { user, loading, signInWithGoogle, logout } = useAuth(); // Use the custom hook

  // If loading, show a spinner
  if (loading) {
    return (
      <AppBar position="static">
        <Toolbar>
          <CircularProgress color="inherit" />
        </Toolbar>
      </AppBar>
    );
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Newfork
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        {user ? (
          <Button color="inherit" component={Link} to="/add-recipe">
            Submit Recipe
          </Button>
        ) : null}

        {user ? (
          <>
            <Avatar src={user.photoURL || ""} sx={{ width: 32, height: 32, ml: 2 }} />
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <Button color="inherit" onClick={signInWithGoogle}>
            Login with Google
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
