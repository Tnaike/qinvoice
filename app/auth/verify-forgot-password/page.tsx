import React, { Suspense } from "react";
import VerifyPasswordOTP from "@/components/auth/password-reset/verify-password-otp";
import Spinner from "@/components/spinner";

export default function Page() {
  return (
    <Suspense fallback={<Spinner />}>
      <VerifyPasswordOTP />
    </Suspense>
  );
}
