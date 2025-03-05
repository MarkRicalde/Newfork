import React from "react";
import { Grid2 } from "@mui/material";
import RecipeCard from "./RecipeCardComponent";
import { Recipe } from "../types/types";

const RecipeGrid: React.FC<{ recipes: Recipe[] }> = ({ recipes }) => {
  return (
    <Grid2 container spacing={2} justifyContent="center">
      {recipes.map((recipe) => (
        <Grid2 key={recipe._id}>
          <RecipeCard recipe={recipe} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default RecipeGrid;
