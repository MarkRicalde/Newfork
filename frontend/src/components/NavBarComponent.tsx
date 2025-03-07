import { AppBar, Toolbar, Typography, Button, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { signInWithGoogle, logout, auth } from "../firebase/firebase";
import { useState, useEffect } from "react";
import { onAuthStateChanged, User } from "firebase/auth";

const Navbar = () => {
  const [user, setUser] = useState<User | null>(null);

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

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
        ) : (<></>)}


        
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
