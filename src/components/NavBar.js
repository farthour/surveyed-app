import {
  Typography,
  GlobalStyles,
  CssBaseline,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";
import Link from "next/link";
import { useContext } from "react";

import { useAuth } from "../contexts/AuthContext";

function NavBar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Company name
          </Typography>

          {!isAuthenticated && (
            <>
              <Link href="/login">
                <Button variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                  <a>Login</a>
                </Button>
              </Link>

              <Link href="/register">
                <Button variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                  <a>Register</a>
                </Button>
              </Link>
            </>
          )}

          {isAuthenticated && (
            <Button
              variant="outlined"
              sx={{ my: 1, mx: 1.5 }}
              onClick={() => logout()}
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
