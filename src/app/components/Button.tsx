import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Button = (
  props: {
    variant: "primary" | "secondary" | "text";
  } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { className, children, variant, ...rest } = props;
  return (
    <button
      className={twMerge(
        "py-3 px-[14px] rounded-lg text-xl font-semibold transition",
        variant === "primary" && "text-white bg-[#1570EF] border border-[#1570EF]",
        variant === "secondary" && "text-[#414651]",
        variant === "text" && "",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button