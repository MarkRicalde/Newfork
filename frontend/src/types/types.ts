export interface Recipe {
    _id?: any;
    name: string;
    description: string;
    ingredients: string[];
    instructions: string[];
    imageUrl?: string;  // Optional image URL
    prepTime?: number;
    cookingTime?: number;
    servingSize?: string;
    dietaryRestriction?: string[]
    tags?: string[];
    rating?: number;
  }