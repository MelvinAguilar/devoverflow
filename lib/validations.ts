import * as z from "zod";

export const QuestionsSchema = z.object({
  title: z.string().min(5, { message: "Wrong" }).max(130),
  explanation: z.string().min(50),
  tags: z.array(z.string().min(1).max(15)).min(1).max(3),
});

export const AnswerSchema = z.object({
  answer: z.string().min(100),
});

export const ProfileSchema = z.object({
  name: z.string().min(5).max(50),
  username: z.string().min(5).max(50),
  bio: z.string().min(10).max(150),
  portfolioWebsite: z.string().url(),
  location: z.string().min(5).max(50),
});

export const JobSchema = z.object({
  id: z.string(),
  employer_name: z.string(),
  employer_logo: z.string().url(),
  employer_website: z.string().url(),
  job_employment_type: z.string(),
  job_title: z.string(),
  job_description: z.string(),
  job_apply_link: z.string().url(),
  job_city: z.string(),
  job_state: z.string(),
  job_country: z.string(),
});
