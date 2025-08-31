import * as z from "zod";

// const emailSchema = z.email({ message: "Invalid email address" });

// const passwordSchema = z
//   .string()
//   .min(1, { message: "Password is required" })
//   .min(8, { message: "Password must be at least 8 characters" });

// const nameSchema = (field: string) =>
//   z
//     .string()
//     .min(1, { message: `${field} is required` })
//     .min(2, { message: `${field} must be at least 2 characters` });

// export const LoginFormSchema = z.object({
//   email: emailSchema,
//   password: passwordSchema,
// });

// export const SignupFormSchema = z.object({
//   firstName: nameSchema("First name"),
//   lastName: nameSchema("Last name"),
//   email: emailSchema,
//   password: passwordSchema,
// });

// export const ForgotPasswordSchema = z.object({
//   email: emailSchema,
// });

// export const VerifyPasswordSchema = z.object({
//   otp: z
//     .string()
//     .min(6)
//     .max(6)
//     .regex(/^\d{6}$/, "Invalid one-time password"),
// });

// export const ResetPasswordSchema = z.object({
//   password: passwordSchema,
// });

const commonSchemas = {
  email: z.email({ message: "Invalid email address" }),
  password: (field: string = "Password") =>
    z
      .string()
      .min(1, { message: `${field} is required` })
      .min(8, { message: `${field} must be at least 8 characters` }),
  name: (field: string) =>
    z
      .string()
      .min(1, { message: `${field} is required` })
      .min(2, { message: `${field} must be at least 2 characters` }),
  otp: z
    .string()
    .length(6, { message: "OTP must be 6 digits" })
    .regex(/^\d{6}$/, { message: "Invalid one-time password" }),
};

// ✅ Form Schemas
export const LoginFormSchema = z.object({
  email: commonSchemas.email,
  password: commonSchemas.password("Password"),
});

export const SignupFormSchema = z.object({
  firstName: commonSchemas.name("First name"),
  lastName: commonSchemas.name("Last name"),
  email: commonSchemas.email,
  password: commonSchemas.password("Password"),
});

export const ForgotPasswordSchema = z.object({
  email: commonSchemas.email,
});

export const VerifyPasswordSchema = z.object({
  otp: commonSchemas.otp,
});

export const ResetPasswordSchema = z
  .object({
    password: commonSchemas.password("Password"),
    confirmPassword: commonSchemas.password("Confirm password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
