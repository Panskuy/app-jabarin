import { SearchIcon } from "lucide-react";
import React from "react";

const Search = ({ onKeywordChange }) => {
  return (
    <section className="w-full bg-yellow-500 rounded-lg px-6 py-4 mb-6 flex flex-col lg:flex-row items-center">
      <h1 className="w-full text-center mb-2 lg:mb-0 lg:text-start font-bold dark:text-black text-3xl ">
        Search
      </h1>
      <div className="w-full flex items-center">
        <input
          type="text"
          placeholder="Cari berdasarkan kata kunci..."
          className="bg-white dark:bg-black h-10 px-4 rounded-md shadow w-full"
          onChange={onKeywordChange}
        />

        <SearchIcon className="-ml-10" />
      </div>
    </section>
  );
};

export default Search;
