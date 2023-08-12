import React from "react";
import TestModule from "./modules/TestModule";

export const moduleComponentMap = {
  testModule: TestModule,
};

const PageBuilder = ({ modules }) => {
  if (!modules) return null;

  return modules.map((module, index) => {
    const Module = moduleComponentMap[module._type];

    if (!Module) {
      console.warn(`No component found for module type "${module._type}"`);
      return null;
    }

    return <Module key={`module-${index}`} {...module} />;
  });
};

export default PageBuilder;
