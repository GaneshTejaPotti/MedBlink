import React from "react";
import { CirclePlus } from "lucide-react";

const Card = ({ title, field }) => {
  return (
    <div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div class="relative mx-4 -mt-6 mb-4 grid h-20 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-red-300 to-red-600 bg-clip-border text-white shadow-lg shadow-red-500/20">
        <h3 class="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
          {title}
        </h3>
      </div>
      <div class="flex gap-4 p-6">
        <div class="relative h-11 w-full min-w-[200px]">
          <input
            placeholder=""
            class="w-[335px] rounded-md border-2 border-gray-300 px-3 py-2 focus:border-2 focus:border-red-600  focus:outline-0 "
          />
        </div>
      </div>
      <div class="p-6 pt-0">
        <button
          data-ripple-light="true"
          type="button"
          class=" ml-16 flex justify-center  w-[200px] select-none rounded-lg bg-red-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          <CirclePlus />
        </button>
        <p class="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
          Add {field} for Fast Filtering
        </p>
      </div>
    </div>
  );
};

export default Card;
