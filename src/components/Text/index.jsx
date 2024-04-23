import React from "react";

const sizes = {
  "5xl": "text-[100px] font-normal md:text-5xl",
  xs: "text-sm font-normal",
  lg: "text-2xl font-normal md:text-[22px]",
  s: "text-[15px] font-normal",
  "2xl": "text-[32px] font-normal md:text-3xl sm:text-[28px]",
  "3xl": "text-[40px] font-normal md:text-[38px] sm:text-4xl",
  "4xl": "text-[64px] font-normal md:text-5xl",
  xl: "text-[25px] font-normal md:text-[23px] sm:text-[21px]",
  md: "text-xl font-medium",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
