import React from "react";
import {
  BookOpen,
  Users,
  Lightbulb,
  ShieldCheck,
  Clock,
  Zap,
} from "lucide-react";

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">About</h1>
        <p className="text-lg text-gray-600">
          Empowering BYU-Idaho Employees with Artificial Intelligence Skills
        </p>
      </header>

      {/* Mission Statement */}
      <div className="mb-12 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Goals</h2>
        <p className="text-gray-700">
          To equip BYU-Idaho administrators and staff with practical AI
          knowledge and skills that enhance their effectiveness, productivity,
          and service to our campus community while upholding our university's
          values and standards. As stated on the official BYU-Idaho GenAI site,
          we "engage with GenAI tools to help us fulfill our mission as we
          prepare students for their futures as disciples of Jesus Christ who
          are leaders in their homes, the Church, and their communities."
        </p>
      </div>

      {/* Why AI Training Matters */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <Lightbulb className="mr-2 text-yellow-500" />
          Why AI Training Matters
        </h2>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <p className="text-gray-700 mb-4">
            Artificial intelligence is transforming how organizations operate,
            including higher education institutions. At BYU-Idaho, we believe in
            preparing our employees to navigate this technological shift with
            confidence and purpose. Our AI training initiative is designed
            specifically for university administrators and staff who may not
            have technical backgrounds but need to understand how these powerful
            tools can support their work.
          </p>

          <p className="text-gray-700">
            By developing AI literacy across campus, we create opportunities to
            enhance student services, streamline administrative processes, and
            focus more of our time and energy on our core mission of educating
            students. This training empowers you to make informed decisions
            about when and how to use AI tools appropriately in your specific
            role.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-5 rounded-lg shadow-md">
            <h3 className="font-bold text-gray-800 mb-3 flex items-center">
              <ShieldCheck className="mr-2 text-green-600" size={20} />
              Responsible AI Use
            </h3>
            <p className="text-gray-700">
              Our training emphasizes ethical considerations and responsible use
              of AI tools. You'll learn to leverage these technologies while
              maintaining privacy, security, and alignment with BYU-Idaho's
              values and standards.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg shadow-md">
            <h3 className="font-bold text-gray-800 mb-3 flex items-center">
              <Clock className="mr-2 text-purple-600" size={20} />
              Productivity Enhancement
            </h3>
            <p className="text-gray-700">
              Learn how AI can help you automate routine tasks, process
              information more efficiently, and free up valuable time for the
              aspects of your work that require human insight, creativity, and
              personal connection.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <BookOpen className="mr-2 text-blue-600" />
          What You'll Learn
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-md border-t-4 border-blue-400">
            <h3 className="font-bold text-gray-800 mb-2">AI Fundamentals</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Basic concepts in accessible language</li>
              <li>How AI tools process and generate text</li>
              <li>Strengths and limitations of current AI</li>
              <li>Common myths and misconceptions</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md border-t-4 border-green-400">
            <h3 className="font-bold text-gray-800 mb-2">
              Practical Applications
            </h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Administrative tasks ideal for AI assistance</li>
              <li>Enhancing communication and content creation</li>
              <li>Analyzing data and generating insights</li>
              <li>Creating workflows that combine human and AI strengths</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md border-t-4 border-purple-400">
            <h3 className="font-bold text-gray-800 mb-2">
              Effective Use Skills
            </h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Crafting effective prompts and instructions</li>
              <li>Evaluating AI-generated content</li>
              <li>Providing context for better results</li>
              <li>When to use (and not use) AI tools</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <Users className="mr-2 text-indigo-600" />
          Approach
        </h2>

        <div className="bg-white">
          <p className="text-gray-700 mb-4">
            This training is designed specifically for BYU-Idaho's unique needs
            and culture, in alignment with the university's established AI
            guidance. We focus on:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mt-1 mr-3">
                <span className="text-indigo-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">
                  Hands-On Experience
                </h3>
                <p className="text-gray-700">
                  Interactive sessions where you'll work directly with
                  university-approved AI tools on relevant administrative tasks
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mt-1 mr-3">
                <span className="text-indigo-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">
                  BYU-Idaho Specific Examples
                </h3>
                <p className="text-gray-700">
                  Real-world applications tailored to campus departments and
                  administrative functions, following BYU-Idaho's data use and
                  privacy standards
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mt-1 mr-3">
                <span className="text-indigo-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">
                  Progressive Learning
                </h3>
                <p className="text-gray-700">
                  Building confidence incrementally, from basic concepts to more
                  advanced applications, with careful attention to academic
                  integrity and ethical considerations
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mt-1 mr-3">
                <span className="text-indigo-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">
                  Supportive Environment
                </h3>
                <p className="text-gray-700">
                  A collaborative atmosphere where questions are encouraged and
                  concerns are addressed, recognizing that AI tools work best as
                  a complement to human judgment
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-indigo-50 p-4 rounded-lg">
            <p className="text-gray-700">
              This training follows BYU-Idaho's "Traffic Light" approach to AI
              adoption, helping you understand when and how AI tools are
              appropriate for different tasks and contexts, while ensuring you
              always verify AI-generated content before use in important
              decisions.
            </p>
          </div>
        </div>
      </section>

      {/* AI Ethics & Privacy at BYU-Idaho */}
      <section className="mb-12 bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-green-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <ShieldCheck className="mr-2 text-green-600" />
          AI Ethics & Privacy at BYU-Idaho
        </h2>

        <div className="mb-6">
          <p className="text-gray-700 mb-4">
            At BYU-Idaho, we recognize that AI tools must be used responsibly,
            with particular attention to privacy, security, and ethical
            considerations. Our training emphasizes these critical aspects:
          </p>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-800 mb-2">
                Approved Tools & Authentication
              </h3>
              <p className="text-gray-700">
                BYU-Idaho has evaluated and approved specific AI tools for use
                with university data. This training will focus primarily on
                these approved tools and how to access them using your BYU-Idaho
                authentication to ensure proper data protection.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-800 mb-2">
                Data Classification Awareness
              </h3>
              <p className="text-gray-700">
                You'll learn about the CES Data Classification Policy and how to
                determine what types of data can be safely used with different
                AI tools. Personally Identifiable Information (PII) and
                Restricted Data require special handling and approved AI
                solutions.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-800 mb-2">
                Intellectual Property Guidelines
              </h3>
              <p className="text-gray-700">
                Understanding copyright implications of AI use is essential.
                This training covers BYU-Idaho's guidance on intellectual
                property considerations, including when AI-generated content may
                or may not be copyrightable and how to respect existing
                copyright in your AI workflows.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-800 mb-2">
                Six Privacy Principles
              </h3>
              <p className="text-gray-700">
                BYU-Idaho follows six key privacy principles when using AI
                services to protect personal information. These principles guide
                how data should be managed whether simply using an AI service or
                training new AI models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BYU-Idaho AI Guiding Principles */}
      <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <ShieldCheck className="mr-2 text-blue-600" />
          BYU-Idaho AI Guiding Principles
        </h2>

        <div className="mb-6">
          <p className="text-gray-700 mb-4">
            BYU-Idaho's approach to AI is guided by principles that align with
            our university's mission and values. These principles inform how we
            teach, learn with, and implement AI tools across campus.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-5 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-800 mb-3">
                Mission-Aligned Technology
              </h3>
              <p className="text-gray-700">
                AI tools are adopted to help fulfill our mission of preparing
                students as disciples of Jesus Christ and leaders in their
                homes, the Church, and communities. Technology should enhance
                rather than diminish our primary educational purposes.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-800 mb-3">
                Ethical Use & Verification
              </h3>
              <p className="text-gray-700">
                All AI-generated content must be verified before use in
                important decisions. We recognize that AI systems can produce
                false or biased information and maintain human oversight in all
                AI applications.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-800 mb-3">
                Data Privacy & Security
              </h3>
              <p className="text-gray-700">
                We follow established data classification policies and privacy
                principles when using AI tools. Personal, confidential, and
                sensitive information requires appropriate safeguards and
                authorized tools.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-800 mb-3">
                Academic Integrity
              </h3>
              <p className="text-gray-700">
                AI use in academic contexts follows established guidelines for
                academic honesty. Students must seek permission from professors
                before using AI for assignments when not explicitly allowed and
                must clearly declare AI assistance when used.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* University Values and AI - Included from previous */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          University Values and AI
        </h2>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">
            At BYU-Idaho, we view technology as a tool to help us fulfill our
            mission more effectively. Our approach to AI is guided by the same
            principles that direct all our work:
          </p>

          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>
              <strong>Building testimonies of the Savior:</strong> Using
              technology to support our primary purpose of developing disciples
              of Jesus Christ
            </li>
            <li>
              <strong>Wise stewardship:</strong> Employing AI tools thoughtfully
              to make the most of our resources and time
            </li>
            <li>
              <strong>Personal attention:</strong> Using AI to enhance, not
              replace, the human connections that are central to the BYU-Idaho
              experience
            </li>
            <li>
              <strong>Spirit of innovation:</strong> Embracing new tools while
              staying true to our foundational values and standards
            </li>
          </ul>

          <div className="mt-4 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
            <p className="text-gray-700 italic">
              As Elder Bednar reminded us, "Innovations such as artificial
              intelligence have the potential to both (1) assist you in
              receiving magnificent blessings and (2) diminish and suffocate
              your moral agency." Our training seeks to help you navigate these
              dual possibilities with wisdom and discernment.
            </p>
          </div>
        </div>
      </section>

      <footer className="text-center text-gray-500 text-sm">
        <p className="mb-2">
          This initiative is part of BYU-Idaho's broader AI strategy. For more
          information, visit the official{" "}
          <a
            href="https://www.byui.edu/genai/"
            className="text-blue-600 hover:underline"
          >
            BYU-Idaho GenAI website
          </a>
          .
        </p>
        <p>
          For questions about the AI training initiative, please contact the
          Office of Information Technology.
        </p>
      </footer>
    </div>
  );
};

export default AboutPage;
