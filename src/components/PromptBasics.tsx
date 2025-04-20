import React from "react";
import { BookOpen, MessageSquare, Info, Lightbulb } from "lucide-react";

const PromptBasics = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <header className="page-header">
          <h1 className="page-title">
            Understanding AI Prompts: Beyond the Basics
          </h1>
          <p className="page-subtitle">
            Learning how Large Language Models work and how to communicate with
            them effectively
          </p>
        </header>

        {/* Introduction Section */}
        <div className="mb-12">
          <h2 className="section-header">
            <BookOpen className="mr-2 text-cyan-600 flex-shrink-0" />
            What is an AI Prompt?
          </h2>

          <p className="text-primary mb-4">
            An AI prompt is the input or instruction you provide to a Large
            Language Model (LLM) through interfaces like ChatGPT or
            Claude—guiding it to generate specific responses or perform
            particular tasks. These inputs can take various forms: questions,
            commands, statements, code samples, or even multimedia elements like
            images or audio files, depending on the AI platform's capabilities.
          </p>
        </div>

        {/* How LLMs Work Section */}
        <section className="content-section">
          <h2 className="section-title flex items-center">
            <MessageSquare className="mr-2 text-blue-600 flex-shrink-0" />
            The Foundation: How LLMs Actually Work
          </h2>

          <p className="text-primary mb-4">
            Before exploring "how" to prompt AI effectively, let's understand
            the underlying mechanics that make these models work. This
            foundation will directly influence your approach to prompting.
          </p>

          <p className="text-primary mb-4">
            Many have marketed prompt engineering as an exclusive "art"
            accessible only to specialists. In reality, prompt engineering is
            simply the process of learning to communicate effectively with an
            LLM—much like learning to communicate clearly with a new colleague.
          </p>

          <p className="text-primary mb-4">
            The better you understand the "why" behind prompt engineering, the
            more naturally you'll grasp "how" to craft effective prompts.
          </p>

          <section className="content-section">
            <h2 className="section-title flex items-center">
              <MessageSquare className="mr-2 text-blue-600 flex-shrink-0" />
              The Technical Reality
            </h2>
            <p className="text-primary mb-4">
              Large Language Models undergo two critical training phases:
            </p>
            <ol>
              <li>
                <strong>Pre-training on diverse data</strong>: LLMs absorb
                information from books, websites, and various text sources,
                building a comprehensive understanding of language patterns and
                world knowledge.
              </li>
              <li>
                <strong>Instruction tuning</strong>: Models like those powering
                ChatGPT and Copilot undergo additional specialized training
                where engineers teach them to follow instructions and infer user
                intent from context.
              </li>
            </ol>
            <p className="text-primary mb-4">
              During this refinement process, model responses are systematically
              evaluated on how well they satisfy intended requests. Engineers
              employ sophisticated machine learning techniques, including
              reinforcement learning, to iteratively enhance the model's ability
              to recognize intent and follow instructions accurately.
            </p>
            <p className="text-primary mb-4">
              This dual-phase training creates systems that are not only
              remarkably intelligent but also impressively
              "conversational"—capable of understanding what you're asking for
              even when your instructions aren't perfectly formulated.
            </p>
          </section>

          <div className="note-callout mt-6 border-l-4 border-blue-500">
            <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
              Gospel Parallel: "Come, Follow Me" as Divine Instruction-Tuning
            </h3>
            <p className="text-primary">
              It's not enough for the AI to be smart; it must also learn to
              follow instructions consistently, clearly, and humbly. The Lord
              teaches us in much the same way.
            </p>
            <p className="text-primary mt-2">
              In the scriptures, God often uses repetition to reinforce divine
              commandments:
            </p>
            <ul className="list-disc list-inside space-y-1 text-primary mt-2">
              <li>"If ye love me, keep my commandments" (John 14:15)</li>
              <li>"Come, follow me" (Luke 18:22)</li>
              <li>"Line upon line, precept upon precept" (2 Nephi 28:30)</li>
              <li>"I will try you and prove you in all things" (D&C 98:12)</li>
            </ul>
            <p className="text-primary mt-2">
              This repetition isn't a sign of forgetfulness—it's a spiritually
              optimized training technique. The Lord is teaching us how to
              become more responsive to divine guidance.
            </p>
            <p className="text-primary mt-2">
              Just as AI learns by repeated examples and feedback, we grow as
              disciples through repeated experiences, correction, and practice.
              And just like AI models improve when they listen more closely, we
              too become more capable when we respond to God's instructions with
              increasing clarity and faith.
            </p>
          </div>
        </section>

        {/* Key Insights Section */}
        <section className="content-section">
          <h2 className="section-title flex items-center">
            <Lightbulb className="mr-2 text-amber-500 flex-shrink-0" />
            Key Insights for Prompt Engineering
          </h2>

          <div className="card-grid">
            <div className="content-card border-amber-200">
              <h3 className="card-title">Focus on Intent</h3>
              <p className="text-small">
                Modern LLMs are trained to understand intent, not just follow
                literal instructions. Be clear about what you're trying to
                accomplish.
              </p>
            </div>

            <div className="content-card border-amber-200">
              <h3 className="card-title">Start Simple, Then Refine</h3>
              <p className="text-small">
                Begin with simple instructions and refine them based on the
                responses. This iterative approach often works better than
                trying to craft perfect prompts immediately.
              </p>
            </div>

            <div className="content-card border-amber-200">
              <h3 className="card-title">Think in Conversations</h3>
              <p className="text-small">
                AI interactions work best as conversations. Don't hesitate to
                follow up, clarify, or redirect if the initial response doesn't
                meet your needs.
              </p>
            </div>

            <div className="content-card border-amber-200">
              <h3 className="card-title">Include Examples</h3>
              <p className="text-small">
                When possible, include examples of the type of output you're
                looking for. This significantly improves the relevance and
                quality of responses.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <div className="flex justify-center mt-10">
          <a
            href="/advanced-prompting"
            className="btn-primary flex items-center group"
          >
            <span>Continue to Advanced Prompting</span>
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

export default PromptBasics;
