import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  variant: "primary" | "secondary" | "text";
  icon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant,
  icon,
  ...rest
}) => {
  return (
    <button
      className={twMerge(
        "px-3 py-2 md:py-3 md:px-[14px] rounded-lg text-sm md:text-xl font-semibold transition inline-flex items-center justify-center gap-2",
        variant === "primary" &&
          "text-white bg-[#1570EF] border border-[#1570EF]",
        variant === "secondary" && "border border-[#D5D7DA] text-[#414651]",
        variant === "text" && "",
        className
      )}
      {...rest}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
