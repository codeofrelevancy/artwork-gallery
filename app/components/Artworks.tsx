import { useEffect, useCallback } from "react";
import { useRouter } from "next/router";

import Loader from "@/app/components/Loader";
import Artwork from "@/app/components/Artwork";
import Pagination from "@/app/components/Pagination";

import { useAppSelector, useAppDispatch } from "@/app/store/hooks";
import { artworkSelector } from "@/app/store/services/artwork/selectors";
import {
  setArtworks,
  setTotalPages,
  setLoading,
  removeArtwork,
} from "@/app/store/services/artwork/reducers";
import { updateWishlist } from "@/app/store/services/wishlist/reducers";
import { wishlistSelector } from "@/app/store/services/wishlist/selectors";
import { filterSelector } from "@/app/store/services/filter/selectors";
import { ARTWORKS_API, FIELDS, SEARCH_API } from "@/app/constants";

function Artworks() {
  const { pathname } = useRouter();
  const isWishlist = pathname === "/wishlist";

  const dispatch = useAppDispatch();
  const { artworks, currentPage, loading } = useAppSelector(artworkSelector);
  const { wishlist } = useAppSelector(wishlistSelector);
  const { query } = useAppSelector(filterSelector);

  const fetchArtworks = useCallback(
    (page: number) => {
      dispatch(setLoading(true));

      let endpoint = `${process.env.NEXT_PUBLIC_ARTIC_API_HOST}${ARTWORKS_API}`;

      const params = {
        page: page as any,
        fields: FIELDS,
        "query[term][is_public_domain]": true,
      } as any;

      if (isWishlist) {
        params.ids = wishlist?.join(",");
      }

      if (query?.length > 2) {
        endpoint += SEARCH_API;
        params.q = query;
      }
      endpoint += `?${new URLSearchParams(params).toString()}`;

      fetch(endpoint)
        .then((res) => res.json())
        .then((data) => {
          dispatch(setArtworks(data?.data || []));
          dispatch(setTotalPages(data?.pagination?.total_pages || 0));
          dispatch(setLoading(false));
        })
        .catch((error) => {
          console.error(error);
          dispatch(setLoading(false));
        });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [query, wishlist]
  );

  const onWishlist = (id: any) => () => {
    dispatch(updateWishlist(id as any));
    if (isWishlist) {
      dispatch(removeArtwork(id as any));
    }
  };

  useEffect(() => {
    fetchArtworks(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, query]);

  if (loading) {
    return <Loader />;
  }

  if (artworks && artworks.length === 0) {
    return (
      <div className="text-center text-base text-red-600">No artworks</div>
    );
  }

  if (isWishlist && wishlist?.length === 0) {
    return (
      <div className="text-center text-base text-yellow-500">
        Wishlist is empty!
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {artworks?.map((artwork: any) => (
          <Artwork
            key={artwork?.id}
            artwork={artwork}
            onWishlist={onWishlist}
            wishlisted={wishlist?.includes(artwork?.id as never)}
          />
        ))}
      </div>
      <Pagination />
    </>
  );
}

export default Artworks;
