import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import ProductCard from "../components/ProductCard";

const productList = [
  {
    id: 1,
    name: "T-Shirt",
    price: 2000,
  },
  {
    id: 2,
    name: "Hoodie",
    price: 4500,
  },
  {
    id: 3,
    name: "Hoodie",
    price: 4500,
  },
  {
    id: 4,
    name: "Hoodie",
    price: 4500,
  },
  {
    id: 5,
    name: "Hoodie",
    price: 4500,
  },
  {
    id: 6,
    name: "Hoodie",
    price: 4500,
  },
  {
    id: 7,
    name: "Hoodie",
    price: 4500,
  },
  {
    id: 8,
    name: "Hoodie",
    price: 4500,
  },
  {
    id: 9,
    name: "Hoodie",
    price: 4500,
  },
  {
    id: 10,
    name: "Hoodie",
    price: 4500,
  },
  {
    id: 11,
    name: "Hoodie",
    price: 4500,
    size:["22","23","24"],
    colour:["red","green"]
  },
  // add more products...
];

const ProductsAll = () => {
  return (
    <div className="bg-[#d9d7d1]">
      <div className="container mx-auto ">
        <div className="flex justify-between sm:px-10 px-3 sm:mx-10">
          <div>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 mt-2">
                  Filter
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 size-5 text-gray-400"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute left-0 z-10 mt-2 w-max origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1 flex sm:flex-row flex-col gap-20">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Price
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Colour
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Size
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </div>
          <form class="flex mt-2">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 mb-1 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-50 sm:w-80  py-2.5 sm:py-2 border-0 ps-10 text-[10px] sm:text-sm bg-white rounded-lg"
                placeholder="Search items..."
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-1.5 sm:bottom-1 bg-[#223531] rounded-lg px-4 text-sm sm:px-4 sm:py-1 py-0.5"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-6">
            {productList.map((product) => (
              <ProductCard key={product.id} product={product} />
              // <ProductCard/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsAll;
