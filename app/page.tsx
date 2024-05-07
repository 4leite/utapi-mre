import { utapi } from "@/app/uploadthing";
import Image from "next/image";

// We don't have uploadthing secrets at build time
export const dynamic = 'force-dynamic'

const getImages = async () => {
  "use server";
  const { files } = await utapi.listFiles();
  const { data } = await utapi.getFileUrls(files.map((file) => file.key));
  return data;
};

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
