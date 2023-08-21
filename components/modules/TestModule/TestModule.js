import getSanityImageProps from "@/utils/getSanityImageProps";
import imageSizes from "@/utils/imageSizes";
import classNames from "classnames";
import Image from "next/image";
import React from "react";

export default function TestModule({ data }) {
  const { picture } = data;

  console.log(
    imageSizes({
      DEFAULT: "100vw",
      md: "75vw",
      lg: "50vw",
    })
  );

  return (
    <section
    // className={classNames(data.theme || "theme-default", "bg-primary")}
    >
      <div className="xl:container xl:mx-auto px-4 xl:px-0 py-10">
        <h1>{data.title}</h1>
        <div className="">
          {picture && (
            <Image
              {...getSanityImageProps(picture)}
              sizes={imageSizes({
                DEFAULT: "100vw",
                lg: "50vw",
              })}
              className="w-full lg:w-1/2"
              placeholder="blur"
              blurDataURL={picture.asset.metadata.lqip}
              alt=""
            />
          )}
        </div>
      </div>
    </section>
  );
}
