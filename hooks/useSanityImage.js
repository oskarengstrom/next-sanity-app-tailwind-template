// USAGE:
// const { imageProps, aspectRatio, hotspot } = useSanityImage(image);
//
// <Image
// {...imageProps}
// sizes={imageSizes(["30vw"])}
// css={{
//   width: "50%",
//   // with forced aspect ratio and hotspot enabled:
//   aspectRatio: "3/4",
//   objectFit: "cover",
//   objectPosition: `${hotspot.x * 100}% ${hotspot.y * 100}%`,
// }}
// />

import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { useMemo } from "react";

function getOriginalDimensions(_ref) {
  const dimensions = _ref.split("-")[2];
  const [width, height] = dimensions.split("x").map((num) => parseInt(num, 10));
  const aspectRatio = width / height;
  return { width, height, aspectRatio };
}

function calculateNewHotspot(dimensions, hotspot, crop) {
  // calculate the dimensions of the crop
  let cropWidth = dimensions.width * (1 - crop.left - crop.right);
  let cropHeight = dimensions.height * (1 - crop.top - crop.bottom);

  // calculate the position of the hotspot relative to the original image
  let originalHotspotX = dimensions.width * hotspot.x;
  let originalHotspotY = dimensions.height * hotspot.y;

  // calculate the position of the hotspot relative to the crop
  let cropHotspotX = originalHotspotX - dimensions.width * crop.left;
  let cropHotspotY = originalHotspotY - dimensions.height * crop.top;

  // calculate the new relative hotspot values
  let newHotspot = {
    x: cropHotspotX / cropWidth,
    y: cropHotspotY / cropHeight,
    width: (hotspot.width * dimensions.width) / cropWidth,
    height: (hotspot.height * dimensions.height) / cropHeight,
  };

  return newHotspot;
}

export default function useSanityImage(image) {
  if (!image) return null;
  const builder = imageUrlBuilder(client);

  return useMemo(() => {
    const baseImage = builder.image(image);
    const src = baseImage.auto("format").url();

    const {
      width: ogWidth,
      height: ogHeight,
      aspectRatio,
    } = getOriginalDimensions(image.asset._id);

    const crop = image.crop || { top: 0, bottom: 0, left: 0, right: 0 };
    const width = ogWidth * (1 - (crop.left + crop.right));
    const height = ogHeight * (1 - (crop.top + crop.bottom));

    // const oldHotspot = image.hotspot || { x: 0.5, y: 0.5 };

    // const dimensions = { width: ogWidth, height: ogHeight };
    // const hotspot = calculateNewHotspot(dimensions, oldHotspot, crop);

    return { imageProps: { src, width, height } };
  }, [builder, image, client]);
}
