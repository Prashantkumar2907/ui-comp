import React from "react";

export type ButtonVariant = "primary" | "ghost";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const base =
  "inline-flex items-center justify-center px-4 py-2 rounded";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  ghost: "bg-transparent border border-gray-200"
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className = "",
  children,
  ...rest
}) => {
  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
