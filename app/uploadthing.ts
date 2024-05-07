import "server-only"

import { UTApi } from "uploadthing/server";

export const dynamic = 'force-dynamic'

const utapi = new UTApi({
  // Build fails
  apiKey: process.env.UPLOADTHING_SECRET
  // Build passes; secret is corrected at runtime
  // apiKey: process.env.UPLOADTHING_SECRET || "sk_"
});

export const getImages = async () => {
  "use server";
  const { files } = await utapi.listFiles();
  const { data } = await utapi.getFileUrls(files.map((file) => file.key));
  return data;
};