import express from 'express';
//import { isAuth } from '../utils.js';
import {
  newPrompt,
  getPrompts,
  updatePrompts,
  getPromptsId,
  deletePromptsId,
} from '../controller/prompt.mjs';

const promptRouter = express.Router();

promptRouter.post('/new', newPrompt);

promptRouter.patch('/:id', updatePrompts);

promptRouter.get('/:id', getPromptsId);

promptRouter.delete('/:id', deletePromptsId);

promptRouter.get('/', getPrompts);

export default promptRouter;
