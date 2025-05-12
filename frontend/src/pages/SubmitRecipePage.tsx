import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Grid, Typography, CircularProgress } from "@mui/material";
import { useAuth } from "../hooks/useAuth"; // Import the authentication hook
import { useRecipeForm } from "../hooks/useRecipeForm"; // Import the recipe form hook
import { useSubmitRecipe } from "../hooks/useSubmitRecipe"; // Import the submit recipe hook

const RecipeForm: React.FC = () => {
  const { user, loading } = useAuth();
  const { formData, handleChange, handleArrayChange, addArrayField } = useRecipeForm();
  const { handleSubmit } = useSubmitRecipe(formData); // Use the submit recipe hook
  const navigate = useNavigate();

  // Redirect to home if not logged in
  useEffect(() => {
    if (!loading && !user) {
      navigate("/");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <Grid container justifyContent="center" alignItems="center" style={{ height: "100vh" }}>
        <CircularProgress />
      </Grid>
    );
  }

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={8}>
        <Typography variant="h4" gutterBottom>
          Add a New Recipe
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} required margin="normal" />
          <TextField fullWidth label="Description" name="description" value={formData.description} onChange={handleChange} required margin="normal" multiline rows={3} />

          <Typography variant="h6" gutterBottom>
            Ingredients
          </Typography>
          {formData.ingredients.map((ingredient, index) => (
            <TextField
              key={index}
              fullWidth
              label={`Ingredient ${index + 1}`}
              value={ingredient}
              onChange={(e) => handleArrayChange(index, "ingredients", e.target.value)}
              margin="normal"
            />
          ))}
          <Button onClick={() => addArrayField("ingredients")}>+ Add Ingredient</Button>

          <Typography variant="h6" gutterBottom>
            Instructions
          </Typography>
          {formData.instructions.map((instruction, index) => (
            <TextField
              key={index}
              fullWidth
              label={`Step ${index + 1}`}
              value={instruction}
              onChange={(e) => handleArrayChange(index, "instructions", e.target.value)}
              margin="normal"
            />
          ))}
          <Button onClick={() => addArrayField("instructions")}>+ Add Step</Button>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField fullWidth label="Prep Time (mins)" name="prepTime" type="number" value={formData.prepTime} onChange={handleChange} margin="normal" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Cooking Time (mins)" name="cookingTime" type="number" value={formData.cookingTime} onChange={handleChange} margin="normal" />
            </Grid>
          </Grid>

          <TextField fullWidth label="Serving Size" name="servingSize" value={formData.servingSize} onChange={handleChange} margin="normal" />

          <TextField fullWidth label="Image URL" name="imageUrl" value={formData.imageUrl} onChange={handleChange} margin="normal" />

          <TextField fullWidth label="Tags (comma-separated)" name="tags" value={formData.tags.join(", ")} onChange={(e) => handleChange(e)} margin="normal" />

          <TextField fullWidth label="Dietary Restrictions (comma-separated)" name="dietaryRestriction" value={formData.dietaryRestriction.join(", ")} onChange={(e) => handleChange(e)} margin="normal" />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit Recipe
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default RecipeForm;
