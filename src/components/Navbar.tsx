import logoSrc from "../assets/logo.svg"; // Adjust path as needed
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  // Determine the active page based on the current URL path
  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  const baseLinkClasses =
    "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200";
  const activeLinkClasses = "bg-slate-700 text-white";
  const inactiveLinkClasses =
    "text-slate-300 hover:bg-slate-700 hover:text-white";

  // Helper for direct links and dropdown buttons
  const getLinkClass = (pageName: string | string[]) => {
    const isActive = Array.isArray(pageName)
      ? pageName.includes(currentPath)
      : currentPath === pageName;
    return `${baseLinkClasses} ${
      isActive ? activeLinkClasses : inactiveLinkClasses
    }`;
  };

  // Helper for dropdown menu items
  const getMenuItemClass = (pageName: string) => {
    const baseMenuItemClasses =
      "block w-full px-4 py-2 text-left text-sm transition-colors duration-150";
    const activeMenuItemClasses = "bg-slate-600 text-white";
    const inactiveMenuItemClasses =
      "text-slate-200 hover:bg-slate-700 hover:text-white";
    return `${baseMenuItemClasses} ${
      currentPath === pageName ? activeMenuItemClasses : inactiveMenuItemClasses
    }`;
  };

  // Helper for placeholder menu items
  const getPlaceholderMenuItemClass = () => {
    const baseMenuItemClasses =
      "block w-full px-4 py-2 text-left text-sm transition-colors duration-150";
    return `${baseMenuItemClasses} text-slate-400 cursor-not-allowed`;
  };

  return (
    <nav className="bg-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a
              href="./index.html"
              className="flex items-center space-x-2 text-white font-semibold"
            >
              <img src={logoSrc} alt="Logo" className="h-10 w-auto" />
              <span>Artificial Intelligence Training</span>
            </a>
          </div>
          <div className="flex items-center">
            <div className="flex space-x-1 md:space-x-2 lg:space-x-4">
              <a href="./index.html" className={getLinkClass("index.html")}>
                Home
              </a>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton
                    className={`${getLinkClass([
                      "history.html",
                      "capabilities.html",
                      "how-it-works.html",
                    ])} inline-flex items-center`}
                  >
                    Lesson One
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 size-5"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute left-0 md:left-auto md:right-0 z-20 mt-2 w-48 origin-top-right rounded-md bg-slate-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[enter]:ease-out data-[leave]:duration-75 data-[leave]:ease-in"
                >
                  <MenuItem>
                    <a href="#" className={getPlaceholderMenuItemClass()}>
                      Intro (TBD)
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="./history.html"
                      className={getMenuItemClass("history.html")}
                    >
                      History
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="./capabilities.html"
                      className={getMenuItemClass("capabilities.html")}
                    >
                      Capabilities
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="./how-it-works.html"
                      className={getMenuItemClass("how-it-works.html")}
                    >
                      How It Works
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
              <a
                href="#"
                className={`${baseLinkClasses} text-slate-500 cursor-not-allowed`}
                title="Coming Soon"
              >
                Lesson Two
              </a>
              <a
                href="#"
                className={`${baseLinkClasses} text-slate-500 cursor-not-allowed`}
                title="Coming Soon"
              >
                Lesson Three
              </a>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton
                    className={`${getLinkClass([
                      "minimal.html",
                      "moderate.html",
                      "comprehensive.html",
                    ])} inline-flex items-center`}
                  >
                    Prompt Exercises
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 size-5"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-md bg-slate-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[enter]:ease-out data-[leave]:duration-75 data-[leave]:ease-in"
                >
                  <MenuItem>
                    <a
                      href="./minimal.html"
                      className={getMenuItemClass("minimal.html")}
                    >
                      Minimal Context
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="./moderate.html"
                      className={getMenuItemClass("moderate.html")}
                    >
                      Moderate Context
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="./comprehensive.html"
                      className={getMenuItemClass("comprehensive.html")}
                    >
                      Comprehensive Context
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
              <a
                href="./prerequisites.html"
                className={getLinkClass("prerequisites.html")}
              >
                Prerequisites
              </a>
              <a href="./about.html" className={getLinkClass("about.html")}>
                About
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
