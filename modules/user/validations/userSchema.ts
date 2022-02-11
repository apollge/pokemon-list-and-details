import { z } from "zod";

export const userSchema = z.object({
  username: z.literal("admin", {
    invalid_type_error: "Invalid Username",
  }),
  password: z.literal("admin", {
    invalid_type_error: "Invalid Password",
  }),
});

export type UserSchema = z.infer<typeof userSchema>;
