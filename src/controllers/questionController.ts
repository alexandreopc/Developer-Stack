import { Request, Response } from "express";
import answerService from "../services/answerService.js";
import questionService from "../services/questionService.js";

export async function create(req: Request, res: Response) {
  const { question } = req.body;
  await questionService.create(question);
  res.sendStatus(201);
}

export async function answer(req: Request, res: Response) {
  const { answer } = req.body;
  const id = req.params.id;
  await answerService.create(answer, +id);
  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const answers = await questionService.findAll();
  res.status(200).send(answers);
}

export async function getById(req: Request, res: Response) {
  const id = req.params.id;
  await questionService.findById(+id);
  res.sendStatus(201);
}
