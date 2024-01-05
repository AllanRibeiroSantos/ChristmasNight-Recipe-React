import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema(
  {
    id: {type: String},
    name: {type: String, required: true},
    servings: {type: String, required: true},
    estimated_time: {type: String, required: true},
    description: {type: String, required: true},
    nutritional_value: {type: Object, required: true},
    ingredients: {type: Array, required: true},
    instructions: {type: Array, required: true},
    video: {type: String, required: true},
    tag: {type: String, required: true}
  }
);

export const recipes = mongoose.model('recipes', recipeSchema);
