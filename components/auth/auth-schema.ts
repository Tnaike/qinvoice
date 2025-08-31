import * as z from "zod";

const emailSchema = z.email({ message: "Invalid email address" });

const passwordSchema = z
  .string()
  .min(1, { message: "Password is required" })
  .min(8, { message: "Password must be at least 8 characters" });

const nameSchema = (field: string) =>
  z
    .string()
    .min(1, { message: `${field} is required` })
    .min(2, { message: `${field} must be at least 2 characters` });

export const LoginFormSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const SignupFormSchema = z.object({
  firstName: nameSchema("First name"),
  lastName: nameSchema("Last name"),
  email: emailSchema,
  password: passwordSchema,
});

export const ForgotPasswordSchema = z.object({
  email: emailSchema,
});

export const VerifyPasswordSchema = z.object({
  otp: z
    .string()
    .min(6)
    .max(6)
    .regex(/^\d{6}$/, "Invalid one-time password"),
});
