import React from "react";
import { BookOpen, MessageSquare, AlertTriangle } from "lucide-react";

const Prompting = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <header className="page-header">
          <h1 className="page-title">Introduction to Prompting</h1>
          <p className="page-subtitle">
            Learning how to effectively communicate with AI systems to get the
            best results
          </p>
        </header>

        {/* Introduction Section */}
        <div className="mb-12">
          <h2 className="section-header">
            <BookOpen className="mr-2 text-cyan-600 flex-shrink-0" />
            Welcome to the Art of Prompting
          </h2>
          <p className="text-primary">
            Welcome to the second lesson of our AI training program. Now that
            you've explored what AI is and how it works, it's time to get
            practical. This section introduces you to <strong>prompting</strong>
            —the most important skill you'll need when working with generative
            AI tools like ChatGPT.
          </p>
        </div>

        {/* What Is a Prompt Section */}
        <section className="content-section">
          <h2 className="section-title flex items-center">
            <MessageSquare className="mr-2 text-blue-600 flex-shrink-0" />
            What Is a Prompt?
          </h2>

          <div className="mb-6">
            <p className="text-primary mb-4">
              A <strong>prompt</strong> is simply the instruction or message you
              give to an AI system to get a response. It's how you tell ChatGPT
              what you want—whether you're asking it to summarize a document,
              write a message, brainstorm ideas, or help with scheduling.
            </p>

            <p className="text-primary mb-4">
              Think of it like giving a helpful coworker an assignment. The
              clearer your request, the better the result.
            </p>

            <div className="bg-slate-100 p-4 rounded-lg mb-4 border border-slate-200">
              <h3 className="card-title">Examples of Prompts:</h3>
              <div className="space-y-4">
                <div className="p-3 rounded border border-orange-300 bg-orange-50">
                  <p className="font-medium text-orange-700">
                    🟠 Basic Prompt:
                  </p>
                  <p className="font-mono bg-white p-3 rounded border border-slate-300 text-sm">
                    Write a paragraph about BYU–Idaho.
                  </p>
                </div>

                <div className="p-3 rounded border border-green-300 bg-green-50">
                  <p className="font-medium text-green-700">
                    🟢 Improved Prompt:
                  </p>
                  <p className="font-mono bg-white p-3 rounded border border-slate-300 text-sm">
                    Write a warm and professional welcome message for new
                    BYU–Idaho staff joining the Student Services department.
                  </p>
                </div>
              </div>
              <p className="text-small mt-4">
                Notice the difference? The improved prompt gives the AI context,
                tone, and purpose—which leads to a much more useful output.
              </p>
            </div>
          </div>
        </section>

        {/* Why Prompting Matters Section */}
        <section className="content-section">
          <h2 className="section-title">Why Prompting Matters</h2>

          <div className="mb-6">
            <p className="text-primary mb-4">
              AI tools are powerful, but they rely entirely on what you ask them
              to do. A vague or incomplete prompt can lead to confusing or
              generic results. A clear, well-structured prompt can save time,
              spark creativity, and deliver exactly what you need.
            </p>

            <p className="text-primary mb-4">
              In this lesson, you'll learn how to:
            </p>

            <ul className="list-disc list-outside space-y-2 pl-6 text-primary">
              <li>Write clear and effective prompts</li>
              <li>Try out different prompting styles</li>
              <li>Refine outputs by updating your prompt</li>
              <li>Apply prompting to real BYU–Idaho tasks</li>
            </ul>

            <p className="text-primary mt-4">
              This is a hands-on section—so have ChatGPT open and ready. You'll
              be experimenting with real examples as you go.
            </p>
          </div>

          <div className="note-callout">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-cyan-600"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </div>
              <p className="text-primary">
                <strong>Tip:</strong> If a prompt doesn't give you the result
                you were expecting, don't worry. That's normal! AI works best
                through iteration—try again with more detail, context, or
                structure.
              </p>
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="content-section">
          <h2 className="section-title">Let's Get Started</h2>
          <p className="text-primary mb-4">
            In the upcoming sections, we'll dive deeper into crafting effective
            prompts and explore different techniques to help you get the most
            out of AI tools in your work at BYU-Idaho.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Prompting;
