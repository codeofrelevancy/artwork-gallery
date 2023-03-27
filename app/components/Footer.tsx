import React from "react";

function Footer() {
  return (
    <footer className="mb-5">
      <div className="w-full mx-auto container md:p-6 p-4 text-center">
        <span className="text-sm text-gray-500">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Parimal's Art Gallery
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
