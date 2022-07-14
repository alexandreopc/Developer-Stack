import { prisma } from "../config/database.js";

import { CreateAnswerData } from "../services/answerService.js";

async function insert(answer: string, id: number) {
  await prisma.answer.create({
    data: {
      answer,
      questionId: id,
    },
  });
}

const answerRepository = { insert };
export default answerRepository;
