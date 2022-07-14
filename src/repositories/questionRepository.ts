import { prisma } from "../config/database.js";

import { CreateQuestionData } from "../services/questionService.js";

async function insert(question: string) {
  await prisma.question.create({
    data: {
      question,
    },
  });
}

async function getAll() {
  return await prisma.question.findMany();
}

async function getById(id: number) {
  return await prisma.question.findMany({
    where: {
      id,
    },
  });
}

const questionRepository = { insert, getAll, getById };
export default questionRepository;
