import getSanityImageProps from "@/utils/getSanityImageProps";
import imageSizes from "@/utils/imageSizes";
import classNames from "classnames";
import Image from "next/image";
import React from "react";

export default function TestModule({ data }) {
  const { picture } = data;

  return (
    <section
      className={classNames(data.theme || "theme-default", "bg-primary")}
    >
      <div className="xl:container xl:mx-auto px-4 xl:px-0 py-10">
        <h1>{data.title}</h1>
        <div className="">
          <Image
            {...getSanityImageProps(picture)}
            sizes={imageSizes({
              lg: "50vw",
            })}
            className="w-1/1 lg:w-1/2"
            placeholder="blur"
            blurDataURL={picture.asset.metadata.lqip}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
