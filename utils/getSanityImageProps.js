import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

export default function getSanityImageProps(image) {
  if (!image) return null;
  const builder = imageUrlBuilder(client);
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

  return { src, width, height };
}

function getOriginalDimensions(_ref) {
  const dimensions = _ref.split("-")[2];
  const [width, height] = dimensions.split("x").map((num) => parseInt(num, 10));
  const aspectRatio = width / height;
  return { width, height, aspectRatio };
}
