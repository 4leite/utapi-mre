import { getImages } from "./uploadthing";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={async () => {
        const images = await getImages();
        console.log(images);
      }} />
    </main>
  );
}
