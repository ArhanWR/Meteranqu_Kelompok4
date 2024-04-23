import React from "react";

const sizes = {
  xs: "text-xs font-normal",
  s: "text-[25px] font-normal md:text-[23px] sm:text-[21px]",
  md: "text-[40px] font-normal md:text-[38px] sm:text-4xl",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900_75 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
