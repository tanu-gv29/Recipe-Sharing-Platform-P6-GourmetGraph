import { useState } from "react";
import { TextField, Button, Typography, Paper, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";  // ✅ For redirection
import axios from "axios";  // ✅ To send API requests
import smokyImage from "../pages/img1.jpeg";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();  // ✅ Hook to redirect to login

  const handleSignup = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:5000/auth/signup", {
        name,
        email,
        password,
      });

      alert(response.data.message);  // Show success message
      navigate("/login");  // ✅ Redirect to login page

    } catch (error) {
      setError(error.response?.data?.message || "Signup failed");
    }

    setLoading(false);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
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
          Sign Up
        </Typography>

        {error && (
          <Typography color="red" textAlign="center" mb={2}>
            {error}
          </Typography>
        )}

        <TextField
          label="Name"
          fullWidth
          margin="normal"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{
            backgroundColor: "white",
            borderRadius: 1,
          }}
        />

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
          }}
        />

        <Button
          variant="contained"
          fullWidth
          onClick={handleSignup}
          disabled={loading}
          sx={{
            mt: 2,
            backgroundColor: "#A27B5C",
            "&:hover": { backgroundColor: "#8B6751" },
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </Button>
      </Paper>
    </Box>
  );
};

export default Signup;
