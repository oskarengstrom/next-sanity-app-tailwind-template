import React from "react";
import TestModule from "./modules/TestModule";
// import TestSlice from "../slices/TestSlice/index.js";

const moduleComponentMap = {
  testModule: TestModule,
};

const PageBuilder = ({ modules }) => {
  if (!modules) return null;

  return modules.map((module, index) => {
    const SliceComponent = moduleComponentMap[module._type];

    if (!SliceComponent) {
      console.warn(`No component found for module type "${module._type}"`);
      return null;
    }

    return <SliceComponent key={`module-${index}`} {...module} />;
  });
};

export default PageBuilder;
