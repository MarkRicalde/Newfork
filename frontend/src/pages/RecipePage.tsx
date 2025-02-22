import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Typography, Card, CardMedia, CardContent, Grid, Chip } from "@mui/material";

interface Recipe {
  _id: string;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  prepTime: number;
  cookingTime: number;
  servingSize: string;
  dietaryRestriction?: string[];
  tags?: string[];
  rating: number;
  imageUrl: string;
}

const RecipePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/recipes/${id}`)
      .then(response => setRecipe(response.data))
      .catch(error => console.error("Error fetching recipe:", error));
  }, [id]);

  if (!recipe) {
    return <Typography variant="h5" align="center">Loading...</Typography>;
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Card>
        {recipe.imageUrl && (
          <CardMedia
            component="img"
            height="300"
            image={recipe.imageUrl}
            alt={recipe.name}
          />
        )}
        <CardContent>
          <Typography variant="h4" gutterBottom>{recipe.name}</Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {recipe.description}
          </Typography>
          
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={6}>
              <Typography variant="h6">Prep Time:</Typography>
              <Typography>{recipe.prepTime} mins</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Cooking Time:</Typography>
              <Typography>{recipe.cookingTime} mins</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Serving Size:</Typography>
              <Typography>{recipe.servingSize}</Typography>
            </Grid>
          </Grid>
          
          <Typography variant="h6" sx={{ mt: 3 }}>Ingredients:</Typography>
          <ul >
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} style={{ fontFamily: 'Arial, sans-serif' }}> {ingredient}</li>
            ))}
          </ul>
          
          <Typography variant="h6" sx={{ mt: 3 }}>Instructions:</Typography>
          <ol>
            {recipe.instructions.map((step, index) => (
              <li key={index} style={{ fontFamily: 'Arial, sans-serif' }}>{step}</li>
            ))}
          </ol>
          
          {recipe.dietaryRestriction && recipe.dietaryRestriction.length > 0 && (
            <>
              <Typography variant="h6" sx={{ mt: 3 }}>Dietary Restrictions:</Typography>
              {recipe.dietaryRestriction.map((restriction, index) => (
                <Chip key={index} label={restriction} sx={{ mr: 1, mb: 1 }} />
              ))}
            </>
          )}
          
          {recipe.tags && recipe.tags.length > 0 && (
            <>
              <Typography variant="h6" sx={{ mt: 3 }}>Tags:</Typography>
              {recipe.tags.map((tag, index) => (
                <Chip key={index} label={tag} sx={{ mr: 1, mb: 1 }} />
              ))}
            </>
          )}
          
          <Typography variant="h6" sx={{ mt: 3 }}>Rating:</Typography>
          <Typography>{recipe.rating} / 5</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default RecipePage;
