import Link from "next/link";
import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { TEXT_VARIANTS } from "./Text";
import { ArrowUpRight, ChevronDown, ArrowDown, X, Search } from "lucide-react";
import Spinner from "../Spinner";

const baseStyle = twMerge(
  "rounded-lg",
  // "self-auto md:self-start",
  "inline-flex flex-row items-center justify-center gap-1 flex-shrink-0",
  "text-strong select-none",
  "transition duration-[100ms] ease-in-out",
  "disabled:opacity-50 disabled:cursor-not-allowed",
);

const SIZES = {
  medium: "h-[40px] px-[20px]",
  small: "h-[32px] px-[12px]",
};

const BUTTON_VARIANTS = {
  primary: twMerge(baseStyle, "bg-inverted text-inverted", "hover:opacity-90"),
  secondary: twMerge(
    baseStyle,
    "bg-100",
    "hover:bg-inverted hover:text-inverted",
  ),
  outlined: twMerge(
    baseStyle,
    "shadow-border",
    "bg-default",
    "hover:bg-inverted hover:text-inverted",
  ),
  text: twMerge(baseStyle, "underline", "hover:opacity-90"),
};

const ICONS = {
  ArrowUpRight: (
    <ArrowUpRight
      color="currentColor"
      size={20}
      strokeWidth={2}
      className="-mr-[4px]"
    />
  ),
  ChevronDown: (
    <ChevronDown
      color="currentColor"
      size={20}
      strokeWidth={2}
      className="-mr-[4px]"
    />
  ),
  ArrowDown: (
    <ArrowDown
      color="currentColor"
      size={20}
      strokeWidth={2}
      className="-mr-[4px]"
    />
  ),
  X: <X color="currentColor" size={20} strokeWidth={2} className="-mr-[4px]" />,
  Search: (
    <Search
      color="currentColor"
      size={20}
      strokeWidth={2}
      className="-mr-[4px]"
    />
  ),
};

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "medium",
      className,
      icon,
      label,
      disabled,
      loading,
      ...restProps
    },
    ref,
  ) => {
    const Component = restProps.onClick ? "button" : Link;

    if (variant && !BUTTON_VARIANTS[variant]) {
      throw new Error(`Unknown variant in Button: ${variant}`);
    }

    const resolvedClassName = twMerge(
      "relative overflow-hidden",
      // variant !== "text"
      //   ? TEXT_VARIANTS.labelSmall
      //   : TEXT_VARIANTS.paragraphSmall,
      TEXT_VARIANTS.paragraphSmall,
      // variant !== "text" && SIZES[size],
      SIZES[size],
      variant && BUTTON_VARIANTS[variant],
      className,
    );

    const IconComp = icon && (ICONS[icon] || null);

    return (
      <Component
        ref={ref}
        className={resolvedClassName}
        disabled={disabled}
        {...restProps}
      >
        {loading && (
          <div
            className={twMerge(
              variant && BUTTON_VARIANTS[variant],
              "absolute inset-0 flex items-center justify-center bg-opacity-75",
            )}
          >
            <Spinner />
          </div>
        )}
        {label || children}
        {icon && IconComp}
      </Component>
    );
  },
);

Button.displayName = "Button";

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(Object.keys(BUTTON_VARIANTS)),
  size: PropTypes.oneOf(Object.keys(SIZES)),
  className: PropTypes.string,
  icon: PropTypes.oneOf(Object.keys(ICONS)),
  label: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

export default Button;
