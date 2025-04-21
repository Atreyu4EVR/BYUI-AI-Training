import React from "react";
import { BookOpen, MessageSquare, Code, AlertTriangle } from "lucide-react";

const AdvancedPrompting = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <header className="page-header">
          <h1 className="page-title">Advanced Prompting</h1>
          <p className="page-subtitle">
            Advanced techniques for crafting effective prompts for AI systems
          </p>
        </header>

        {/* Core Principles Section */}
        <section className="content-section">
          <h2 className="section-header">
            <BookOpen className="mr-2 text-cyan-600 flex-shrink-0" />
            Core Principles for Effective Prompting
          </h2>

          <p className="text-primary mb-4">
            Understanding how LLMs work reveals several key principles that lead
            to more effective prompts:
          </p>

          <div className="content-card mb-6">
            <h3 className="card-title">1. Be Clear and Specific</h3>
            <p className="text-small mb-2">
              LLMs respond best to clear, direct instructions. Vague prompts
              typically yield vague responses. Consider the difference:
            </p>
            <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded text-xs">
              <p className="text-red-500 mb-1">
                <strong>Vague</strong>: "Tell me about AI."
              </p>
              <p className="text-green-600">
                <strong>Specific</strong>: "Explain three ways AI is currently
                being used in higher education administration, with specific
                examples from universities similar to BYU-Idaho."
              </p>
            </div>
          </div>

          <div className="content-card mb-6">
            <h3 className="card-title">2. Provide Context and Constraints</h3>
            <p className="text-small mb-2">
              Models lack the ability to ask clarifying questions (unless
              specifically designed for multi-turn conversations). Providing
              relevant context helps the model understand your needs:
            </p>
            <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded text-xs">
              <p className="text-red-500 mb-1">
                <strong>Without Context</strong>: "Write a tutorial."
              </p>
              <p className="text-green-600">
                <strong>With Context</strong>: "Write a step-by-step tutorial
                for faculty who have never used Canvas before but need to create
                their first assignment. They are familiar with computers but new
                to learning management systems."
              </p>
            </div>
          </div>

          <div className="content-card mb-6">
            <h3 className="card-title">3. Use Structured Formats</h3>
            <p className="text-small mb-2">
              Organizing your prompts into clear sections helps the model parse
              your requirements more accurately:
            </p>
            <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded font-mono text-xs">
              <p>ROLE: You are a curriculum advisor for higher education</p>
              <p>TASK: Review the following course description</p>
              <p>
                CONTEXT: This is for a 200-level undergraduate computer science
                course
              </p>
              <p>
                FORMAT: Provide feedback in bullet points, focusing on clarity
                and alignment with industry needs
              </p>
              <p>CONTENT TO REVIEW:</p>
              <p>[Your course description here]</p>
            </div>
          </div>

          <div className="content-card mb-6">
            <h3 className="card-title">4. Leverage System Understanding</h3>
            <p className="text-small mb-2">
              The model's training allows it to understand implicit
              instructions. You can take advantage of this by using professional
              shorthand and formats the model would recognize from its training:
            </p>
            <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded text-xs">
              <p>
                <strong>Example</strong>: "Write this as an executive summary
                with BLUF (Bottom Line Up Front) format."
              </p>
            </div>
          </div>

          <div className="content-card mb-6">
            <h3 className="card-title">5. Iterative Refinement</h3>
            <p className="text-small mb-2">
              Prompt engineering is rarely perfect on the first attempt. Treat
              it as a conversation where you refine your instructions based on
              the model's responses:
            </p>
            <ol className="list-decimal list-inside text-xs space-y-1">
              <li>Start with an initial prompt</li>
              <li>Evaluate the response</li>
              <li>Clarify or redirect as needed</li>
              <li>Repeat until satisfied</li>
            </ol>
          </div>
        </section>

        {/* Common Prompt Patterns Section */}
        <section className="content-section">
          <h2 className="section-title flex items-center">
            <Code className="mr-2 text-blue-600 flex-shrink-0" />
            Common Prompt Patterns for Education
          </h2>

          <p className="text-primary mb-6">
            For BYU-Idaho employees, these specific prompt patterns may prove
            particularly useful:
          </p>

          <div className="card-grid">
            <div className="content-card border-indigo-200">
              <h3 className="card-title">The Expert Consultant Pattern</h3>
              <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded font-mono text-xs">
                <p>
                  Act as a [specific type of expert] who specializes in
                  [relevant field].
                </p>
                <p>I need assistance with [specific task/problem].</p>
                <p>My audience is [description of audience].</p>
                <p>The main objectives are [list objectives].</p>
              </div>
            </div>

            <div className="content-card border-cyan-200">
              <h3 className="card-title">The Structured Analysis Pattern</h3>
              <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded font-mono text-xs">
                <p>Analyze the following [text/concept/problem]:</p>
                <p>[Content]</p>
                <p></p>
                <p>Please provide:</p>
                <p>1. A summary of the main points</p>
                <p>2. Potential strengths and weaknesses</p>
                <p>3. Connections to [relevant course/subject]</p>
                <p>4. Suggestions for improvement</p>
              </div>
            </div>

            <div className="content-card border-emerald-200">
              <h3 className="card-title">The Translation Pattern</h3>
              <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded font-mono text-xs">
                <p>
                  I need to explain [complex concept] to [specific audience].
                </p>
                <p>The concept is: [explanation of concept]</p>
                <p>
                  Their background includes: [audience knowledge/experience]
                </p>
                <p>
                  Please translate this concept into terms and examples that
                  would resonate with them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Exercise */}
        <section className="content-section">
          <h2 className="section-title flex items-center">
            <AlertTriangle className="mr-2 text-amber-500 flex-shrink-0" />
            Practice Exercise
          </h2>

          <div className="warning-callout">
            <AlertTriangle className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
            <div>
              <p className="text-primary">
                Before we move on, try crafting a prompt for one of these
                scenarios:
              </p>
              <ol className="list-decimal list-inside text-primary mt-2 pl-4">
                <li>Getting feedback on a course syllabus</li>
                <li>Creating an explanation of a complex topic for students</li>
                <li>
                  Developing assessment questions for a specific learning
                  outcome
                </li>
              </ol>
              <p className="text-primary mt-2">
                Remember, effective prompt engineering combines understanding of
                how LLMs work with clear communication principles—skills you
                already possess as educators.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <div className="flex justify-center mt-10">
          <a
            href="/prompt-feedback"
            className="btn-primary flex items-center group"
          >
            <span>Continue to Prompt Feedback Activity</span>
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

export default AdvancedPrompting;
