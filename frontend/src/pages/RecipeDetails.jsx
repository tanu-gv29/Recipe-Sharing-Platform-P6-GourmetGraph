// import { useParams } from "react-router-dom";
// import { recipes } from "../data/recipes"; 
// import { Container, Grid2, Typography, Card, CardMedia } from "@mui/material";
// import "../App.css"; 

// const RecipeDetails = () => {
//   const { id } = useParams();
//   const recipe = recipes.find((r) => r.id === parseInt(id));

//   if (!recipe) {
//     return <Typography variant="h4" textAlign="center">Recipe Not Found!</Typography>;
//   }

//   return (
//     <Container className="recipe-details">
//       <Grid2 container spacing={4} className="recipe-details-grid">
        
//         <Grid2 item xs={12} md={5}>
//           <Card className="recipe-card">
//             <CardMedia
//               component="img"
//               image={recipe.image}
//               alt={recipe.name}
//               className="recipe-image"
//             />
//           </Card>
//         </Grid2>

        
//         <Grid2 item xs={12} md={7} className="recipe-content">
//           <Typography variant="h3" className="recipe-title">{recipe.name}</Typography>
//           <Typography variant="h5" className="recipe-subtitle">Ingredients:</Typography>
//           <Typography variant="body1" className="recipe-text">{recipe.ingredients.join(", ")}</Typography>

//           <Typography variant="h5" className="recipe-subtitle">Instructions:</Typography>
//           {recipe.instructions.map((step, index) => (
//             <Typography key={index} variant="body1" className="recipe-step">➤ {step}</Typography>
//           ))}
//         </Grid2>
//       </Grid2>
//     </Container>
//   );
// };

// export default RecipeDetails;


import { useParams } from "react-router-dom";
import { recipes } from "../data/recipes"; // Import centralized recipes data
import { Container, Grid2, Typography, Card, CardMedia } from "@mui/material";
import "../App.css"; // Import CSS file

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return (
      <Typography variant="h4" textAlign="center">
        Recipe Not Found!
      </Typography>
    );
  }

  return (
    <Container
      className="recipe-details"
      sx={{
        maxWidth: "1000px",  // Increased container width
        width: "100%",
        padding: "20px",
        background: "white",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        textAlign: "center",
        margin: "auto",      // Center horizontally
        mt: 4,               // Top margin
        // Remove overflowY and maxHeight to allow full expansion:
        // overflowY: "auto",
        // maxHeight: "90vh"
      }}
    >
      <Grid2 container spacing={4} className="recipe-details-grid">
        {/* Left: Recipe Image */}
        <Grid2 item xs={12} md={5}>
          <Card className="recipe-card">
            <CardMedia
              component="img"
              image={recipe.image}
              alt={recipe.name}
              className="recipe-image"
            />
          </Card>
        </Grid2>

        {/* Right: Recipe Details */}
        <Grid2 item xs={12} md={7} className="recipe-content" sx={{ textAlign: "left" }}>
          <Typography variant="h3" className="recipe-title">
            {recipe.name}
          </Typography>
          
          <Typography variant="h5" className="recipe-subtitle" sx={{ mt: 2 }}>
            Instructions:
          </Typography>
          {recipe.ingredients.map((ingredient, idx) => (
            <Typography key={idx} variant="body1" className="recipe-text">
              • {ingredient}
            </Typography>
          ))}

          {/* <Typography variant="h5" className="recipe-subtitle" sx={{ mt: 3 }}>
            Instructions:
          </Typography>
          {recipe.instructions.map((step, index) => (
            <Typography key={index} variant="body1" className="recipe-step" sx={{ mt: 1 }}>
              ➤ {step}
            </Typography>
          ))} */}
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default RecipeDetails;

