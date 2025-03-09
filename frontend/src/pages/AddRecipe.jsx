import React, { useState, useEffect } from "react";
import { TextField, Button, Paper, Box, Typography } from "@mui/material";
import axios from "axios";
import ReactFlow, { useNodesState, useEdgesState } from "reactflow";
import "reactflow/dist/style.css";

const AddRecipe = () => {
  const [dishName, setDishName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [stepInput, setStepInput] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const [dishImage, setDishImage] = useState(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    fetchUserRecipes();
  }, []);

  const fetchUserRecipes = async () => {
    try {
      const response = await axios.get("http://localhost:5000/recipes/my-recipes", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      if (response.data.length > 0) {
        const lastRecipe = response.data[0];
        setDishName(lastRecipe.dishName);
        setIngredients(lastRecipe.ingredients.join(", "));
        setNodes(
          lastRecipe.steps.map((step, index) => ({
            id: (index + 1).toString(),
            position: { x: 200, y: index * 100 },
            data: { label: `${step.step} (${step.time} min)` },
            type: "default",
          }))
        );
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleImageUpload = (event) => {
    setDishImage(event.target.files[0]);
  };

  const addStep = () => {
    if (!stepInput || !timeInput) return;
    const newNode = {
      id: (nodes.length + 1).toString(),
      position: { x: 200, y: nodes.length * 100 },
      data: { label: `${stepInput} (${timeInput} min)` },
      type: "default",
    };
    setNodes((prevNodes) => [...prevNodes, newNode]);
    setStepInput("");
    setTimeInput("");
  };

  const handleSaveRecipe = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log in to save recipes.");
      return;
    }

    const formattedSteps = nodes.map((node) => ({
      step: node.data.label.split(" (")[0],
      time: parseInt(node.data.label.match(/\d+/)[0]) || 0,
    }));

    const formData = new FormData();
    formData.append("dishName", dishName);
    formData.append("ingredients", ingredients);
    formData.append("steps", JSON.stringify(formattedSteps));
    if (dishImage) formData.append("dishImage", dishImage);

    try {
      const response = await axios.post("http://localhost:5000/recipes/add", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      alert(response.data.message);
    } catch (error) {
      console.error("Error saving recipe:", error.response?.data || error.message);
      alert("Failed to save recipe.");
    }
  };

  return (
    <Box sx={{ width: "94.5%", mt: 0, p: 3, background: "#1E1E1E", minHeight: "100vh" }}>
      <Typography variant="h4" textAlign="center" mb={3} fontWeight="bold" color="white">
        Add Your Recipe
      </Typography>

      <Paper sx={{ p: 3, mb: 3, background: "#4A4A4A" }}>
        <TextField fullWidth label="Dish Name" value={dishName} onChange={(e) => setDishName(e.target.value)} sx={{ mb: 2, background: "#D4A373" }} />
        <TextField fullWidth label="Ingredients (comma-separated)" value={ingredients} onChange={(e) => setIngredients(e.target.value)} sx={{ mb: 2, background: "#D4A373" }} />
      </Paper>

      <Paper sx={{ p: 3, mb: 3, background: "#3A3A3A", textAlign: "center" }}>
        <Typography variant="h6" mb={2} color="white">
          Add Your Dish Photo
        </Typography>
        <input type="file" accept="image/*" onChange={handleImageUpload} id="dish-image-upload" style={{ display: "none" }} />
        <label htmlFor="dish-image-upload">
          <Button variant="contained" component="span" sx={{ backgroundColor: "#A27B5C" }}>
            Upload Image
          </Button>
        </label>
      </Paper>

      <Paper sx={{ p: 3, mb: 3, background: "#4A4A4A" }}>
        <Typography variant="h6" mb={2} color="white">
          Cooking Steps
        </Typography>
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <TextField label="Step Description" fullWidth value={stepInput} onChange={(e) => setStepInput(e.target.value)} sx={{ background: "#D4A373" }} />
          <TextField label="Time (minutes)" type="number" sx={{ width: 120, background: "#D4A373" }} value={timeInput} onChange={(e) => setTimeInput(e.target.value)} />
        </Box>
        <Button variant="contained" onClick={addStep} sx={{ backgroundColor: "#A27B5C" }}>
          Add Step
        </Button>
      </Paper>

      <Button variant="contained" fullWidth onClick={handleSaveRecipe} sx={{ mt: 2, backgroundColor: "#A27B5C" }}>
        Save Recipe
      </Button>
    </Box>
  );
};

export default AddRecipe;
