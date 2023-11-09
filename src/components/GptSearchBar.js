import React from "react";
import {lang} from "../utils/languageConstants";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12 ">
        <input
          className="m-4 py-2 px-4 col-span-9 rounded-sm"
          type="text"
          placeholder={lang.hindi.gptSearchPlaceHolder}
        />
        <button className="bg-red-700 rounded-sm text-white m-4 py-2 px-4 col-span-3">
          {lang.hindi.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
