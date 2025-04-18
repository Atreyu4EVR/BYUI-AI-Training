import React from "react";
import {
  BookOpen,
  MessageSquare,
  Cpu,
  AlertTriangle,
  UserCircle2,
} from "lucide-react";

const LessonTwo = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <header className="page-header">
          <h1 className="page-title">
            Lesson Two: Advanced Prompting Techniques
          </h1>
          <p className="page-subtitle">
            Learn how to craft effective prompts to get the most out of AI
            systems
          </p>
        </header>

        {/* Introduction Section */}
        <div className="mb-12">
          <h2 className="section-header">
            <BookOpen className="mr-2 text-cyan-600 flex-shrink-0" />
            Introduction to Prompting
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
          </div>
        </section>

        {/* Prompting Techniques Section */}
        <section className="content-section">
          <h2 className="section-title">Prompting Techniques</h2>

          <div className="mb-6">
            <p className="text-primary mb-4">
              While there are many techniques to prompt AI models to produce a
              desired "output," we'll cover a few of the ones most likely to
              benefit you. Starting with the most common.
            </p>
          </div>

          {/* Contextual Prompting */}
          <div className="content-card border-blue-200 mb-8">
            <h3 className="card-title flex items-center">
              <Cpu className="mr-2 text-blue-600 flex-shrink-0" />
              Contextual Prompting
            </h3>
            <p className="text-primary mb-4">
              The most prevalent and effective prompting style for interacting
              with large language models (LLMs) is{" "}
              <strong>contextual prompting</strong>. This approach involves
              providing the model with high-quality, relevant context to guide
              its responses, enhancing accuracy and relevance.
            </p>

            <div className="bg-slate-50 p-4 rounded-lg mb-4 border border-slate-200">
              <h4 className="font-semibold text-slate-800 mb-2">Example:</h4>
              <div className="bg-white p-4 rounded border border-slate-300">
                <p className="font-medium text-slate-700 mb-2">Human:</p>
                <p className="text-slate-700 mb-4">
                  "Draft an email to faculty and staff about HVAC maintenance in
                  Chapman Hall scheduled for June 5-7 from 8am-4pm. Maintenance
                  will cause temperature fluctuations between 65-80°F in rooms
                  101-115. Alternative spaces are available in Romney Building.
                  This is preventative maintenance that will improve energy
                  efficiency by 15% and prevent summer cooling issues. Include
                  contact information for Facilities Manager Adam Johnson at
                  ajohnson@byui.edu or extension 2415 for questions or
                  accommodations."
                </p>

                <p className="font-medium text-slate-700 mb-2">AI:</p>
                <div className="bg-slate-50 p-3 rounded border border-slate-200">
                  <p className="font-medium mb-2">
                    Subject: Upcoming HVAC Maintenance in Chapman Hall (June
                    5-7)
                  </p>
                  <p className="mb-2">Dear Faculty and Staff,</p>
                  <p className="mb-2">
                    Please be aware that HVAC maintenance is scheduled in
                    Chapman Hall from <strong>June 5th to June 7th</strong>,
                    between <strong>8:00 AM and 4:00 PM</strong> each day.
                    During this time, there will be temperature fluctuations
                    ranging from <strong>65°F to 80°F</strong> in rooms{" "}
                    <strong>101-115</strong>.
                  </p>
                  <p className="mb-2">
                    This maintenance is part of a{" "}
                    <strong>preventative effort</strong> to improve the
                    building's energy efficiency by <strong>15%</strong> and to
                    ensure the system is well-prepared for the summer months,
                    preventing potential cooling issues.
                  </p>
                  <p className="mb-2">
                    To minimize disruption, <strong>alternative spaces</strong>{" "}
                    are available in the <strong>Romney Building</strong>. If
                    you need assistance with finding a suitable room or have any
                    specific concerns, please don't hesitate to contact{" "}
                    <strong>Facilities Manager Adam Johnson</strong> at{" "}
                    <strong>ajohnson@byui.edu</strong> or by phone at{" "}
                    <strong>extension 2415</strong>.
                  </p>
                  <p className="mb-2">
                    Thank you for your understanding and cooperation as we work
                    to improve the building's systems. We apologize for any
                    inconvenience and appreciate your flexibility.
                  </p>
                  <p className="mb-1">
                    Best regards,
                    <br />
                    [Your Name]
                    <br />
                    [Your Title]
                    <br />
                    [Your Contact Information]
                  </p>
                </div>
              </div>
            </div>

            <p className="text-primary mb-4">
              Contextual prompting entails embedding pertinent information
              within the prompt to help the LLM comprehend the task at hand.
              This context can include background details, specific
              instructions, or examples, enabling the model to generate more
              coherent and accurate outputs. For instance, when requesting a
              summary of a document, including the document's content or key
              points within the prompt allows the model to produce a more
              precise summary.
            </p>

            <h4 className="font-semibold text-slate-800 mb-2">Elements:</h4>
            <ul className="list-disc list-outside space-y-1 pl-6 text-primary">
              <li>
                <strong>Specificity:</strong> Clearly define the task and
                provide all necessary information within the prompt.
              </li>
              <li>
                <strong>Relevance:</strong> Include only pertinent details to
                avoid overwhelming the model with unnecessary information.
              </li>
              <li>
                <strong>Structure:</strong> Organize the prompt logically,
                perhaps by separating instructions from context, to aid the
                model's comprehension.
              </li>
            </ul>
          </div>

          {/* Role Prompting */}
          <div className="content-card border-purple-200 mb-8">
            <h3 className="card-title flex items-center">
              <UserCircle2 className="mr-2 text-purple-600 flex-shrink-0" />
              Role Prompting
            </h3>
            <p className="text-primary mb-4">
              Another common technique is Role Prompting. With this method the
              user assigns the model a specific persona or role, such as "act as
              a teacher" or "you are an expert curriculum designer." This guides
              the model's responses to align with the characteristics of the
              assigned role, enhancing relevance and coherence.
            </p>

            <div className="bg-slate-50 p-4 rounded-lg mb-4 border border-slate-200">
              <h4 className="font-semibold text-slate-800 mb-2">Example:</h4>
              <div className="bg-white p-4 rounded border border-slate-300">
                <p className="font-medium text-slate-700 mb-2">Human:</p>
                <p className="text-slate-700 mb-4">
                  "You're a professional portfolio manager with an expertise in
                  enterprise-scale projects. Your role is to assist me in
                  drafting a well-written project proposal based off the
                  following context:
                  <br />
                  <br />
                  Project Name: Student Information System (SIS) Replacement
                  <br />
                  Requirements: SaaS/Cloud-based
                  <br />
                  Budget: &gt; $1.2 million Annual"
                </p>

                <p className="font-medium text-slate-700 mb-2">AI:</p>
                <div className="bg-slate-50 p-3 rounded border border-slate-200">
                  <p className="mb-2">
                    "Absolutely. Here's a short, sharp project proposal draft
                    tailored for an executive audience—concise but enough to
                    spark engagement and initiate stakeholder alignment..."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="content-section">
          <div className="note-callout mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-3">
                <AlertTriangle className="text-yellow-500" />
              </div>
              <p className="text-primary">
                <strong>Tip:</strong> If a prompt doesn't give you the result
                you were expecting, don't worry. That's normal! AI works best
                through iteration—try again with more detail, context, or
                structure.
              </p>
            </div>
          </div>

          <p className="text-primary">
            This is a hands-on section—so have ChatGPT open and ready. You'll be
            experimenting with real examples as you go. Let's get started by
            crafting your first prompt.
          </p>
        </section>
      </div>
    </div>
  );
};

export default LessonTwo;
