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

  // Check if any lesson one paths are active
  const isLessonOneActive = isPathActive([
    "lesson-one",
    "getting-started",
    "history",
    "capabilities",
    "how-it-works",
    "prompting",
    "minimal",
  ]);

  // Check if any lesson two paths are active
  const isLessonTwoActive = isPathActive([
    "lesson-two",
    "context-is-everything",
    "prompt-basics",
    "advanced-prompting",
    "moderate",
  ]);

  // Check if any lesson three paths are active
  const isLessonThreeActive = isPathActive([
    "lesson-three",
    "lesson-three-topic-1",
    "lesson-three-topic-2",
    "lesson-three-topic-3",
    "comprehensive",
  ]);

  // Overall check if any lesson is active
  const isAnyLessonActive =
    isLessonOneActive || isLessonTwoActive || isLessonThreeActive;

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
                        className={getSubmenuHeaderClass(isLessonOneActive)}
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
                              to="/lesson-one"
                              className={getMenuItemClass("lesson-one")}
                            >
                              Overview
                            </Link>
                          </MenuItem>
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
                              to="/prompting"
                              className={getMenuItemClass("prompting")}
                            >
                              Introduction to Prompting
                            </Link>
                          </MenuItem>
                          <MenuItem>
                            <Link
                              to="/minimal"
                              className={getMenuItemClass("minimal")}
                            >
                              Activity: Minimal Context
                            </Link>
                          </MenuItem>
                        </div>
                      )}
                    </div>
                  </Fragment>

                  {/* Lesson Two Submenu */}
                  <Fragment>
                    <div className="px-1 py-1">
                      <button
                        onClick={() => toggleSubmenu("lessonTwo")}
                        className={getSubmenuHeaderClass(isLessonTwoActive)}
                      >
                        <span>Lesson Two</span>
                        <ChevronRightIcon
                          className={`size-4 transition-transform duration-200 ${
                            activeSubmenu === "lessonTwo" ? "rotate-90" : ""
                          }`}
                        />
                      </button>

                      {activeSubmenu === "lessonTwo" && (
                        <div className="pl-2 border-l border-byui-dark-border ml-4 mt-1">
                          <MenuItem>
                            <Link
                              to="/lesson-two"
                              className={getMenuItemClass("lesson-two")}
                            >
                              Overview
                            </Link>
                          </MenuItem>
                          <MenuItem>
                            <Link
                              to="/context-is-everything"
                              className={getMenuItemClass(
                                "context-is-everything"
                              )}
                            >
                              Context is Everything
                            </Link>
                          </MenuItem>
                          <MenuItem>
                            <Link
                              to="/prompt-basics"
                              className={getMenuItemClass("prompt-basics")}
                            >
                              Prompt Basics
                            </Link>
                          </MenuItem>
                          <MenuItem>
                            <Link
                              to="/advanced-prompting"
                              className={getMenuItemClass("advanced-prompting")}
                            >
                              Advanced Prompting
                            </Link>
                          </MenuItem>
                          <MenuItem>
                            <Link
                              to="/moderate"
                              className={getMenuItemClass("moderate")}
                            >
                              Activity: Moderate Context
                            </Link>
                          </MenuItem>
                        </div>
                      )}
                    </div>
                  </Fragment>

                  {/* Lesson Three Submenu */}
                  <Fragment>
                    <div className="px-1 py-1">
                      <button
                        onClick={() => toggleSubmenu("lessonThree")}
                        className={getSubmenuHeaderClass(isLessonThreeActive)}
                      >
                        <span>Lesson Three</span>
                        <ChevronRightIcon
                          className={`size-4 transition-transform duration-200 ${
                            activeSubmenu === "lessonThree" ? "rotate-90" : ""
                          }`}
                        />
                      </button>

                      {activeSubmenu === "lessonThree" && (
                        <div className="pl-2 border-l border-byui-dark-border ml-4 mt-1">
                          <MenuItem>
                            <Link
                              to="/lesson-three"
                              className={getMenuItemClass("lesson-three")}
                            >
                              Overview
                            </Link>
                          </MenuItem>
                          <MenuItem>
                            <Link
                              to="/lesson-three-topic-1"
                              className={getMenuItemClass(
                                "lesson-three-topic-1"
                              )}
                            >
                              Placeholder 1
                            </Link>
                          </MenuItem>
                          <MenuItem>
                            <Link
                              to="/lesson-three-topic-2"
                              className={getMenuItemClass(
                                "lesson-three-topic-2"
                              )}
                            >
                              Placeholder 2
                            </Link>
                          </MenuItem>
                          <MenuItem>
                            <Link
                              to="/lesson-three-topic-3"
                              className={getMenuItemClass(
                                "lesson-three-topic-3"
                              )}
                            >
                              Placeholder 3
                            </Link>
                          </MenuItem>
                          <MenuItem>
                            <Link
                              to="/comprehensive"
                              className={getMenuItemClass("comprehensive")}
                            >
                              Activity: Comprehensive Context
                            </Link>
                          </MenuItem>
                        </div>
                      )}
                    </div>
                  </Fragment>
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
