import { recipes } from "../Model/RecipesModel.js";

export default class RecipesController {

  static async getRecipe(req, res) {
    try {
      const recipe = await recipes.find();
      return res.status(200).json(recipe);
    }catch {
      return res.status(200).json({message: "Não foi possível encontrar."});
    }
  }
  
  static async getSingleRecipe(req, res) {
    try {
      const id = req.params.id;
      const singleRecipe = await recipes.findById(id);
      return res.status(200).json(singleRecipe);
    }catch {
      return res.status(200).json({message: "Não foi possível encontrar."});
    }
  }

  static async postRecipe(req, res) {
    try {
      const newRecipe = await recipes.create(req.body);
      return res.status(201).json(newRecipe);
    }catch {
      return res.status(200).json({message: "Não foi possível cadastrar a receita."});
    }
  }

  static async updateRecipe(req, res) {
    try {
      const id = req.params.id;
      const updateRecipe = await recipes.findByIdAndUpdate(id, req.body);
      return res.status(200).json({message: "Receita atualizada com sucesso."})
    }catch {
      return res.status(200).json({message: "Não foi possível atualizar a receita."});
    }
  }

  static async deleteRecipe(req, res) {
    try {
      const id = req.params.id;
      const deleteRecipe = await recipes.findByIdAndDelete(id);
      return res.status(200).json({message: "Receita deletada com sucesso."});
    }catch {
      return res.status(200).json({message: "Não foi possível deletar a receita."});
    }
  }
}
