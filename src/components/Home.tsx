import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm space-y-10">
        {/* Section 1: Welcome - Updated Header Styling */}
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            Introduction to Artificial Intelligence
          </h1>
          <p className="text-lg text-slate-700">
            In today's rapidly evolving technological landscape, artificial
            intelligence tools are transforming how universities operate. This
            training introduces foundational AI concepts and provides hands-on
            experience with approved tools to enhance your effectiveness and
            efficiency at BYU-Idaho.
          </p>
        </header>

        {/* Why AI Training Matters Section */}
        <div className="border-t border-slate-200 pt-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">
            Why AI Training Matters
          </h2>
          <div className="space-y-6 text-slate-700">
            <p>
              For many of us, artificial intelligence might feel a bit out of
              reach—something reserved for tech experts or office workers. It's
              easy to wonder, "How could this possibly apply to my job?" That
              hesitation is totally natural. But here's the thing: AI isn't here
              to replace your work—it's here to support it.
            </p>
            <p>
              This training is designed to take the mystery out of AI and
              replace it with clarity and confidence. You'll see firsthand how
              these tools can make your day smoother, your communication
              sharper, and your time more productive. Whether you're managing
              work orders, responding to emails, or organizing documentation, AI
              has something valuable to offer. This isn't about learning tech
              for tech's sake—it's about gaining practical skills that help you
              do your job better and with less stress.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 pt-4 mb-4 border-t border-slate-200">
              How AI Can Help in Your Role
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-slate-800 mb-2">
                  Craft More Effective Communications
                </h4>
                <p className="text-sm text-slate-600">
                  Whether it's an email to a vendor, an announcement to your
                  team, or a report for leadership, AI can help you write more
                  clearly and professionally. By giving AI the right context,
                  you can quickly generate or improve messages that are
                  accurate, polished, and easy to understand.
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-slate-800 mb-2">
                  Streamline Document Creation and Editing
                </h4>
                <p className="text-sm text-slate-600">
                  Need to draft an inspection report, maintenance log, or safety
                  checklist? AI can help you structure and polish these
                  documents in minutes. Think of it as a digital assistant that
                  never gets tired of proofreading.
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-slate-800 mb-2">
                  Enhance Problem-Solving Capabilities
                </h4>
                <p className="text-sm text-slate-600">
                  Have a tricky situation or need to brainstorm solutions? AI
                  tools can analyze problems from different angles, offer
                  creative suggestions, and help you think through next
                  steps—especially when you're stuck or short on time.
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-slate-800 mb-2">
                  Automate Routine Tasks
                </h4>
                <p className="text-sm text-slate-600">
                  From organizing notes to drafting checklists or reformatting
                  existing documents, AI can take care of the repetitive
                  stuff—giving you more time to focus on what really matters.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-slate-900 p-4 rounded-lg border-l-4 border-amber-500 dark:border-indigo-400 mt-6">
              <h4 className="font-semibold text-slate-800 dark:text-indigo-400 mb-2">
                Bottom Line
              </h4>
              <p className="text-slate-700 dark:text-slate-100">
                You don't have to be an expert to benefit from AI—you just need
                a starting point. This training will give you hands-on
                experience, clear examples, and real-world applications that
                connect directly to your day-to-day responsibilities. AI isn't
                the future—it's already here. And with the right tools and
                support, you'll be ready to make the most of it.
              </p>
            </div>
          </div>
        </div>

        {/* Invitation Section */}
        <div className="border-t border-slate-200 pt-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">
            Invitation
          </h2>
          <p className="mb-4">
            We invite you to approach this training with an open mind and a
            willingness to learn. Together, we can harness the potential of AI
            in ways that strengthen our university community and enhance our
            service to students.
          </p>
          <p>
            Whether you're excited about these technologies or approaching them
            with some hesitation, this training is designed to meet you where
            you are and help you develop the knowledge and skills you need to
            thrive in an increasingly AI-enhanced workplace.
          </p>
        </div>

        {/* Prerequisites Callout */}
        <div className="bg-amber-50 dark:bg-slate-900 p-5 rounded-lg border-l-4 border-amber-500 dark:border-indigo-400">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-indigo-400 mb-2">
            Before You Begin
          </h2>
          <p className="text-slate-700 dark:text-slate-100">
            Please ensure you have completed the necessary setup steps outlined
            on the{" "}
            <Link
              to="/prerequisites"
              className="text-cyan-700 font-medium hover:text-cyan-600 transition-colors duration-200 dark:text-indigo-300 dark:hover:text-indigo-200"
            >
              Prerequisites page
            </Link>{" "}
            before diving into the lessons or exercises.
          </p>
        </div>

        {/* Lesson Structure Section */}
        <div className="border-t border-slate-200 pt-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">
            Training Lessons
          </h2>
          <div className="space-y-8">
            {/* Lesson One Card */}
            <div className="p-6 bg-white rounded-lg border border-slate-200 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Lesson One: AI Fundamentals
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Understand the core concepts, capabilities, and background of
                Artificial Intelligence.
              </p>
              <div className="space-y-2 border-t pt-4">
                <Link
                  to="/getting-started"
                  className="block text-cyan-700 font-medium hover:text-cyan-600 text-sm"
                >
                  • Getting Started
                </Link>
                <Link
                  to="/history"
                  className="block text-cyan-700 font-medium hover:text-cyan-600 text-sm"
                >
                  • History of AI
                </Link>
                <Link
                  to="/capabilities"
                  className="block text-cyan-700 font-medium hover:text-cyan-600 text-sm"
                >
                  • AI Capabilities & Tasks
                </Link>
                <Link
                  to="/how-it-works"
                  className="block text-cyan-700 font-medium hover:text-cyan-600 text-sm"
                >
                  • How Generative AI Works
                </Link>
                <Link
                  to="/tool-comparison"
                  className="block text-cyan-700 font-medium hover:text-cyan-600 text-sm"
                >
                  • AI Tool Comparison
                </Link>
              </div>
            </div>

            {/* Lesson Two Placeholder Card */}
            <div className="p-6 bg-slate-50 rounded-lg border border-slate-200 cursor-not-allowed">
              <h3 className="text-xl font-semibold text-slate-500 mb-2">
                Lesson Two: AI Tools in Action (Coming Soon)
              </h3>
              <p className="text-slate-500 text-sm">
                Apply AI assistance to daily tasks like data analysis, proposal
                writing, and more.
              </p>
            </div>

            {/* Lesson Three Placeholder Card */}
            <div className="p-6 bg-slate-50 rounded-lg border border-slate-200 cursor-not-allowed">
              <h3 className="text-xl font-semibold text-slate-500 mb-2">
                Lesson Three: AI in Your Workflow (Coming Soon)
              </h3>
              <p className="text-slate-500 text-sm">
                Develop a personal plan for integrating AI tools into your
                administrative responsibilities.
              </p>
            </div>
          </div>
        </div>

        {/* Prompting Exercises Section */}
        <div className="border-t border-slate-200 pt-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">
            Prompting Practice Exercises
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Minimal Context Card */}
            <Link
              to="/minimal"
              className="group block p-6 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-300 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-cyan-700 transition-colors duration-200">
                Minimal Context
              </h3>
              <p className="text-slate-600 text-sm">
                See the results of a basic, low-detail prompt.
              </p>
            </Link>

            {/* Moderate Context Card */}
            <Link
              to="/moderate"
              className="group block p-6 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-300 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-cyan-700 transition-colors duration-200">
                Moderate Context
              </h3>
              <p className="text-slate-600 text-sm">
                Explore adding more specific details.
              </p>
            </Link>

            {/* Comprehensive Context Card */}
            <Link
              to="/comprehensive"
              className="group block p-6 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-emerald-700 transition-colors duration-200">
                Comprehensive Context
              </h3>
              <p className="text-slate-600 text-sm">
                Observe the output with detailed instructions.
              </p>
            </Link>
          </div>
        </div>

        {/* About Section Link */}
        <div className="border-t border-slate-200 pt-8 text-center">
          <Link
            to="/about"
            className="text-cyan-700 font-medium hover:text-cyan-600 transition-colors duration-200 text-sm"
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
