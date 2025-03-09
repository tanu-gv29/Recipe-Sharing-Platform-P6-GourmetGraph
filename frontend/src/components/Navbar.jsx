import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token")); // ✅ Initial check

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "rgba(0, 0, 0, 0.8)", // Transparent Dark Background
        backdropFilter: "blur(10px)", // Frosted Glass Effect
        padding: "10px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#ffcc00",
            textShadow: "1px 1px 3px rgba(255,204,0,0.8)",
          }}
        >
          GourmetGraph
        </Typography>

        {/* Navigation Links */}
        <Box>
          <Button component={Link} to="/" sx={{ color: "#ffffff", mx: 2 }}>
            Home
          </Button>
          <Button component={Link} to="/recipes" sx={{ color: "#ffffff", mx: 2 }}>
            Recipes
          </Button>
          <Button component={Link} to="/add-recipe" sx={{ color: "#ffffff", mx: 2 }}>
            Create Recipe
          </Button>
          <Button component={Link} to="/profile" sx={{ color: "#ffffff", mx: 2 }}>
            Profile
          </Button>
        </Box>

        {/* Authentication Buttons */}
        <Box>
          {isLoggedIn ? (
            <Button
              onClick={handleLogout}
              sx={{
                background: "#ff3d00",
                color: "#ffffff",
                mx: 1,
                fontWeight: "bold",
                "&:hover": { background: "#d32f2f" },
              }}
            >
              Logout
            </Button>
          ) : (
            <>
              <Button
                component={Link}
                to="/login"
                sx={{ color: "#ff9800", mx: 1, fontWeight: "bold" }}
                onClick={() => setIsLoggedIn(true)} // ✅ Update state instantly
              >
                Login
              </Button>
              <Button
                component={Link}
                to="/signup"
                sx={{
                  background: "#ff9800",
                  color: "#ffffff",
                  mx: 1,
                  fontWeight: "bold",
                  "&:hover": { background: "#e68900" },
                }}
              >
                Sign Up
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
