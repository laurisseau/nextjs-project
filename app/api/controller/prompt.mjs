import expressAsyncHandler from 'express-async-handler';
import Prompt from '../models/prompt.mjs';

export const newPrompt = expressAsyncHandler(async (req, res) => {
  const newPrompt = await Prompt.create(req.body);

  res.send(newPrompt);
});

export const getPrompts = expressAsyncHandler(async (req, res) => {
  const getPrompts = await Prompt.find();
  
  res.send(getPrompts);
});
