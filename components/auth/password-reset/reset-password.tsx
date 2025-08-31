"use client";

import React, { useState, useEffect } from "react";
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
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResetPasswordSchema } from "@/components/auth/auth-schema";
import { useRouter } from "next/navigation";
import PasswordField from "@/components/input/password-field";

const ResetPassword = () => {
  const router = useRouter();
    const [email, setEmail] = useState("");

  const form = useForm<z.infer<typeof ResetPasswordSchema>>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const { handleSubmit, control } = form;

  const onSubmit = (data: z.infer<typeof ResetPasswordSchema>) => {
    console.log(data);
  };

  
    useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const searchEmail = urlParams.get("email");
      if (!searchEmail) {
        router.push("/auth/signup");
      }
      setEmail(decodeURIComponent(searchEmail as string));
    }, []);

  return (
    <div className="flex-1 w-full">
      <h4 className="mb-1 text-2xl font-bold">Set new password</h4>
      <p className="mb-8 text-gray-700">Must be at least 8 characters.</p>

      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6 w-full mb-4">
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
            <FormField
              control={control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <PasswordField
                      label="Confirm Password"
                      placeholder="Enter Confirm Password"
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

export default ResetPassword;
