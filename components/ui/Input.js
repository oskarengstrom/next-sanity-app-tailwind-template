import React from "react";
import PropTypes from "prop-types";
import Text, { TEXT_VARIANTS } from "./Text";
import { twMerge } from "tailwind-merge";

export default function Input({
  id,
  type,
  placeholder,
  required,
  value,
  onChange,
  error,
  name,
}) {
  return (
    <div className="flex flex-col">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        required={required}
        aria-required={required ? "true" : "false"}
        value={value}
        onChange={onChange}
        className={twMerge(
          "flex h-10 w-full items-center px-3",
          "bg-100",
          "placeholder:text-disabled",
          "text-strong",
          TEXT_VARIANTS.labelSmall,
        )}
      />
      {error && (
        <Text variant="paragraphSmall" className="text-error mt-2">
          {error}
        </Text>
      )}
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  name: PropTypes.string,
};
