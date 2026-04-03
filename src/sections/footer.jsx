import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="mt-6 flex justify-center items-center">
        <Image
          src="/img2/temple1.png"
          alt="Temples Silhouette"
          width={2000}
          height={10}
          className="hidden md:block"
        />

        <Image
          src="/img2/temples2.png"
          alt="Temples"
          width={800}
          height={10}
          className="block md:hidden"
        />
      </div>

      <section className="bg-black px-4 py-2 text-center">
        <div className="flex justify-center text-white">
          <p>© {currentYear}{" "}
          <span className="font-bold bg-gradient-to-r from-violet-600 to-orange-400 bg-clip-text text-transparent">
             DD Digital World.
          </span>{" "}All rights reserved</p>
        </div>
      </section>
    </>
  );
}