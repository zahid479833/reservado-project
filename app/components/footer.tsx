import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className=" w-full bg-black mx-auto mt-72 relative">
        <div className="w-full max-w-screen-xl  p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center mb-4 sm:mb-0">
              <h2 className="text-2xl text-cyan-600 font-bold ">LOGO</h2>
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                Reservado
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-white sm:text-center">
            © 2023{" "}
            <a href="/" className="hover:underline">
              Reservado™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
