import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              BYU-Idaho Artificial Intelligence
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.byui.edu/genai"
                  className="hover:text-cyan-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GenAI Site
                </a>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-cyan-300 transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Training Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/prerequisites"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Prerequisites
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/tool-comparison"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Tool Comparison
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="mb-2">Ron Vallejo</p>
            <p>208-496-9002</p>
            <p>vallejor@byui.edu</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-center">
          <p>
            © {year} BYU-Idaho Artificial Intelligence Training. All rights
            reserved.
          </p>
          <p className="mt-2">
            This site is for training purposes only and does not replace
            official policies or procedures.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
