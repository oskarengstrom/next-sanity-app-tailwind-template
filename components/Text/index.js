import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  h1: "text-4xl lg:text-6xl",
  h2: "text-2xl lg:text-4xl",
  default: "",
};

export default function Text({
  children,
  variant = "default",
  as: Component = "p",
  className,
  ...restProps
}) {
  const resolvedClassName = classNames(
    "text-primary",
    variants[variant] || variants.default,
    className
  );

  return (
    <Component className={resolvedClassName} {...restProps}>
      {children}
    </Component>
  );
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(Object.keys(variants)),
  as: PropTypes.string,
  className: PropTypes.string,
};
