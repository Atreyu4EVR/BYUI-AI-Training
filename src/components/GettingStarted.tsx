import React from "react";
import {
  Lightbulb,
  CircleHelp,
  Users,
  MapPin,
  Book,
  Star,
  Navigation,
  PersonStanding,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const GettingStarted = () => {
  return (
    <div className="relative">
      <div className="page-container">
        {/* Start Training Button - positioned to align with container edge */}
        <div className="absolute top-6 right-0 transform -translate-x-6 z-10">
          <Link
            to="/lesson-one"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-medium flex items-center"
          >
            Next: Start Training
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="page-content">
          <header className="page-header">
            <h1 className="page-title">Getting Started</h1>
            <p className="page-subtitle">
              Welcome to the Artificial Intelligence Training for BYU-Idaho
            </p>
          </header>

          {/* What is the Artificial Intelligence Training? */}
          <section className="mb-10">
            <h2 className="section-header">
              <CircleHelp className="mr-2 text-indigo-600" />
              What is this Training?
            </h2>
            <p className="text-primary mb-4">
              This training is designed by the AI team at BYU-Idaho to help you
              understand the basics of artificial intelligence (AI) and how it
              can be used to support your work at BYU-Idaho.
            </p>
          </section>

          {/* Who This Training Is For */}
          <section className="mb-10">
            <h2 className="section-header">
              <Users className="mr-2 text-indigo-600" />
              Who This Training Is For
            </h2>
            <p className="text-primary mb-4">
              Short answer: all BYU-Idaho employees interested in artificial
              intelligence—whether you're tech-savvy or have never worked with
              AI before. The course is designed to make AI concepts
              approachable, giving you practical skills to incorporate these
              powerful tools into your daily work.
            </p>
          </section>

          {/* What You'll Learn */}
          <section className="mb-10">
            <h2 className="section-header">
              <GraduationCap className="mr-2 text-indigo-600" />
              What You'll Learn
            </h2>

            <p className="text-primary mb-4">
              This training covers the fundamentals of artificial intelligence,
              which includes:
            </p>
            <ul className="list-disc pl-5 text-primary space-y-2">
              <li>History and evolution of AI</li>
              <li>Basic concepts and terminology</li>
              <li>Current capabilities of AI</li>
              <li>Brief overview of how AI works</li>
              <li>Best practices for using AI tools</li>
            </ul>
          </section>

          {/* How to Navigate this Training */}
          <section className="mb-10">
            <h2 className="section-header">
              <Navigation className="mr-2 text-indigo-600" />
              How to Navigate this Training
            </h2>

            <p className="text-primary mb-4">
              This training is designed to be interactive and self-paced. Here's
              how to get the most out of it:
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1 mr-3">
                  <span className="text-indigo-600 font-bold">1</span>
                </div>
                <div>
                  <p className="text-primary">
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
                  <p className="text-primary">
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
                  <p className="text-primary">
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
                  <p className="text-primary">
                    <strong>Ask questions:</strong> Don't hesitate to ask for
                    clarification during the training session if anything is
                    unclear.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Prerequisites */}
          <section className="mb-10">
            <h2 className="section-header">
              <MapPin className="mr-2 text-red-500" />
              Prerequisites
            </h2>

            <p className="text-primary mb-4">
              To participate fully in this training, please ensure you have:
            </p>

            <ul className="list-disc pl-5 text-primary space-y-2">
              <li>
                Created a free ChatGPT account using your BYU-Idaho email
                address
              </li>
              <li>Access to your university login credentials</li>
              <li>A basic familiarity with your computer and web browsing</li>
            </ul>

            <div className="note-callout mt-4">
              <p className="text-primary">
                <strong>Note:</strong> No technical background is required for
                this training. We've designed it to be accessible for all
                BYU-Idaho administrators regardless of your previous experience
                with technology.
              </p>
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
    </div>
  );
};

export default GettingStarted;
