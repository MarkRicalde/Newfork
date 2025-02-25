import axios from "axios";
import { Recipe } from "../types/types";

export const addRecipe = async (recipe: Recipe): Promise<Recipe> => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/recipes`, recipe); // Sends POST request to add the recipe
    return response.data;  // Returns the added recipe data
  } catch (error) {
    console.error('Error adding recipe:', error);
    throw error;
  }
};

export const searchRecipes = async (query: string): Promise<Recipe[]> => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/recipes/search`, {
      params: { query } // Sends the query as a search parameter
    });
    return response.data;  // Returns the list of recipes that match the search query
  } catch (error) {
    console.error('Error searching recipes:', error);
    throw error;
  }
};

export const getAllRecipes = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/recipes`); // or your deployed URL
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};

export const getRecipeById = async (id: string): Promise<Recipe> => {
  try {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/recipes/${id}`);
  return response.data;
  } catch (error) {
    console.error('Error finding recipe by id:', error);
    throw error;
  }
};