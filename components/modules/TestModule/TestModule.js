import Text from "@/components/ui/Text";
import getSanityImageProps from "@/utils/getSanityImageProps";
import imageSizes from "@/utils/imageSizes";
import serverLog from "@/utils/serverLog";
import classNames from "classnames";
import Image from "next/image";
import React from "react";

export default async function TestModule({ data }) {
  const { picture } = data;

  return (
    <section
    // className={classNames(data.theme || "theme-default", "bg-primary")}
    >
      <div className="xl:container xl:mx-auto px-4 xl:px-0 py-10">
        <Text variant="h2" as="a">
          {data.title}
        </Text>

        {/* {picture && (
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
          )} */}
      </div>
    </section>
  );
}
