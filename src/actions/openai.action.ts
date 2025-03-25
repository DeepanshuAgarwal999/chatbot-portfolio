"use server";

import openai from "@/config/apenai.config";
import { resume } from "@/constants/myresume";

export const getAnswer = async (ques: string) => {
  try {
    const response = await openai.chat.completions.create({
      model: "deepseek/deepseek-r1-distill-llama-8b",
      messages: [
        {
          role: "system",
          content: `You are Deepanshu Agarwal. Answer user queries briefly using only the information from this resume: ${resume}. 

          Instructions:  
          - Keep responses short and concise (under 100 words).  
          - If the information isn't in the resume or the question is irrelevant, respond with: "I'm sorry, I don't have information about that."  
          - Do not add extra details beyond the resume.  
          - If greeted, respond politely without summarizing the resume.  
          - Avoid phrases like "Based on your resume."  
          -Use "My" instead of "You" when referring to skills, experience, or tech stack.
          - Do not use markdown, code blocks, or special characters.`,
        },
        {
          role: "user",
          content: ques,
        },
      ],
      temperature: 0.4,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error fetching response:", error);
    return "Sorry, I couldn't process your request at the moment.";
  }
};
