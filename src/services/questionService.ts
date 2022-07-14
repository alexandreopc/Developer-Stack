import { Question } from "@prisma/client";
import questionRepository from "../repositories/questionRepository.js";

export type CreateQuestionData = Omit<Question, "id">;

async function create(question: string) {
  await questionRepository.insert(question);
}

async function findAll() {
  return await questionRepository.getAll();
}

async function findById(id: number) {
  return await questionRepository.getById(id);
}

const questionService = { create, findAll, findById };
export default questionService;
