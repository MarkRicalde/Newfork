import { useNavigate } from "react-router-dom";
import { addRecipe } from "../api/RecipeApi";

export const useSubmitRecipe = (formData: any) => {
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addRecipe(formData);
      alert("Recipe added successfully!");
      navigate("/"); // Redirect after submission
    } catch (error) {
      console.error("Error adding recipe", error);
    }
  };

  return { handleSubmit };
};
