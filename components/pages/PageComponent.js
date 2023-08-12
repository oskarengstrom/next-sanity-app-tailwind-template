import React from "react";
import PageBuilder from "../PageBuilder";

export default function PageComponent({ page }) {
  return (
    <>
      <h1 className="text-4xl">{page.title}</h1>
      <PageBuilder modules={page.modules} />
    </>
  );
}
