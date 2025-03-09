import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";
import CreateRecipe from "./pages/CreateRecipe";
import Profile from "./pages/Profile";
import AddRecipe from "./pages/AddRecipe";

const AppRoutes = () => {
  return (
    <Router>
      {/* Navbar remains outside Routes, so it's visible on all pages */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/create-recipe" element={<CreateRecipe />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
