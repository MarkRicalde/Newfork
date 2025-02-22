import mongoose, { Schema, Document } from 'mongoose';

export interface IRecipe extends Document {
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  prepTime: number;
  cookingTime: number;
  servingSize: string;
  dietaryRestriction: string[];
  tags: string[];
  rating: number;
  imageUrl: string;
  createdAt: Date;
}

const RecipeSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: [String], required: true },
  prepTime: { type: Number, required: false },
  cookingTime: { type: Number, required: false },
  servingSize: { type: String, required: false },
  dietaryRestriction: { type: [String], required: false },
  tags: { type: [String], required: false },
  rating: { type: Number, required: false },
  imageUrl: { type: String, required: false },
  createdAt: { type: Date, default: Date.now }
});


export default mongoose.model<IRecipe>('Recipe', RecipeSchema);
