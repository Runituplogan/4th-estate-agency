import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
  as?: string;
  id?: string;
  fluid?: boolean;
}

const Wrapper = ({
  children,
  className = "",
  id,
  fluid,
  as = "section",
}: WrapperProps) => {
  return React.createElement(
    as,
    {
      className: `max-w-[90rem] mx-auto ${
        fluid ? "w-full" : "w-full px-[1rem] lg:px-[5rem]"
      } ${className}`,
      id,
    },
    children
  );
};

export default Wrapper;
