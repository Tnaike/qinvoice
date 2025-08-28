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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextField from "@/components/input/text-field";
import PasswordField from "@/components/input/password-field";
import { Button } from "@/components/ui/button";
import { SignupFormSchema } from "./auth-schema";

const SignUpForm = () => {
  const form = useForm<z.infer<typeof SignupFormSchema>>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = form;

  const onSubmit = (data: z.infer<typeof SignupFormSchema>) => {
    console.log(data);
  };

  return (
    <div className="flex-1 w-full">
      <h4 className="mb-1 text-2xl font-bold">Welcome to Qinvoice</h4>
      <p className="mb-8 text-gray-700">
        Kindly enter your details to create an account
      </p>

      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3 w-full mb-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <FormField
                control={control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <TextField
                        type="text"
                        label="First Name"
                        placeholder="Enter first name"
                        {...field}
                        className="font-medium w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <TextField
                        type="text"
                        label="Last Name"
                        placeholder="Enter last name"
                        {...field}
                        className="font-medium w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <TextField
                      type="email"
                      label="Email Address"
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
          </div>

          <Button
            type="submit"
            disabled={!isValid}
            className="w-full h-max px-6 mt-3 sm:text-lg transition cursor-pointer"
          >
            Sign Up
          </Button>

          <p className="text-center text-base mt-4">
            Already have an account?
            <Link
              href="/auth/login"
              className="text-sm ml-1 text-indigo-700 font-semibold hover:text-indigo-800"
            >
              Login
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
};

export default SignUpForm;
