import express from "express";
import cors from 'cors'
import { recipeRoute } from "./routes/recipeRoute.js";

export const app = express();
app.use(express.json());
app.use(cors());
app.use(recipeRoute);