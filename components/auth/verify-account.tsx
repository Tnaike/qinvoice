"use client";

import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/input/form";
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

const VerifyAccount = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof VerifyPasswordSchema>>({
    resolver: zodResolver(VerifyPasswordSchema),
    defaultValues: {
      otp: "",
    },
  });

  const { handleSubmit, control } = form;

  const onSubmit = (data: z.infer<typeof VerifyPasswordSchema>) => {
    console.log(data);
  };

  return (
    <div className="flex-1 w-full">
      <div className="mb-6">
        <h4 className="mb-1 text-2xl font-bold">Verify Account</h4>
        <p className="text-gray-700">
          To verify your account. Please enter the 6-digit code sent to your
          email.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6 w-full mb-4">
            <FormField
              control={control}
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
                    Didn't receive code?{" "}
                    <button
                      type="button"
                      onClick={() => {}}
                      className="text-indigo-700 font-semibold hover:text-indigo-500 cursor-pointer hover:underline"
                      // disabled={isResending}
                    >
                      Resend code
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
          </div>
        </form>
      </Form>
    </div>
  );
};

export default VerifyAccount;
