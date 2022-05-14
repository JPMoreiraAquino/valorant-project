import express from "express";
import handle from 'express-async-handler';
import ValorantAgenstController from "./app/controllers/v1/ValorantAgenstController.js";
const routes = express.Router();

  routes.get('/agents', handle(ValorantAgenstController.getAgents));


  // routes.get('/', (req, res) => {
  //   return res.json(db);
  // })
  
  // routes.post('/add', (req, res) => {
  //   const body = req.body
  //   if(!body)
  //     return res.status(400).end();
    
  //   db.push(body)
  //     return res.json(body);
  // })
export default routes;