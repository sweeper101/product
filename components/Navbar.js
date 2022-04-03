import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header class=" shadow-lg bg-white sticky top-0">
      <div class="max-w-screen-xl p-3 mx-auto">
        <div class="flex items-center justify-between space-x-4 lg:space-x-10">
          <div class="flex lg:w-0 lg:flex-1">
            <span class="w-20 h-10 bg-gray-200 rounded-lg"></span>
          </div>

          <nav class="hidden space-x-8 text-md font-medium md:flex">
            <a class="text-gray-500" href="">
              About
            </a>
            <a class="text-gray-500" href="">
              Blog
            </a>
            <a class="text-gray-500" href="">
              Projects
            </a>
            <a class="text-gray-500" href="">
              Contact
            </a>
          </nav>

          <div class="items-center justify-end flex-1 hidden space-x-4 sm:flex">
            <a
              class="px-5 py-2 text-md font-medium text-gray-500 bg-gray-100 rounded-lg"
              href=""
            >
              Log in
            </a>

            <a
              class="px-5 py-2 text-md font-medium text-white bg-red-600 rounded-lg"
              href=""
            >
              Sign up
            </a>
          </div>

          <div class="lg:hidden">
            <button
              class="p-2 text-gray-600 bg-gray-100 rounded-lg"
              type="button"
            >
              <span class="sr-only">Open menu</span>
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewbox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
