import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import backgroundImage from "./img1.jpeg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        //backgroundImage: "url('C:\\Users\\TANUSHRI\\Recipe-sharing-platform\\Recipe-sharing-platform-main\\src\\assets\\img1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "20px",
        // boxShadow: "inset 0 0 100px rgba(0,0,0,0.5),"
        
      }}
    >
      <Typography variant="h2" fontWeight="bold" sx={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
      Welcome to GourmetGraph – Where Every Dish Tells a Story!
      </Typography>
      <Typography variant="h5" mt={2} maxWidth="600px" sx={{ textShadow: "1px 1px 3px rgba(0,0,0,0.7)" }}>
      Savor, Share, and Inspire – One Recipe at a Time!
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        sx={{ mt: 4, padding: "10px 20px", fontSize: "18px"}}
        onClick={() => navigate("/add-recipe")}
      >
        Cook up a Mastepiece
      </Button>
    </Box>
  );
};

export default Home;











// import { Container, Typography } from "@mui/material";

// const Home = () => {
//   return (
//     <Container>
//       <Typography variant="h3" textAlign="center" mt={5}>
//         Welcome to the Recipe Sharing Platform!
//       </Typography>
//       <Typography variant="h6" textAlign="center" mt={2}>
//         Share, explore, and create amazing recipes.
//       </Typography>
//     </Container>
//   );
// };

// export default Home;
