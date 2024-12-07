import React, { useState } from 'react';
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Sidebar: React.FC = () => {
  const [sidebarWidth, setSidebarWidth] = useState(256); // Default sidebar width
  const [isEcommerceOpen, setIsEcommerceOpen] = useState(false); // State to handle multi-level menu visibility

  // Function to handle resizing of the sidebar width
  const handleMouseDown = (e: React.MouseEvent) => {
    const initialX = e.clientX;
    const initialWidth = sidebarWidth;

    const handleMouseMove = (e: MouseEvent) => {
      const deltaX = e.clientX - initialX;
      setSidebarWidth(initialWidth + deltaX);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div>
      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 left-0 z-40 bg-gray-50 dark:bg-gray-800 transition-transform flex flex-col justify-between"
        aria-label="Sidebar"
        style={{ width: `${sidebarWidth}px`, height: '100vh' }} // Dynamic width and full height
      >
        <div className="h-full px-3 py-4 overflow-y-auto flex flex-col justify-between">
          <ul className="space-y-2 font-medium flex-grow flex flex-col items-center">
            {/* Corrina multi-level menu */}
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 justify-center"
                aria-controls="dropdown-example"
                onClick={() => setIsEcommerceOpen(!isEcommerceOpen)} // Toggle multi-level menu
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 21"
                >
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                </svg>
                <span className={`flex-1 ms-2 text-2xl text-left whitespace-nowrap ${caveat.className}`}>
                  Corinna
                </span>
              </button>
              {isEcommerceOpen && ( // Conditional rendering for the multi-level menu
                <ul id="dropdown-example" className="py-2 space-y-2 pl-11">
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      <svg
                        className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0l2 4h4l-3 3 1 4-3-2-3 2 1-4-3-3h4z" />
                      </svg>
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      <svg
                        className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0l2 4h4l-3 3 1 4-3-2-3 2 1-4-3-3h4z" />
                      </svg>
                      Billing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      <svg
                        className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0l2 4h4l-3 3 1 4-3-2-3 2 1-4-3-3h4z" />
                      </svg>
                      Invoice
                    </a>
                  </li>
                </ul>
              )}
            </li>
            {/* Text options with icons */}
            <div className='border-t border-gray-200'></div>
            <li className='border-t border-gray-200'>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group justify-center"
              >
                <svg
                  className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0l2 4h4l-3 3 1 4-3-2-3 2 1-4-3-3h4z" />
                </svg>
                <span className="ms-2">Text 1</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group justify-center"
              >
                <svg
                  className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0l2 4h4l-3 3 1 4-3-2-3 2 1-4-3-3h4z" />
                </svg>
                <span className="ms-2">Text 2</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group justify-center"
              >
                <svg
                  className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0l2 4h4l-3 3 1 4-3-2-3 2 1-4-3-3h4z" />
                </svg>
                <span className="ms-2">Text 3</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group justify-center"
              >
                <svg
                  className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0l2 4h4l-3 3 1 4-3-2-3 2 1-4-3-3h4z" />
                </svg>
                <span className="ms-2">Text 4</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Sign out button */}
        <div className="pb-4 pt-2">
          <button
            onClick={() => alert('Signing out...')}
            className="w-15 px-6 py-2 text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
            aria-label="Sign out"
          >
            Sign Out
          </button>
        </div>


        {/* Resizer */}
        <div
          onMouseDown={handleMouseDown}
          className="absolute right-0 top-0 bottom-0 w-2 cursor-ew-resize bg-gray-400"
        />
      </aside>
    </div>
  );
};

export default Sidebar;
