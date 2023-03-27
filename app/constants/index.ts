export const FIELDS =
  "id,image_id,thumbnail,title,artist_title,latitude,longitude";

export const QUERY_TERM = "query[term][is_public_domain]=true";

export const ARTWORKS_API = `/api/v1/artworks`;
export const SEARCH_API = `/search`;

export const NAVIGATION = [
  {
    route: "/",
    label: "Home",
  },
  {
    route: "/wishlist",
    label: "Wishlist",
  },
];
