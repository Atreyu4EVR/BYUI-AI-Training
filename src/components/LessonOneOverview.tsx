import React from "react";
import {
  BookOpen,
  MessageSquare,
  AlertTriangle,
  Pen,
  Info,
  ArrowRight,
} from "lucide-react";

const LessonOneOverview = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <header className="page-header">
          <h1 className="page-title">
            Introduction to AI for BYU-Idaho Administrators
          </h1>
          <p className="page-subtitle">
            Understanding AI fundamentals and how they apply to your role at
            BYU-Idaho
          </p>
        </header>

        {/* Introduction Section */}
        <div className="mb-12">
          <h2 className="section-header">
            <BookOpen className="mr-2 text-cyan-600 flex-shrink-0" />
            Introduction
          </h2>
          <p className="text-primary mb-4">
            Artificial Intelligence (AI) is revolutionizing how educational
            institutions operate, offering new opportunities to enhance
            administrative processes, teaching methodologies, and student
            experiences.
          </p>
          <p className="text-primary mb-4">
            At BYU-Idaho, we recognize the importance of embracing these
            technologies while maintaining our commitment to values-based
            education. This lesson provides an essential foundation for
            understanding AI, its capabilities, and how it can be effectively
            utilized in your administrative role.
          </p>
        </div>

        {/* Topics Overview Section */}
        <section className="content-section">
          <h2 className="section-title">In this lesson, we will cover:</h2>

          <div className="card-grid">
            <div className="topic-card border-cyan-400">
              <h3 className="card-title">Getting Started with AI</h3>
              <p className="text-primary">
                A practical introduction to AI for administrative roles
              </p>
            </div>

            <div className="topic-card border-purple-400">
              <h3 className="card-title">History of AI</h3>
              <p className="text-primary">
                Key milestones in AI development and their significance
              </p>
            </div>

            <div className="topic-card border-blue-400">
              <h3 className="card-title">AI Capabilities</h3>
              <p className="text-primary">
                Understanding what different AI systems can and cannot do
              </p>
            </div>

            <div className="topic-card border-green-400">
              <h3 className="card-title">How AI Works</h3>
              <p className="text-primary">
                Fundamental concepts explained in accessible, non-technical
                language
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">
              Practical Activities
            </h3>
            <div className="card-grid">
              <div className="content-card bg-slate-50 dark:bg-slate-800 border-l-4 border-amber-500">
                <div className="flex items-center">
                  <Pen className="text-amber-500 mr-2 flex-shrink-0" />
                  <h3 className="card-title">AI Exploration</h3>
                </div>
                <p className="text-small">
                  Hands-on experience with AI tools relevant to your work
                </p>
              </div>

              <div className="content-card bg-slate-50 dark:bg-slate-800 border-l-4 border-emerald-500">
                <div className="flex items-center">
                  <Pen className="text-emerald-500 mr-2 flex-shrink-0" />
                  <h3 className="card-title">Minimal Context Activity</h3>
                </div>
                <p className="text-small">
                  Practice basic AI interactions with simple prompts
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lesson Structure */}
        <section className="content-section">
          <h2 className="section-title">Lesson Structure</h2>

          <p className="text-primary mb-6">
            This lesson is divided into several sections to help you build your
            understanding progressively:
          </p>

          <div className="numbered-list">
            <div className="numbered-item">
              <div className="number-circle">
                <span className="number">1</span>
              </div>
              <div>
                <p className="text-primary font-semibold">
                  Getting Started with AI
                </p>
                <p className="text-primary">
                  A practical introduction to AI for your administrative role at
                  BYU-Idaho.
                </p>
                <a href="/getting-started" className="link-standard">
                  Proceed to Getting Started →
                </a>
              </div>
            </div>

            <div className="numbered-item">
              <div className="number-circle">
                <span className="number">2</span>
              </div>
              <div>
                <p className="text-primary font-semibold">History of AI</p>
                <p className="text-primary">
                  Key milestones in AI development from theoretical concepts to
                  today's powerful tools.
                </p>
                <a href="/history" className="link-standard">
                  Proceed to History of AI →
                </a>
              </div>
            </div>

            <div className="numbered-item">
              <div className="number-circle">
                <span className="number">3</span>
              </div>
              <div>
                <p className="text-primary font-semibold">AI Capabilities</p>
                <p className="text-primary">
                  Understanding what AI can and cannot do, with a focus on
                  administrative applications.
                </p>
                <a href="/capabilities" className="link-standard">
                  Proceed to AI Capabilities →
                </a>
              </div>
            </div>

            <div className="numbered-item">
              <div className="number-circle">
                <span className="number">4</span>
              </div>
              <div>
                <p className="text-primary font-semibold">How AI Works</p>
                <p className="text-primary">
                  Learn the fundamental concepts behind AI systems in
                  accessible, non-technical language.
                </p>
                <a href="/how-it-works" className="link-standard">
                  Proceed to How AI Works →
                </a>
              </div>
            </div>

            <div className="numbered-item">
              <div className="number-circle">
                <span className="number">5</span>
              </div>
              <div>
                <p className="text-primary font-semibold">
                  Minimal Context Activity
                </p>
                <p className="text-primary">
                  Practice what you've learned with hands-on exercises.
                </p>
                <a href="/minimal" className="link-standard">
                  Proceed to Minimal Context Activity →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <div className="flex justify-center mt-10">
          <a
            href="/getting-started"
            className="btn-primary flex items-center group"
          >
            <span>Start with Getting Started</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LessonOneOverview;
