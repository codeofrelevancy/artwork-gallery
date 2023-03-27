import React, { ChangeEvent, useState } from "react";

import SearchIcon from "@/app/components/SearchIcon";
import CrossIcon from "@/app/components/CrossIcon";

import { useAppSelector, useAppDispatch } from "@/app/store/hooks";

import { setQuery, resetQuery } from "@/app/store/services/filter/reducers";
import { filterSelector } from "@/app/store/services/filter/selectors";

function Search() {
  const dispatch = useAppDispatch();
  const { query } = useAppSelector(filterSelector);

  const [iQuery, setIQuery] = useState(query);

  const onQuery = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setIQuery(value);
  };

  const onSearch = () => {
    dispatch(setQuery(iQuery));
  };

  const onResetQuery = () => {
    setIQuery('');
    dispatch(resetQuery());
  };

  return (
    <form className="my-10">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          {iQuery ? <CrossIcon onClick={onResetQuery} /> : <SearchIcon />}
        </div>
        <input
          type="text"
          className="block w-full p-4 pl-10 text-sm rounded-lg bg-gray-200 placeholder-gray-400 text-gray-900"
          placeholder="Search artworks"
          value={iQuery}
          onChange={onQuery}
        />
        <button
          onClick={onSearch}
          type="button"
          className="text-white absolute right-2.5 bottom-2 bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
