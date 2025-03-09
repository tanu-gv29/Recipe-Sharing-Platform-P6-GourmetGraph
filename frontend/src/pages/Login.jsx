import { useState } from "react";
import { TextField, Button, Paper, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import smokyImage from "../pages/img1.jpeg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // ✅ Initialize navigation

  const handleLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/auth/login", {  
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        alert("Login successful!");
        localStorage.setItem("token", data.token); // ✅ Store token
        navigate("/"); // ✅ Redirect to Home.jsx
      } else {
        setError(data.message);
      }
    } catch (error) {
      setLoading(false);
      setError("Something went wrong. Please try again.");
      console.error("Login error:", error);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "150vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${smokyImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          borderRadius: 3,
          width: 400,
          backgroundImage: `url(${smokyImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          color="white"
          mb={3}
          fontFamily="Courier New, monospace"
        >
          Login
        </Typography>

        {error && (
          <Typography color="red" textAlign="center" mb={2}>
            {error}
          </Typography>
        )}

        <TextField
          label="Email"
          fullWidth
          margin="normal"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            backgroundColor: "white",
            borderRadius: 1,
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#A27B5C" },
              "&:hover fieldset": { borderColor: "#8B6751" },
              "&.Mui-focused fieldset": { borderColor: "#A27B5C" },
            },
          }}
        />

        <TextField
          label="Password"
          fullWidth
          margin="normal"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            backgroundColor: "white",
            borderRadius: 1,
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#A27B5C" },
              "&:hover fieldset": { borderColor: "#8B6751" },
              "&.Mui-focused fieldset": { borderColor: "#A27B5C" },
            },
          }}
        />

        <Button
          variant="contained"
          fullWidth
          onClick={handleLogin}
          disabled={loading}
          sx={{
            mt: 2,
            backgroundColor: "#A27B5C",
            "&:hover": { backgroundColor: "#8B6751" },
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;
