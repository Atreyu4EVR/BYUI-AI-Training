import React from "react";
import { BookOpen, MessageSquare, Info } from "lucide-react";
import robotCartoon from "../assets/robot_cartoon.png";

const ContextIsEverything = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <header className="page-header">
          <h1 className="page-title">Context is Everything</h1>
          <p className="page-subtitle">
            Understanding why context is crucial for effective AI prompting
          </p>
        </header>

        {/* Main Content Section */}
        <section className="content-section">
          <h2 className="section-header">
            <BookOpen className="mr-2 text-cyan-600 flex-shrink-0" />
            The Importance of Context
          </h2>

          <p className="text-primary mb-4">
            When working with AI, context is the set of background information,
            instructions, expectations, and framing that you provide to the AI
            system to guide its output. Unlike humans, AI models do not have
            shared experiences or institutional knowledge. They rely entirely on
            what you type into the prompt to understand your intent.
          </p>

          <p className="text-primary mb-4">
            Imagine giving a presentation with no introduction, no agenda, and
            no explanation of who your audience is—you'd leave listeners
            confused. The same happens when you prompt AI without clear context.
            By supplying it with just enough guidance, you can dramatically
            improve the usefulness and accuracy of what it generates.
          </p>

          <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">
            Why Context Matters
          </h3>

          <p className="text-primary mb-4">
            Context is the foundation of effective AI prompting. It ensures that
            the AI understands your intent and produces results that are
            relevant and useful.
          </p>

          <p className="text-primary mb-4">
            When context is missing, generative AI often produces responses
            that:
          </p>

          <ul className="list-disc list-outside space-y-1 pl-6 text-primary mb-4">
            <li>Feel vague or generic, lacking specificity or clarity.</li>
            <li>
              Contain inaccuracies, because the system is forced to "fill in the
              blanks."
            </li>
            <li>Use the wrong tone or voice for the situation.</li>
            <li>
              Include content that doesn't align with your role, department, or
              institutional expectations.
            </li>
          </ul>

          <p className="text-primary mb-4">
            But with context-rich prompting, you shift from "guess what I want"
            to "here's what I need." The difference can be night and day.
            Experts in prompt engineering stress that properly structured
            context is the single most important factor for obtaining quality
            responses that provide clarity, quality, and efficiency.
          </p>

          <div className="card-grid">
            <div className="content-card border-cyan-200">
              <h3 className="card-title">Clarity</h3>
              <p className="text-small">
                Reduces wasted time. When AI outputs are accurate and
                well-structured, you avoid the need for multiple revisions.
              </p>
            </div>

            <div className="content-card border-purple-200">
              <h3 className="card-title">Quality</h3>
              <p className="text-small">
                Reflects university standards. Emails, documents, or summaries
                generated with clear prompts are more likely to meet the tone
                and professionalism expected.
              </p>
            </div>

            <div className="content-card border-green-200">
              <h3 className="card-title">Efficiency</h3>
              <p className="text-small">
                Supports stewardship. AI can be a time-saving partner when
                guided effectively, allowing you to focus on high-value human
                work.
              </p>
            </div>
          </div>

          <div className="flex justify-center my-8">
            <div className="flex flex-col items-center">
              <img
                src={robotCartoon}
                alt="Robot cartoon illustrating AI assistance"
                className="rounded-lg shadow-md max-w-full md:max-w-md"
              />
              <p className="text-xs text-slate-500 italic mt-2 text-center">
                ⛨ This illustration was AI-generated with ChatGPT.
              </p>
            </div>
          </div>
        </section>

        {/* Components of Effective Contextual Prompts */}
        <section className="content-section">
          <h2 className="section-title flex items-center">
            <Info className="mr-2 text-blue-600 flex-shrink-0" />
            Components of Effective Contextual Prompts
          </h2>

          <p className="text-primary mb-6">
            Effective context is layered. These core components work together to
            steer the AI:
          </p>

          <div className="numbered-list">
            <div className="numbered-item">
              <div className="number-circle">
                <span className="number">1</span>
              </div>
              <div>
                <p className="text-primary font-semibold">Audience</p>
                <p className="text-primary">
                  Specify who the content is meant for. This helps the AI match
                  tone, level of detail, and vocabulary.
                </p>
                <p className="text-small italic text-slate-600 dark:text-slate-400 mt-1">
                  Example: "Write an announcement for BYU-Idaho students about
                  updated library hours during finals week."
                </p>
              </div>
            </div>

            <div className="numbered-item">
              <div className="number-circle">
                <span className="number">2</span>
              </div>
              <div>
                <p className="text-primary font-semibold">Purpose</p>
                <p className="text-primary">
                  Clarify what you want the content to accomplish. Is it meant
                  to inform, persuade, guide, or summarize?
                </p>
                <p className="text-small italic text-slate-600 dark:text-slate-400 mt-1">
                  Example: "Summarize the key decisions from the academic
                  council meeting for internal use by department chairs."
                </p>
              </div>
            </div>

            <div className="numbered-item">
              <div className="number-circle">
                <span className="number">3</span>
              </div>
              <div>
                <p className="text-primary font-semibold">Tone</p>
                <p className="text-primary">
                  Tell the AI what voice or style to use: professional,
                  friendly, formal, spiritual, encouraging, etc.
                </p>
                <p className="text-small italic text-slate-600 dark:text-slate-400 mt-1">
                  Example: "Write a spiritually uplifting message to BYU-Idaho
                  staff encouraging participation in this semester's devotional
                  series."
                </p>
              </div>
            </div>

            <div className="numbered-item">
              <div className="number-circle">
                <span className="number">4</span>
              </div>
              <div>
                <p className="text-primary font-semibold">Details</p>
                <p className="text-primary">
                  Include any key facts, constraints, or references that should
                  be built into the output. This might include dates, word
                  count, policies, or format instructions.
                </p>
                <p className="text-small italic text-slate-600 dark:text-slate-400 mt-1">
                  Example: "Write a 250-word summary of the GenAI training
                  session that includes the training date, topics covered, and a
                  call to action."
                </p>
              </div>
            </div>
          </div>

          <p className="text-primary mt-6">
            These pieces form the foundation of clarity. The more you supply
            them, the more useful your results will be.
          </p>
        </section>

        {/* Next Steps */}
        <div className="flex justify-center mt-10">
          <a
            href="/prompt-basics"
            className="btn-primary flex items-center group"
          >
            <span>Continue to Prompt Basics</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContextIsEverything;
