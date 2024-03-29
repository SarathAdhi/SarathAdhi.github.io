import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: "t63li7wo",
  dataset: "production",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN_ID,
  apiVersion: "2023-06-15",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) =>
  builder.image(source).url();
