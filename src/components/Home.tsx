import { Link } from "react-router-dom";
import chatgptScreenshot from "../assets/chatgpt.png";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient Background */}
      <div className="bg-gradient-to-br from-white to-blue-50 dark:from-byui-dark-background dark:to-byui-dark-navbar pt-12 pb-32 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Hero Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-byui-light-text-primary dark:text-byui-dark-text-primary text-center">
              Introduction to <br className="hidden sm:block" />
              Artificial Intelligence
            </h1>
            <div className="space-y-4 text-left">
              <p className="text-lg text-byui-light-text-secondary dark:text-byui-dark-text-secondary">
                This hands-on training introduces BYU-Idaho employees to
                foundational AI concepts and provides hands-on experience with
                approved tools such as ChatGPT, CoPilot, and Gemini.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link to="/getting-started" className="btn-primary">
                Get started
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center text-byui-dark-blue dark:text-byui-dark-accent-cyan font-medium transition-colors duration-200"
              >
                Learn more <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ChatGPT Screenshot Container */}
      <div className="container mx-auto max-w-5xl px-4 -mt-24 mb-16">
        <div className="bg-white dark:bg-byui-dark-card rounded-xl shadow-lg overflow-hidden">
          {/* Screenshot Header */}
          <div className="bg-gray-50 dark:bg-byui-dark-background p-3 border-b border-gray-200 dark:border-byui-dark-border flex items-center">
            <div className="flex space-x-2 mr-3">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="text-sm font-medium text-byui-light-text-secondary dark:text-byui-dark-text-secondary flex-1 text-center">
              ChatGPT - BYU-Idaho
            </div>
          </div>

          {/* Screenshot Image */}
          <div className="p-1 bg-white dark:bg-gray-900">
            <img
              src={chatgptScreenshot}
              alt="ChatGPT interface screenshot"
              className="w-full h-auto object-cover rounded shadow-inner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
