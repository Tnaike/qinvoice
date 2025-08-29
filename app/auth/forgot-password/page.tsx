import React, { Suspense } from "react";
import SendResetEmail from "@/components/auth/password-reset/send-reset-email";
import Spinner from "@/components/spinner";

export default function Page() {
  return (
    <Suspense fallback={<Spinner />}>
      <SendResetEmail />
    </Suspense>
  );
}
