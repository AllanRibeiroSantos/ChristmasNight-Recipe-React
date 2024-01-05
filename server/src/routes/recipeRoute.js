import Router from 'express';
import RecipesController from '../Controller/RecipesController.js';

export const recipeRoute = Router();
recipeRoute.get("/receitas", RecipesController.getRecipe);
recipeRoute.get("/receitas/:id", RecipesController.getSingleRecipe);
recipeRoute.post("/receitas", RecipesController.postRecipe);
recipeRoute.put("/receitas/:id", RecipesController.updateRecipe);
recipeRoute.delete("/receitas/:id", RecipesController.deleteRecipe);
