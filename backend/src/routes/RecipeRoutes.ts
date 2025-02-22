import express from 'express';
import { addRecipe, getAllRecipes, searchRecipes, getRecipeById } from '../controllers/RecipeController';

const router = express.Router();

router.post('/', addRecipe);
router.get('/search', searchRecipes);
router.get('/', getAllRecipes);
router.get('/:id', getRecipeById);

export default router;