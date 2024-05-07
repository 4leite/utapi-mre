import Image from "next/image";
import { getImages } from "./uploadthing";

// We don't have uploadthing secrets at build time
export const dynamic = 'force-dynamic'

export default async function Home() {
  const images = await getImages();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {images.map(({ key, url }) => (
        <Image key={key} src={url} alt={key} width={200} height={200} />
      ))}
    </main>
  );
}
