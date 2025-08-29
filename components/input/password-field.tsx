"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import TextField, { TextFieldProps } from "./text-field";

const PasswordField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <TextField
        ref={ref}
        type={showPassword === true ? "text" : "password"}
        className="font-medium"
        {...props}
        endIcon={
          <button
            type="button"
            onClick={() => setShowPassword((isVisible) => !isVisible)}
          >
            {showPassword === false ? (
              <EyeOff className="size-6 text-gray-600" />
            ) : (
              <Eye className="size-6 text-gray-600" />
            )}
          </button>
        }
      />
    );
  }
);

export default PasswordField;
