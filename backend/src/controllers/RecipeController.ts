import { Request, Response } from 'express';
import Recipe from '../models/RecipeModel';

export const addRecipe = async (req: Request, res: Response) => {
  try {
    // Extract all fields from the request body
    const {
      name,
      description,
      ingredients,
      instructions,
      prepTime,
      cookingTime,
      servingSize,
      dietaryRestriction,
      tags,
      rating,
      imageUrl
    } = req.body;

    // Create a new recipe instance with all fields
    const newRecipe = new Recipe({
      name,
      description,
      ingredients,
      instructions,
      prepTime,
      cookingTime,
      servingSize,
      dietaryRestriction,
      tags,
      rating,
      imageUrl
    });

    // Save to database
    const savedRecipe = await newRecipe.save();

    res.status(201).json(savedRecipe);
  } catch (error) {
    res.status(400).json({ message: "Failed to add" });
  }
};


export const searchRecipes = async (req: Request, res: Response) => {
    const { query } = req.query;
    try {
      const recipes = await Recipe.find({
        $or: [
          { name: { $regex: query, $options: 'i' } },
          { ingredients: { $regex: query, $options: 'i' } },
        ],
      });
      res.status(200).json(recipes);
    } catch (error) {
      res.status(500).json({ message: 'Error searching recipes', error });
    }
  };

  export const getAllRecipes = async (req: Request, res: Response) => {
    try {
      const recipes = await Recipe.find(); // Retrieve all recipes from DB
      res.status(200).json(recipes); // Send the recipes as a response
    } catch (error) {
      res.status(500).json({ message: 'Error fetching recipes' });
    }
  };

  export const getRecipeById = async (req: Request, res: Response): Promise<void> => {
    try {
      const recipe = await Recipe.findById(req.params.id);
      if (!recipe) {
        res.status(404).json({ message: 'Recipe not found' });
      }
      res.status(200).json(recipe);
    } catch (error) {
      res.status(400).json({ message: 'Error fetching recipe by ID', error });
    }
  };