import logoSrc from "../assets/logo.svg"; // Adjust path as needed
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link, NavLink, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Fragment, useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const baseLinkClasses =
    "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200";
  const activeLinkClasses = "bg-slate-700 text-white dark:bg-slate-600";
  const inactiveLinkClasses =
    "text-slate-300 hover:bg-slate-700 hover:text-white dark:hover:bg-slate-600";

  // Helper for dropdown buttons
  const isPathActive = (paths: string[]) => {
    return paths.some(
      (path) =>
        currentPath === path ||
        currentPath === `/${path}` ||
        currentPath.startsWith(`/${path}/`)
    );
  };

  // Helper for dropdown menu items
  const getMenuItemClass = (path: string) => {
    const baseMenuItemClasses =
      "block w-full px-4 py-2 text-left text-sm transition-colors duration-150";
    const activeMenuItemClasses = "bg-slate-600 text-white dark:bg-slate-500";
    const inactiveMenuItemClasses =
      "text-slate-200 hover:bg-slate-700 hover:text-white dark:hover:bg-slate-500";

    const isActive =
      currentPath === path ||
      currentPath === `/${path}` ||
      currentPath.startsWith(`/${path}/`);

    return `${baseMenuItemClasses} ${
      isActive ? activeMenuItemClasses : inactiveMenuItemClasses
    }`;
  };

  // Helper for submenu headers
  const getSubmenuHeaderClass = (isActive: boolean) => {
    const baseClass =
      "block w-full px-4 py-2 text-left text-sm font-medium flex justify-between items-center";
    return `${baseClass} ${
      isActive ? "text-white" : "text-slate-200 hover:text-white"
    }`;
  };

  // Check if any lesson paths are active
  const isAnyLessonActive = isPathActive([
    "history",
    "capabilities",
    "how-it-works",
    "getting-started",
    "tool-comparison",
  ]);

  const toggleSubmenu = (menu: string) => {
    if (activeSubmenu === menu) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(menu);
    }
  };

  return (
    <nav className="bg-slate-800 shadow-md dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="flex items-center space-x-2 text-white font-semibold"
            >
              <img src={logoSrc} alt="Logo" className="h-10 w-auto" />
              <span>Artificial Intelligence Training</span>
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <div className="flex space-x-1 md:space-x-2 lg:space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${baseLinkClasses} ${
                    isActive ? activeLinkClasses : inactiveLinkClasses
                  }`
                }
              >
                Home
              </NavLink>

              {/* Consolidated Lessons Dropdown */}
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton
                    className={`${baseLinkClasses} ${
                      isAnyLessonActive
                        ? activeLinkClasses
                        : inactiveLinkClasses
                    } inline-flex items-center`}
                  >
                    Lessons
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 size-5"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute left-0 md:left-auto md:right-0 z-20 mt-2 w-56 origin-top-right rounded-md bg-slate-800 dark:bg-slate-700 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[enter]:ease-out data-[leave]:duration-75 data-[leave]:ease-in"
                >
                  {/* Lesson One Submenu */}
                  <Fragment>
                    <div className="px-1 py-1">
                      <button
                        onClick={() => toggleSubmenu("lessonOne")}
                        className={getSubmenuHeaderClass(
                          isPathActive([
                            "history",
                            "capabilities",
                            "how-it-works",
                            "getting-started",
                          ])
                        )}
                      >
                        <span>Lesson One</span>
                        <ChevronRightIcon
                          className={`size-4 transition-transform duration-200 ${
                            activeSubmenu === "lessonOne" ? "rotate-90" : ""
                          }`}
                        />
                      </button>

                      {activeSubmenu === "lessonOne" && (
                        <div className="pl-2 border-l border-slate-600 ml-4 mt-1">
                          <MenuItem>
                            <Link
                              to="/getting-started"
                              className={getMenuItemClass("getting-started")}
                            >
                              Getting Started
                            </Link>
                          </MenuItem>
                          <MenuItem>
                            <Link
                              to="/history"
                              className={getMenuItemClass("history")}
                            >
                              History
                            </Link>
                          </MenuItem>
                          <MenuItem>
                            <Link
                              to="/capabilities"
                              className={getMenuItemClass("capabilities")}
                            >
                              Capabilities
                            </Link>
                          </MenuItem>
                          <MenuItem>
                            <Link
                              to="/how-it-works"
                              className={getMenuItemClass("how-it-works")}
                            >
                              How It Works
                            </Link>
                          </MenuItem>
                          <MenuItem>
                            <Link
                              to="/tool-comparison"
                              className={getMenuItemClass("tool-comparison")}
                            >
                              Tool Comparison
                            </Link>
                          </MenuItem>
                        </div>
                      )}
                    </div>
                  </Fragment>

                  {/* Lesson Two Placeholder */}
                  <Fragment>
                    <div className="px-1 py-1">
                      <button
                        className={`${getSubmenuHeaderClass(
                          false
                        )} text-slate-400 cursor-not-allowed`}
                        disabled
                      >
                        <span>Lesson Two</span>
                        <span className="text-xs text-slate-500">
                          (Coming Soon)
                        </span>
                      </button>
                    </div>
                  </Fragment>

                  {/* Lesson Three Placeholder */}
                  <Fragment>
                    <div className="px-1 py-1">
                      <button
                        className={`${getSubmenuHeaderClass(
                          false
                        )} text-slate-400 cursor-not-allowed`}
                        disabled
                      >
                        <span>Lesson Three</span>
                        <span className="text-xs text-slate-500">
                          (Coming Soon)
                        </span>
                      </button>
                    </div>
                  </Fragment>
                </MenuItems>
              </Menu>

              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton
                    className={`${baseLinkClasses} ${
                      isPathActive(["minimal", "moderate", "comprehensive"])
                        ? activeLinkClasses
                        : inactiveLinkClasses
                    } inline-flex items-center`}
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
                  className="absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-md bg-slate-800 dark:bg-slate-700 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[enter]:ease-out data-[leave]:duration-75 data-[leave]:ease-in"
                >
                  <MenuItem>
                    <Link to="/minimal" className={getMenuItemClass("minimal")}>
                      Minimal Context
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/moderate"
                      className={getMenuItemClass("moderate")}
                    >
                      Moderate Context
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/comprehensive"
                      className={getMenuItemClass("comprehensive")}
                    >
                      Comprehensive Context
                    </Link>
                  </MenuItem>
                </MenuItems>
              </Menu>

              <NavLink
                to="/prerequisites"
                className={({ isActive }) =>
                  `${baseLinkClasses} ${
                    isActive ? activeLinkClasses : inactiveLinkClasses
                  }`
                }
              >
                Prerequisites
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${baseLinkClasses} ${
                    isActive ? activeLinkClasses : inactiveLinkClasses
                  }`
                }
              >
                About
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
