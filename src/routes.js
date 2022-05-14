import express from "express";
import handle from 'express-async-handler';
import ValorantAgenstController from "./app/controllers/v1/ValorantAgenstController.js";
const routes = express.Router();

  routes.get('/agents', handle(ValorantAgenstController.getAgents));

  routes.get('/agents/:agentOrId/abilities', handle(ValorantAgenstController.getAgentsAbilities))
export default routes;