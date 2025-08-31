"use client";

import React, { useState, useEffect } from "react";
import * as z from "zod";
import { MoveLeft } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/input/form";
import Link from "next/link";
import TextField from "@/components/input/text-field";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { VerifyPasswordSchema } from "@/components/auth/auth-schema";
import { useRouter } from "next/navigation";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const VerifyPasswordOTP = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");

  const form = useForm<z.infer<typeof VerifyPasswordSchema>>({
    resolver: zodResolver(VerifyPasswordSchema),
    defaultValues: {
      otp: "",
    },
  });

  const { handleSubmit, control } = form;

  const onSubmit = (data: z.infer<typeof VerifyPasswordSchema>) => {
    console.log(data);

    const params = new URLSearchParams();
    params.append("otp", data.otp);
    router.push(`/auth/verify-forgot-password?${params.toString()}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchEmail = urlParams.get("email");
    if (!searchEmail) {
      router.push("/auth/forgot-password");
    }
    setEmail(decodeURIComponent(searchEmail as string));
  }, []);

  return (
    <div className="flex-1 w-full">
      <div className="mb-6">
        <h4 className="mb-1 text-2xl font-bold">Verify OTP</h4>
        <p className="text-gray-700">
          We've sent an OTP to{" "}
          <span className="text-indigo-700 font-bold">{email}</span>
        </p>
        <p className="text-gray-700">Enter it below to continue</p>
      </div>

      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6 w-full mb-4">
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup className="font-bold">
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                  <FormDescription className="flex gap-1 items-center mt-2.5">
                    Didn't receive the email?{" "}
                    <button
                      type="button"
                      onClick={() => {}}
                      className="text-indigo-700 font-semibold hover:text-indigo-500 cursor-pointer hover:underline"
                      // disabled={isResending}
                    >
                      Click to resend
                    </button>
                  </FormDescription>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full h-max px-6 sm:text-lg transition cursor-pointer"
            >
              Verify
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

export default VerifyPasswordOTP;
