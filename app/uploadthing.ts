import "server-only"

import { UTApi } from "uploadthing/server";

// Removing '|| "sk_"' fails to build in CI (ie github) with vercel sensitive secrets
export const utapi = new UTApi({apiKey: process.env.UPLOADTHING_SECRET || "sk_"});
