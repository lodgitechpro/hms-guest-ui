import { z } from "zod";

// Define our user type without the database schema dependencies
export interface User {
  id: number;
  username: string;
  password: string;
}

// Define what's needed for user creation
export const insertUserSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(6),
});

export type InsertUser = z.infer<typeof insertUserSchema>;