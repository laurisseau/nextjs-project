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

export const getPromptsId = expressAsyncHandler(async (req, res) => {
  const getPromptsId = await Prompt.findById(req.params.id);

  res.send(getPromptsId);
});

export const updatePrompts = expressAsyncHandler(async (req, res) => {
  const updatePrompts = await Prompt.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  // The { new: true } option returns the updated document instead of the old one

  res.send(updatePrompts);
});

export const deletePromptsId = expressAsyncHandler(async (req, res) => {
  const deletePrompts = await Prompt.findByIdAndDelete(req.params.id);

  res.send(deletePrompts);
});
