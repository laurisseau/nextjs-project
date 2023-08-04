import express from 'express';
//import { isAuth } from '../utils.js';
import {
  newPrompt,
  getPrompts
} from '../controller/prompt.mjs';

const promptRouter = express.Router();

promptRouter.post('/new', newPrompt);

promptRouter.get('/', getPrompts);



export default promptRouter;