import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Recipe } from '../types/types';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <Link to={`/recipes/${recipe._id}`} style={{ textDecoration: 'none' }}>
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia component="img" height="140" image={recipe.imageUrl} alt={recipe.name} />
      <CardContent>
        <Typography variant="h6">{recipe.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          {recipe.description}
        </Typography>
      </CardContent>
    </Card>
    </Link>
  );
};

export default RecipeCard;
