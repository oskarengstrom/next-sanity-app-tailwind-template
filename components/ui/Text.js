import React from "react";
import PropTypes from "prop-types";
import { Slot } from "@radix-ui/react-slot";
import Balancer from "react-wrap-balancer";
import { twMerge } from "tailwind-merge";

export const TEXT_VARIANTS = {
  h1: "text-6xl font-[600] -tracking-[0.02em]",
  h2: "text-4xl font-[600] -tracking-[0.01em]",
  h3: "text-2xl font-[600] -tracking-[0.01em]",
  h4: "text-[20px] leading-[28px] font-[600]",
  blockquote: "text-[20px] leading-[28px]",
  paragraph: "text-[20px] leading-[28px]",
  buttonLabel: "font-bold",
};

export default function Text({
  asChild,
  children,
  as = "span",
  variant,
  className,
  balanced = false,
  ...restProps
}) {
  const Component = asChild ? Slot : as;

  if (variant && !TEXT_VARIANTS[variant]) {
    throw new Error(`Unknown variant in Text: ${variant}`);
  }

  const resolvedClassName = twMerge(
    "text-strong font-default",
    // "block",
    variant && TEXT_VARIANTS[variant],
    className
  );

  const content = balanced ? <Balancer>{children}</Balancer> : children;

  return (
    <Component className={resolvedClassName} {...restProps}>
      {content}
    </Component>
  );
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(Object.keys(TEXT_VARIANTS)),
  as: PropTypes.string,
  className: PropTypes.string,
};
