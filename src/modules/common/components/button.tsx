import React from "react";
import { cva, type VariantProps } from "cva";

export type ButtonVariantProps = VariantProps<typeof ApplyBtnClass>;
export const ApplyBtnClass = cva(["transition-all", "rounded-md", "..."], {
  variants: {
    intent: {
      primary: ["bg-blue-400", "hover:bg-blue-300"],
      secondary: ["bg-slate-400", "hover:bg-slate-300"],
      emerald: ["bg-emerald-400", "hover:bg-emerald-300"],
      purple: ["bg-purple-400", "hover:bg-purple-300"],
      red: ["bg-red-400", "hover:bg-red-300"],
      blue: ["bg-blue-400", "hover:bg-blue-300"],
      yellow: ["bg-yellow-400", "hover:bg-yellow-300"],
      teal: ["bg-teal-400", "hover:bg-teal-300"],
      invisible: ["bg-transparent", "hover:text-blue-800"],
    },
    text: {
      white: ["text-white"],
      black: ["text-black"],
      slate: ["text-slate-700"],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
    shadow: {
      small: ["shadow-sm"],
      medium: ["shadow-md"],
      large: ["shadow-lg"],
      none: ["shadow-none"],
    },
  },
  defaultVariants: {
    intent: "primary",
    text: "slate",
    size: "small",
    shadow: "small",
  },
});

export const Button: React.FC<{
  children: React.ReactNode;
  BtnClass?: ButtonVariantProps;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: UnaryHandler<React.MouseEvent<HTMLButtonElement, MouseEvent>>;
}> = ({ children, BtnClass, onClick, type }) => {
  return (
    <button className={ApplyBtnClass(BtnClass)} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
