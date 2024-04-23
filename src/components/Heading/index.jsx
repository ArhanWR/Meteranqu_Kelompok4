import React from "react";

const sizes = {
  xl: "text-3xl font-semibold md:text-[28px] sm:text-[26px]",
  s: "text-[15px] font-bold",
  md: "text-xl font-bold",
  xs: "text-sm font-bold",
  lg: "text-[25px] font-bold md:text-[23px] sm:text-[21px]",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-plusjakartasans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
