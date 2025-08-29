import React, { Suspense } from "react";
import SignUpForm from "@/components/auth/signup-form";
import Spinner from "@/components/spinner";

export default function Page() {
  return (
    <Suspense fallback={<Spinner />}>
      <SignUpForm />
    </Suspense>
  );
}
