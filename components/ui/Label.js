import React from "react";
import PropTypes from "prop-types";
import Text, { TEXT_VARIANTS } from "./Text";
import { twMerge } from "tailwind-merge";

export default function Label({ label, id, required }) {
  return (
    <Text
      as="label"
      variant="paragraphMedium"
      htmlFor={id}
      className={twMerge("mb-1 text-weak", TEXT_VARIANTS.paragraphSmall)}
    >
      {label}
      {required && (
        <span aria-hidden="true" className="text-disabled">
          {" *"}
        </span>
      )}
    </Text>
  );
}

Label.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  required: PropTypes.bool,
};
