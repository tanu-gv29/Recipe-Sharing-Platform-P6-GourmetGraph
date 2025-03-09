import { useEffect, useState } from "react";
import { Container, Typography, Card, CardContent, Button, CardMedia, Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { recipes as existingRecipes } from "../data/recipes"; // Importing hardcoded recipes

const Recipes = () => {
  const [recipes, setRecipes] = useState(existingRecipes); 

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get("http://localhost:5000/recipes/all");
      setRecipes([...existingRecipes, ...response.data]); // Merge existing + backend recipes
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <Container sx={{ mt: 5, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Recipes
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {recipes.map((recipe, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 400, mx: "auto", boxShadow: 3 }}>
              <CardMedia component="img" height="200" image={recipe.image || recipe.dishImage || "/images/default.jpg"} alt={recipe.name || recipe.dishName} />
              <CardContent>
                <Typography variant="h6">{recipe.name || recipe.dishName}</Typography>
                <Box mt={2}>
                  <Button component={Link} to={`/recipe/${recipe.id}`} variant="contained">
                    View Recipe
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Recipes;
