import Router from 'express';

export const bannerRoute = Router();
bannerRoute.get("/", (req, res) => res.status(200).json({message: "Deu certo"}));