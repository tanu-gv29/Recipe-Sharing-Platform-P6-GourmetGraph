import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Recipes />} />
        <Route path="/recipe/:id" element={<RecipeDetails key={window.location.pathname} />} />
      </Routes>
    </Router>
  );
}

export default App;




// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";  // Navbar remains common for all pages
// import Recipes from "./pages/Recipes";
// import RecipeDetails from "./pages/RecipeDetails";
// import Login from "./pages/Login";
// import AddRecipe from "./pages/AddRecipe";
// import Profile from "./pages/Profile";

// function App() {
//   return (
//     <Router>
//       {/* The Navbar is placed outside Routes to be common for all pages */}
//       <Navbar /> 
      
//       <Routes>
     
//         <Route path="/" element={<Recipes />} />
//         <Route path="/recipes" element={<Recipes />} />
//         <Route path="/recipe/:id" element={<RecipeDetails />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/add-recipe" element={<AddRecipe />} />
//         <Route path="/profile" element={<Profile />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;










