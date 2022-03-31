import Link from "next/link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";

import useAuth from "../hooks/useAuth";

function NavBar() {
  const { isAuthenticated, logout, user } = useAuth();

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

          <nav>
            {isAuthenticated && (
              <Link
                variant="button"
                color="text.primary"
                href="#"
                sx={{ my: 1, mx: 1.5 }}
              >
                {user.email}
              </Link>
            )}
          </nav>

          {/* {!isAuthenticated && ( */}
          <>
            <Link href="/login" passHref={true}>
              <Button variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                Login
              </Button>
            </Link>

            <Link href="/register" passHref={true}>
              <Button variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                Register
              </Button>
            </Link>
            <Link href="/surveys" passHref={true}>
              <Button variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                Surveyd
              </Button>
            </Link>
            <Link href="/surveys/1" passHref={true}>
              <Button variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                Surveyd 1
              </Button>
            </Link>
            <Link href="/admin" passHref={true}>
              <Button variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                Admin
              </Button>
            </Link>
            <Link href="/admin/show" passHref={true}>
              <Button variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                Admin Show
              </Button>
            </Link>
            <Link href="/abc" passHref={true}>
              <Button variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                Error page
              </Button>
            </Link>
          </>
          {/* )} */}

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
