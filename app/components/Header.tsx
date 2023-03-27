import React from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <div className="mx-auto max-w-2xl sm:text-center">
      <div className="flex items-center justify-center">
        <Link href="/">
          <Image
            src="/logo.png"
            width={200}
            height={200}
            alt="Parimal's Art Gallery"
            priority
          />
        </Link>
      </div>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        A gallery that features a diverse range of artwork in various mediums,
        from paintings to sculpture.
      </p>
    </div>
  );
}

export default Header;
