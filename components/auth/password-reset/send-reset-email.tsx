"use client";

import React from "react";
import * as z from "zod";
import { MoveLeft } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/input/form";
import Link from "next/link";
import TextField from "@/components/input/text-field";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgotPasswordSchema } from "@/components/auth/auth-schema";
import { useRouter } from "next/navigation";

const SendResetEmail = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof ForgotPasswordSchema>>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const { handleSubmit, control } = form;

  const onSubmit = (data: z.infer<typeof ForgotPasswordSchema>) => {
    console.log(data);

    const params = new URLSearchParams();
    params.append("email", data.email);
    router.push(`/auth/verify-forgot-password?${params.toString()}`);
  };

  return (
    <div className="flex-1 w-full">
      <h4 className="mb-1 text-2xl font-bold">Forgot Password?</h4>
      <p className="mb-8 text-gray-700">
        Enter your email address to receive a password reset email.
      </p>

      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6 w-full mb-4">
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <TextField
                      type="email"
                      label="Email"
                      placeholder="Enter your email"
                      {...field}
                      className="font-medium"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full h-max px-6 sm:text-lg transition cursor-pointer"
            >
              Reset Password
            </Button>

            <p className="flex text-center justify-center">
              <Link
                href="/auth/login"
                className="flex items-center w-max text-indigo-700 font-semibold hover:text-indigo-500"
              >
                <MoveLeft className="inline mr-1.5" />
                Back to Login
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SendResetEmail;
