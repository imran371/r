import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[5px]",
};
const variants = {
  fill: {
    white_A700: "bg-white-A700 shadow-xs text-black-900",
    green_900_01: "bg-green-900_01 shadow-xs text-white-A700",
  },
};
const sizes = {
  xs: "h-[45px] px-[30px] text-[25px]",
  sm: "h-[67px] px-[35px] text-3xl",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  variant = "fill",
  size = "sm",
  color = "green_900_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer border-solid shadow-xs rounded-[5px] ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700", "green_900_01"]),
};

export { Button };
