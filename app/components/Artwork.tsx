import Image from "next/image";

import classNames from "classnames";

import HeartIcon from "@/app/components/HeartIcon";

function Artwork({ artwork, onWishlist, wishlisted }: any) {
  const onOrigin = () => {
    window.open(
      `https://maps.google.com?q=${artwork?.latitude || "41.8792579767193"},${
        artwork?.longitude || "-87.623834721744"
      }`,
      "_blank"
    );
  };

  return (
    <div className="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 w-full !p-4 3xl:p-![18px]">
      <div className="h-full w-full">
        <div className="relative w-full">
          <Image
            src={`https://artic.edu/iiif/2/${artwork?.image_id}/full/268,268/0/default.jpg`}
            width={268}
            height={268}
            className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
            alt={artwork?.thumbnail?.alt_text || "artwork"}
            priority
          />
          <button
            onClick={onWishlist(artwork?.id)}
            className={classNames(
              "absolute top-3 right-3 flex items-center justify-center rounded-full p-2 hover:cursor-pointer",
              {
                "bg-white text-gray-500": !wishlisted,
                "bg-indigo-800 text-gray-100": wishlisted,
              }
            )}
          >
            <div className="flex h-full w-full items-center justify-center rounded-full text-xl">
              <HeartIcon />
            </div>
          </button>
        </div>
        <div className="mb-3 flex items-center justify-between px-1 md:items-start">
          <div className="mb-2">
            <p className="text-lg font-bold text-navy-700">{artwork?.title}</p>
            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
              By {artwork?.artist_title}
            </p>
          </div>
        </div>
        <button
          onClick={onOrigin}
          className="linear rounded-[20px] bg-indigo-600 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-indigo-800 active:bg-indigo-700"
        >
          Origin
        </button>
      </div>
    </div>
  );
}

export default Artwork;
