import { Metadata } from "next";

export function createMetadata({
  title,
  description,
}: {
  title: string;
  description: string;
}): Metadata {
  return {
    title,
    description,
    openGraph: {
      ...openGraphDefault,
      title,
      description,
    },
  };
}

export const openGraphDefault = { images: [{ url: "/image/westIamge.webp" }] };
