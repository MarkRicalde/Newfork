import React, { useEffect, useState } from "react";
import { Grid2 } from "@mui/material"; // Use Grid2 for the new grid system in Material-UI v5
import axios from "axios";
import RecipeCard from "./RecipeCardComponent";
import { Recipe } from "../types/types";

const RecipeGrid: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch recipes from your API
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/recipes"); // Adjust the URL if necessary
        setRecipes(response.data);
      } catch (err) {
        setError("Failed to load recipes");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []); // Empty dependency array so it only runs once

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Grid2 container spacing={1} justifyContent="center">
      {recipes.map((recipe) => (
        <Grid2 > {/* Adjust for responsiveness */}
          <RecipeCard recipe={recipe} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default RecipeGrid;
