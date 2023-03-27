"use client";

import Artworks from "@/app/components/Artworks";
import Footer from "@/app/components/Footer";
import Navigation from "@/app/components/Navigation";
import Header from "@/app/components/Header";

export default function Home() {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Header />
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
