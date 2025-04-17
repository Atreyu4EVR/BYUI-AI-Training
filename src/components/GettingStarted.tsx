import React from "react";
import { Lightbulb, Users, MapPin, Book, Star, Navigation } from "lucide-react";

const GettingStarted = () => {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            Getting Started with AI
          </h1>
          <p className="text-lg text-slate-600">
            Welcome to our AI training program designed specifically for
            BYU-Idaho administrators. Whether you're curious about AI or feeling
            a bit uncertain about its relevance to your work, this training will
            provide you with a solid foundation and practical skills for using
            AI tools effectively in your administrative role.
          </p>
        </header>

        {/* What You'll Learn */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
            <Book className="mr-2 text-green-600" />
            What You'll Learn in Lesson One
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-5 rounded-lg shadow-md border-t-4 border-cyan-400">
              <h3 className="font-bold text-slate-800 mb-2">History of AI</h3>
              <p className="text-slate-700">
                Discover the key milestones in AI development from theoretical
                concepts to today's powerful tools that are changing how we
                work.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-md border-t-4 border-green-400">
              <h3 className="font-bold text-slate-800 mb-2">AI Capabilities</h3>
              <p className="text-slate-700">
                Explore what different types of AI systems can (and cannot) do,
                with a focus on text, vision, audio, and multimodal AI.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-md border-t-4 border-purple-400">
              <h3 className="font-bold text-slate-800 mb-2">How AI Works</h3>
              <p className="text-slate-700">
                Learn the fundamental concepts behind AI systems like
                tokenization and prediction in accessible, non-technical
                language.
              </p>
            </div>
          </div>
        </section>

        {/* How to Navigate this Training */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
            <Navigation className="mr-2 text-indigo-600" />
            How to Navigate this Training
          </h2>

          <div className="bg-white p-5 rounded-lg shadow-md">
            <p className="text-slate-700 mb-4">
              This training is designed to be interactive and self-paced. Here's
              how to get the most out of it:
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1 mr-3">
                  <span className="text-indigo-600 font-bold">1</span>
                </div>
                <div>
                  <p className="text-slate-700">
                    <strong>Follow the sequence:</strong> Use the navigation
                    buttons at the top of the page to move through the lessons.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1 mr-3">
                  <span className="text-indigo-600 font-bold">2</span>
                </div>
                <div>
                  <p className="text-slate-700">
                    <strong>Try the exercises:</strong> Complete the AI
                    prompting exercises to apply what you've learned. There's no
                    better way to learn than by doing.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1 mr-3">
                  <span className="text-indigo-600 font-bold">3</span>
                </div>
                <div>
                  <p className="text-slate-700">
                    <strong>Take notes:</strong> Jot down ideas for how you
                    might apply AI tools to your specific administrative
                    responsibilities.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1 mr-3">
                  <span className="text-indigo-600 font-bold">4</span>
                </div>
                <div>
                  <p className="text-slate-700">
                    <strong>Ask questions:</strong> Don't hesitate to ask for
                    clarification during the training session if anything is
                    unclear.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prerequisites */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
            <MapPin className="mr-2 text-red-500" />
            Prerequisites
          </h2>

          <div className="bg-white p-5 rounded-lg shadow-md">
            <p className="text-slate-700 mb-4">
              To participate fully in this training, please ensure you have:
            </p>

            <ul className="list-disc pl-5 text-slate-700 space-y-2">
              <li>
                Created a free ChatGPT account using your BYU-Idaho email
                address
              </li>
              <li>Access to your university login credentials</li>
              <li>A basic familiarity with your computer and web browsing</li>
            </ul>

            <div className="mt-4 bg-amber-50 p-4 rounded-lg">
              <p className="text-slate-700">
                <strong>Note:</strong> No technical background is required for
                this training. We've designed it to be accessible for all
                BYU-Idaho administrators regardless of your previous experience
                with technology.
              </p>
            </div>
          </div>
        </section>

        <footer className="text-center text-slate-500 text-sm border-t border-slate-200 pt-4">
          <p>
            This training aligns with
            <a
              href="https://www.byui.edu/genai/"
              className="text-cyan-600 hover:underline mx-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              BYU-Idaho's AI Guidelines
            </a>
            and is designed to support the university's mission.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default GettingStarted;
