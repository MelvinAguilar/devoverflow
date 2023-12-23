"use server";

import Answer from "@/database/answer.model";
import { CreateAnswerParams, GetAnswersParams } from "./shared.types";
import Question from "@/database/question.model";
import { revalidatePath } from "next/cache";
import { connectToDb } from "../moongose";

export async function createAnswer(params: CreateAnswerParams) {
  try {
    connectToDb();

    const { content, author, question, path } = params;

    const newAnswer = await Answer.create({ content, author, question });

    // Add the answer to the question's answers array
    await Question.findByIdAndUpdate(question, {
      $push: { answers: newAnswer._id },
    });

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getAnswers(params: GetAnswersParams) {
  try {
    connectToDb();

    const { questionId } = params;

    const answers = await Answer.find({ question: questionId })
      .populate("author", "_id clerkId name picture")
      .sort({ createdAt: -1 });

    return { answers };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
