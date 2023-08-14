import React from "react";
import PageBuilder from "../PageBuilder";

export default function PageComponent({ page }) {
  return (
    <>
      <PageBuilder modules={page.modules} />
    </>
  );
}
