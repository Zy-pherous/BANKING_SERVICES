import React from "react";
import Saly1Icon from "./Saly1Icon";

const Footer = () => {
  return (
    <div className=" mt-2">
      <footer className="bg-white rounded-lg shadow dark:bg-transparent m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="self-center text-6xl font-semibold whitespace-nowrap dark:text-white">
              First Bank
            </span>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li className="text-whitesmoke-100 ">
                <a
                  href="#"
                  className="hover:underline text-whitesmoke-100   me-4 md:me-6"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline text-whitesmoke-100  me-4 md:me-6"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline text-whitesmoke-100  me-4 md:me-6"
                >
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-whitesmoke-100 ">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-whitesmoke-100  sm:text-center ">
            © 2023{" "}
            <a href="/home" className="hover:underline text-stone-600 ">
              First Bank™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
