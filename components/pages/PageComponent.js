import React from "react";
import PageBuilder from "../PageBuilder";
// import classNames from "classnames";

export default function PageComponent({ page }) {
  return (
    // <div className={classNames(page.theme || "theme-default", "bg-primary")}>
    <PageBuilder modules={page.modules} />
    // </div>
  );
}
