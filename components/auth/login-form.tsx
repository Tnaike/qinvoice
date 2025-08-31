"use client";

import React from "react";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/input/form";
import Link from "next/link";
import TextField from "@/components/input/text-field";
import PasswordField from "@/components/input/password-field";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema } from "./auth-schema";

const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit, control } = form;

  const onSubmit = (data: z.infer<typeof LoginFormSchema>) => {
    console.log(data);
  };

  return (
    <div className="flex-1 w-full">
      <h4 className="mb-1 text-2xl font-bold">Welcome Back!</h4>
      <p className="mb-8 text-gray-700">
        Enter your Credentials to access your account
      </p>

      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3 w-full mb-4">
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
            <FormField
              control={control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <PasswordField
                      label="Password"
                      placeholder="Enter Password"
                      {...field}
                      className="font-medium"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full text-right">
              <Link
                href="/auth/forgot-password"
                className="text-indigo-700 font-semibold hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          <Button
            type="submit"
            // disabled={!isValid}
            className="w-full h-max mt-1 px-6 sm:text-lg transition cursor-pointer"
          >
            Login
          </Button>

          <p className="text-center text-base mt-4">
            Don't have an account?
            <Link
              href="/auth/signup"
              className="ml-1 text-indigo-700 font-semibold hover:text-indigo-500"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
