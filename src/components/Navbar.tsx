import logoSrc from "../assets/logo.svg"; // Adjust path as needed
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link, NavLink, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Fragment, useState } from "react";
import SearchBar from "./SearchBar";

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
    const activeMenuItemClasses = "bg-white/20 text-white";
    const inactiveMenuItemClasses =
      "text-white hover:bg-white/10 hover:text-white";

    const isActive =
      currentPath === path ||
      currentPath === `/${path}` ||
      currentPath.startsWith(`/${path}/`);

    return `${baseMenuItemClasses} ${
      isActive ? activeMenuItemClasses : inactiveMenuItemClasses
    }`;
  };

  // Helper for external links
  const getExternalLinkClass = () => {
    return "block w-full px-4 py-2 text-left text-sm text-white hover:bg-white/10 hover:text-white transition-colors duration-150";
  };

  // Helper for submenu headers
  const getSubmenuHeaderClass = (isActive: boolean) => {
    const baseClass =
      "block w-full px-4 py-2 text-left text-sm font-medium flex justify-between items-center";
    return `${baseClass} ${
      isActive ? "text-white bg-white/20" : "text-white hover:bg-white/10"
    }`;
  };

  // Check if any lesson paths are active
  const isAnyLessonActive = isPathActive([
    "history",
    "capabilities",
    "how-it-works",
    "getting-started",
  ]);

  // Check if any resource paths are active
  const isAnyResourceActive = isPathActive([
    "tool-comparison",
    "product-rankings",
    "glossary",
  ]);

  const toggleSubmenu = (menu: string) => {
    if (activeSubmenu === menu) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(menu);
    }
  };

  return (
    <nav className="navbar shadow-md w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
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
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3 md:space-x-5">
              {/* Home */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${baseLinkClasses} ${
                    isActive ? "bg-white/20 text-white" : "navbar-link"
                  }`
                }
              >
                Home
              </NavLink>

              {/* Prerequisites */}
              <NavLink
                to="/prerequisites"
                className={({ isActive }) =>
                  `${baseLinkClasses} ${
                    isActive ? "bg-white/20 text-white" : "navbar-link"
                  }`
                }
              >
                Prerequisites
              </NavLink>

              {/* Lessons Dropdown */}
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton
                    className={`${baseLinkClasses} ${
                      isAnyLessonActive
                        ? "bg-white/20 text-white"
                        : "navbar-link"
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
                  className="absolute left-0 md:left-auto md:right-0 z-20 mt-2 w-56 origin-top-right rounded-md bg-byui-light-navbar dark:bg-byui-dark-navbar py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[enter]:ease-out data-[leave]:duration-75 data-[leave]:ease-in"
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
                        <div className="pl-2 border-l border-byui-dark-border ml-4 mt-1">
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
                        )} text-white/60 cursor-not-allowed`}
                        disabled
                      >
                        <span>Lesson Two</span>
                        <span className="text-xs text-white/50">
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
                        )} text-white/60 cursor-not-allowed`}
                        disabled
                      >
                        <span>Lesson Three</span>
                        <span className="text-xs text-white/50">
                          (Coming Soon)
                        </span>
                      </button>
                    </div>
                  </Fragment>
                </MenuItems>
              </Menu>

              {/* Activities (formerly Prompt Exercises) */}
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton
                    className={`${baseLinkClasses} ${
                      isPathActive(["minimal", "moderate", "comprehensive"])
                        ? "bg-white/20 text-white"
                        : "navbar-link"
                    } inline-flex items-center`}
                  >
                    Activities
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 size-5"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-20 mt-2 w-56 origin-top-right rounded-md bg-byui-light-navbar dark:bg-byui-dark-navbar py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[enter]:ease-out data-[leave]:duration-75 data-[leave]:ease-in"
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

              {/* Resources Dropdown */}
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton
                    className={`${baseLinkClasses} ${
                      isAnyResourceActive
                        ? "bg-white/20 text-white"
                        : "navbar-link"
                    } inline-flex items-center`}
                  >
                    Resources
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 size-5"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-20 mt-2 w-56 origin-top-right rounded-md bg-byui-light-navbar dark:bg-byui-dark-navbar py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[enter]:ease-out data-[leave]:duration-75 data-[leave]:ease-in"
                >
                  <MenuItem>
                    <Link
                      to="/glossary"
                      className={getMenuItemClass("glossary")}
                    >
                      AI Glossary
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
                  <MenuItem>
                    <Link
                      to="/product-rankings"
                      className={getMenuItemClass("product-rankings")}
                    >
                      Product Rankings
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="https://genai.byu.edu/obtaining-a-chatgpt-edu-license"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={getExternalLinkClass()}
                    >
                      ChatGPT License Info
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="https://www.byui.edu/genai/products#procurement-guidelines"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={getExternalLinkClass()}
                    >
                      Procurement Guidelines
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="https://www.byui.edu/genai/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={getExternalLinkClass()}
                    >
                      Privacy
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>

              {/* About */}
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${baseLinkClasses} ${
                    isActive ? "bg-white/20 text-white" : "navbar-link"
                  }`
                }
              >
                About
              </NavLink>
            </div>

            {/* Add SearchBar and ThemeToggle in a flex container */}
            <div className="flex items-center space-x-2">
              <SearchBar />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
