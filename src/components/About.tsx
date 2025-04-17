import { BookOpen, Users, Lightbulb, ShieldCheck, Clock } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-3">About</h1>
          <p className="text-lg text-slate-600">
            Empowering BYU-Idaho Employees with Artificial Intelligence Skills
          </p>
        </header>

        {/* Mission Statement */}
        <div className="mb-12 bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500 dark:bg-slate-900 dark:border-indigo-400">
          <h2 className="text-xl font-semibold text-slate-800 mb-2 dark:text-indigo-400">
            Goals
          </h2>
          <p className="text-slate-700 dark:text-slate-100">
            To equip BYU-Idaho administrators and staff with practical AI
            knowledge and skills that enhance their effectiveness, productivity,
            and service to our campus community while upholding our university's
            values and standards. As stated on the official BYU-Idaho GenAI
            site, we "engage with GenAI tools to help us fulfill our mission as
            we prepare students for their futures as disciples of Jesus Christ
            who are leaders in their homes, the Church, and their communities."
          </p>
        </div>

        {/* Why AI Training Matters */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            <Lightbulb className="mr-2 text-amber-500" />
            Why AI Training Matters
          </h2>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-6 dark:bg-slate-800">
            <p className="text-slate-700 mb-4 dark:text-slate-300">
              Artificial intelligence is transforming how organizations operate,
              including higher education institutions. At BYU-Idaho, we believe
              in preparing our employees to navigate this technological shift
              with confidence and purpose. Our AI training initiative is
              designed specifically for university administrators and staff who
              may not have technical backgrounds but need to understand how
              these powerful tools can support their work.
            </p>

            <p className="text-slate-700 dark:text-slate-300">
              By developing AI literacy across campus, we create opportunities
              to enhance student services, streamline administrative processes,
              and focus more of our time and energy on our core mission of
              educating students. This training empowers you to make informed
              decisions about when and how to use AI tools appropriately in your
              specific role.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-5 rounded-lg shadow-sm dark:bg-slate-700">
              <h3 className="font-bold text-slate-800 mb-3 flex items-center dark:text-slate-200">
                <ShieldCheck className="mr-2 text-green-600" size={20} />
                Responsible AI Use
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Our training emphasizes ethical considerations and responsible
                use of AI tools. You'll learn to leverage these technologies
                while maintaining privacy, security, and alignment with
                BYU-Idaho's values and standards.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-lg shadow-sm dark:bg-slate-700">
              <h3 className="font-bold text-slate-800 mb-3 flex items-center dark:text-slate-200">
                <Clock className="mr-2 text-purple-600" size={20} />
                Productivity Enhancement
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
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
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center dark:text-slate-100">
            <BookOpen className="mr-2 text-cyan-600" />
            What You'll Learn
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm border-t-4 border-cyan-500 dark:bg-slate-800 dark:border-cyan-400">
              <h3 className="font-bold text-slate-800 mb-2 dark:text-slate-200">
                AI Fundamentals
              </h3>
              <ul className="list-disc pl-5 text-slate-700 space-y-1 dark:text-slate-300">
                <li>Basic concepts in accessible language</li>
                <li>How AI tools process and generate text</li>
                <li>Strengths and limitations of current AI</li>
                <li>Common myths and misconceptions</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border-t-4 border-green-500 dark:bg-slate-800 dark:border-green-400">
              <h3 className="font-bold text-slate-800 mb-2 dark:text-slate-200">
                Practical Applications
              </h3>
              <ul className="list-disc pl-5 text-slate-700 space-y-1 dark:text-slate-300">
                <li>Administrative tasks ideal for AI assistance</li>
                <li>Enhancing communication and content creation</li>
                <li>Analyzing data and generating insights</li>
                <li>Creating workflows that combine human and AI strengths</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border-t-4 border-purple-500 dark:bg-slate-800 dark:border-purple-400">
              <h3 className="font-bold text-slate-800 mb-2 dark:text-slate-200">
                Effective Use Skills
              </h3>
              <ul className="list-disc pl-5 text-slate-700 space-y-1 dark:text-slate-300">
                <li>Crafting effective prompts and instructions</li>
                <li>Evaluating AI-generated content</li>
                <li>Providing context for better results</li>
                <li>When to use (and not use) AI tools</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-sm dark:bg-slate-800">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center dark:text-slate-100">
            <Users className="mr-2 text-indigo-600" />
            Approach
          </h2>

          <div className="bg-white dark:bg-slate-800">
            <p className="text-slate-700 mb-4 dark:text-slate-300">
              This training is designed specifically for BYU-Idaho's unique
              needs and culture, in alignment with the university's established
              AI guidance. We focus on:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mt-1 mr-3 dark:bg-indigo-900">
                  <span className="text-indigo-600 font-bold dark:text-indigo-300">
                    1
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1 dark:text-slate-200">
                    Hands-On Experience
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Interactive sessions where you'll work directly with
                    university-approved AI tools on relevant administrative
                    tasks
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mt-1 mr-3 dark:bg-indigo-900">
                  <span className="text-indigo-600 font-bold dark:text-indigo-300">
                    2
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1 dark:text-slate-200">
                    BYU-Idaho Specific Examples
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Real-world applications tailored to campus departments and
                    administrative functions, following BYU-Idaho's data use and
                    privacy standards
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mt-1 mr-3 dark:bg-indigo-900">
                  <span className="text-indigo-600 font-bold dark:text-indigo-300">
                    3
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1 dark:text-slate-200">
                    Progressive Learning
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Building confidence incrementally, from basic concepts to
                    more advanced applications, with careful attention to
                    academic integrity and ethical considerations
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mt-1 mr-3 dark:bg-indigo-900">
                  <span className="text-indigo-600 font-bold dark:text-indigo-300">
                    4
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1 dark:text-slate-200">
                    Ongoing Resources & Support
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Access to reference materials, practical examples, and
                    follow-up assistance as you apply new skills in your work
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* University Guidelines Section - Based on new official BYU-I guidance */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 dark:text-slate-100">
            BYU-Idaho AI Guidelines
          </h2>

          <div className="bg-amber-50 p-6 rounded-lg shadow-sm mb-6 dark:bg-slate-900 dark:border-l-4 dark:border-indigo-400">
            <p className="text-slate-700 mb-4 dark:text-slate-100">
              Our training aligns with BYU-Idaho's official guidance on AI use.
              Here are key principles to keep in mind:
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4 dark:border-green-400">
                <h3 className="font-bold text-slate-800 mb-1 dark:text-slate-200">
                  Approved Tools
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  BYU-Idaho has approved ChatGPT and Microsoft Copilot for
                  employee use with non-sensitive data. These tools have
                  undergone security and alignment reviews to ensure they meet
                  university standards.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-4 dark:border-red-400">
                <h3 className="font-bold text-slate-800 mb-1 dark:text-slate-200">
                  Data Guidelines
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Do not input sensitive or protected information into AI tools.
                  This includes personally identifiable student/employee data,
                  FERPA-protected records, financial information, or proprietary
                  university content.
                </p>
              </div>

              <div className="border-l-4 border-amber-500 pl-4 dark:border-amber-400">
                <h3 className="font-bold text-slate-800 mb-1 dark:text-slate-200">
                  Academic Integrity
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  AI use in academic contexts follows established guidelines for
                  academic honesty. Students must seek permission from
                  professors before using AI for assignments when not explicitly
                  allowed and must clearly declare AI assistance when used.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* University Values and AI - Included from previous */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 dark:text-slate-100">
            University Values and AI
          </h2>

          <div className="bg-white p-6 rounded-lg shadow-sm dark:bg-slate-800">
            <p className="text-slate-700 mb-4 dark:text-slate-300">
              At BYU-Idaho, we view technology as a tool to help us fulfill our
              mission more effectively. Our approach to AI is guided by the same
              principles that direct all our work:
            </p>

            <ul className="list-disc pl-5 text-slate-700 space-y-2 dark:text-slate-300">
              <li>
                <strong>Building testimonies of the Savior:</strong> Using
                technology to support our primary purpose of developing
                disciples of Jesus Christ
              </li>
              <li>
                <strong>Wise stewardship:</strong> Employing AI tools
                thoughtfully to make the most of our resources and time
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

            <div className="mt-4 bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500 dark:bg-slate-900 dark:border-indigo-400">
              <p className="text-slate-700 italic dark:text-slate-100">
                As Elder Bednar reminded us, "Innovations such as artificial
                intelligence have the potential to both (1) assist you in
                receiving magnificent blessings and (2) diminish and suffocate
                your moral agency." Our training seeks to help you navigate
                these dual possibilities with wisdom and discernment.
              </p>
            </div>
          </div>
        </section>

        <footer className="text-center text-slate-500 text-sm dark:text-slate-400">
          <p className="mb-2">
            This initiative is part of BYU-Idaho's broader AI strategy. For more
            information, visit the official{" "}
            <a
              href="https://www.byui.edu/genai/"
              className="text-cyan-700 hover:underline dark:text-cyan-400"
              target="_blank"
              rel="noopener noreferrer"
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
    </div>
  );
};

export default AboutPage;
