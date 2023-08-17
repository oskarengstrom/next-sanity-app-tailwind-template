import React from "react";
import { refResolver } from "./refResolver";

// TODO make async and fetch ref if needed

export const getLinkProps = (universalLink) => {
  const isExternalLink = !!universalLink?.href;
  const isInternalReference = !!universalLink?.internalReference;
  const isMediaItem = !!universalLink?.mediaItem;
  const isAnchor = !!universalLink?.anchor;
  const isBlank = !!universalLink?.blank || isMediaItem;
  const hasAdditionalProperties = !!universalLink?.additionalProperties;

  const href = (() => {
    if (isExternalLink) {
      return universalLink.href;
    }
    if (isInternalReference) {
      if (!universalLink.internalReference.slug?.current) {
        throw new Error(
          "Slug is missing on internalReference. Make sure to open all refs."
        );
      }
      const slug = refResolver(universalLink.internalReference);
      return slug + (isAnchor ? `#${universalLink.anchor}` : "");
    }
    if (isMediaItem) {
      return universalLink.mediaItem.asset.url;
    }
    return null;
  })();

  const target = (() => {
    return isBlank ? "_blank" : null;
  })();

  const rel = (() => {
    return isBlank ? "noopener noreferrer" : null;
  })();

  const additionalProps = (() => {
    if (!hasAdditionalProperties) return null;
    return universalLink.additionalProperties.reduce((acc, curr) => {
      acc[curr.property] = curr.value;
      return acc;
    }, {});
  })();

  // return null;
  // return { href };
  return { href, target, rel, ...additionalProps };
};
