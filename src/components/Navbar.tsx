import { useDispatch, useSelector } from "react-redux";
import { changeType } from "../redux/slices/commonSlice";
import { useState } from "react";
import { CommonSlice } from "../types/common";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const { type } = useSelector((state: CommonSlice) => state.common);
  const dispatch = useDispatch();

  // Handle Select
  const handleSelect = (type: string) => {
    dispatch(changeType(type));
    setIsOpen(false);
  };

  return (
    <header className="bg-gray-900 py-4 px-4 md:px-6">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-white font-bold text-lg">
          Random Points Generator
        </a>
        <div className="flex items-center gap-4">
          <div className="relative inline-block text-left">
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
              id="menu-button"
              aria-expanded={isOpen}
              aria-haspopup="true"
              onClick={toggleMenu}
            >
              {type === "field" ? "Field Random Points" : "Excel Random Points"}
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isOpen && (
              <div
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex={-1}
              >
                <div className="py-1" role="none">
                  <div
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-0"
                    onClick={() => handleSelect("field")}
                  >
                    Field Random Points
                  </div>
                  <div
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-1"
                    onClick={() => handleSelect("excel")}
                  >
                    Excel Random Points
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
