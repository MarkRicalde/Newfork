import { useState } from "react";

export const useRecipeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    ingredients: [""],
    instructions: [""],
    prepTime: 0,
    cookingTime: 0,
    servingSize: "",
    dietaryRestriction: [] as string[],
    tags: [] as string[],
    rating: 0,
    imageUrl: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleArrayChange = (index: number, field: "ingredients" | "instructions", value: string) => {
    const updatedArray = [...formData[field]];
    updatedArray[index] = value;
    setFormData((prevData) => ({ ...prevData, [field]: updatedArray }));
  };

  const addArrayField = (field: "ingredients" | "instructions") => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: [...prevData[field], ""],
    }));
  };

  return { formData, setFormData, handleChange, handleArrayChange, addArrayField };
};
