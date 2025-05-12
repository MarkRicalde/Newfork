import { useState, useEffect } from "react";
import { getRecipeById } from "../api/RecipeApi";
import { Recipe } from "../types/types";

export const useRecipe = (id: string | undefined) => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        if (!id) return; // Ensure id is valid before making the call
        const data = await getRecipeById(id);
        setRecipe(data);
      } catch (error) {
        setError("Error fetching recipe");
        console.error("Error fetching recipe:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  return { recipe, loading, error };
};
