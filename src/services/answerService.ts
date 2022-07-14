import { Answer } from "@prisma/client";
import answerRepository from "../repositories/answerRepository.js";

export type CreateAnswerData = Omit<Answer, "id">;

async function create(answer: string, id: number) {
  await answerRepository.insert(answer, id);
}

const answerService = { create };
export default answerService;
