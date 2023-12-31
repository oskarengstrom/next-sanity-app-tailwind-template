import { createClient } from "@sanity/client";
import { apiVersion, dataset, projectId, useCdn } from "../env";
import { draftMode } from "next/headers";
import { client } from "./client";

export function getClient() {
  const preview = draftMode().isEnabled
    ? { token: process.env.SANITY_API_READ_TOKEN }
    : undefined;

  if (preview) {
    if (!preview.token) {
      throw new Error("You must provide a token to preview drafts");
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: "previewDrafts",
    });
  }
  return client;
}
