"use client";

import Artworks from "@/app/components/Artworks";
import Footer from "@/app/components/Footer";
import Navigation from "@/app/components/Navigation";
import Search from "@/app/components/Search";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <div className="flex items-center justify-center">
              <a href="/">
                <Image
                  src="/logo.png"
                  width={200}
                  height={200}
                  alt="Parimal's Art Gallery"
                  priority
                />
              </a>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A gallery that features a diverse range of artwork in various
              mediums, from paintings to sculpture.
            </p>
          </div>

          <Navigation />

          <div className="mt-10">
            <Artworks />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
