import React from "react";
import {
  BookOpen,
  MessageSquare,
  AlertTriangle,
  Pen,
  Info,
  ArrowRight,
} from "lucide-react";
import robotCartoon from "../assets/robot_cartoon.png";

const LessonTwoOverview = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <header className="page-header">
          <h1 className="page-title">Overview</h1>
          <p className="page-subtitle">
            Building practical skill in crafting effective AI prompts for your
            work at BYU-Idaho
          </p>
        </header>

        {/* Introduction Section */}
        <div className="mb-12">
          <h2 className="section-header">
            <BookOpen className="mr-2 text-cyan-600 flex-shrink-0" />
            Introduction
          </h2>
          <p className="text-primary mb-4">
            In today's rapidly evolving digital landscape, artificial
            intelligence has transformed from a distant technological marvel to
            an everyday companion for educators, administrators, and students
            alike.
          </p>
          <p className="text-primary mb-4">
            At BYU-Idaho, we stand at the intersection of time-honored
            educational principles and cutting-edge technology, where AI systems
            like ChatGPT offer unprecedented opportunities to enhance our
            teaching, streamline our administrative tasks, and deepen our
            learning experiences. Yet the difference between merely using these
            tools and truly harnessing their potential often lies in a single,
            crucial skill: the art of effective prompting.
          </p>
        </div>

        {/* Topics Overview Section */}
        <section className="content-section">
          <h2 className="section-title">In this lesson, we will cover:</h2>

          <div className="card-grid">
            <div className="topic-card border-cyan-400">
              <h3 className="card-title">Understanding AI Prompts</h3>
              <p className="text-primary">
                Beyond the basics of how to instruct AI systems
              </p>
            </div>

            <div className="topic-card border-purple-400">
              <h3 className="card-title">How LLMs Work</h3>
              <p className="text-primary">
                The foundation and technical reality behind these AI systems
              </p>
            </div>

            <div className="topic-card border-blue-400">
              <h3 className="card-title">Context is Everything</h3>
              <p className="text-primary">
                Why providing proper context leads to better results
              </p>
            </div>

            <div className="topic-card border-green-400">
              <h3 className="card-title">Effective Prompting</h3>
              <p className="text-primary">
                Components and examples of well-crafted prompts
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
                  <h3 className="card-title">Prompt Lab</h3>
                </div>
                <p className="text-small">
                  Practice solving tasks with different prompting techniques
                </p>
              </div>

              <div className="content-card bg-slate-50 dark:bg-slate-800 border-l-4 border-emerald-500">
                <div className="flex items-center">
                  <Pen className="text-emerald-500 mr-2 flex-shrink-0" />
                  <h3 className="card-title">Create Reusable Prompts</h3>
                </div>
                <p className="text-small">
                  Design a prompt template specific to your job role
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
                <p className="text-primary font-semibold">Prompt Basics</p>
                <p className="text-primary">
                  Understanding how LLMs actually work and the technical
                  foundation of AI systems.
                </p>
                <a href="/prompt-basics" className="link-standard">
                  Proceed to Prompt Basics →
                </a>
              </div>
            </div>

            <div className="numbered-item">
              <div className="number-circle">
                <span className="number">2</span>
              </div>
              <div>
                <p className="text-primary font-semibold">
                  Context is Everything
                </p>
                <p className="text-primary">
                  Why context matters and how to provide effective contextual
                  information.
                </p>
                <a href="/context-is-everything" className="link-standard">
                  Proceed to Context is Everything →
                </a>
              </div>
            </div>

            <div className="numbered-item">
              <div className="number-circle">
                <span className="number">3</span>
              </div>
              <div>
                <p className="text-primary font-semibold">
                  Advanced Prompting Techniques
                </p>
                <p className="text-primary">
                  Core principles and common patterns for effective prompt
                  engineering.
                </p>
                <a href="/advanced-prompting" className="link-standard">
                  Proceed to Advanced Prompting →
                </a>
              </div>
            </div>

            <div className="numbered-item">
              <div className="number-circle">
                <span className="number">4</span>
              </div>
              <div>
                <p className="text-primary font-semibold">
                  Prompt Feedback Activity
                </p>
                <p className="text-primary">
                  Get AI-powered feedback on your prompts to improve your AI
                  communication skills.
                </p>
                <a href="/prompt-feedback" className="link-standard">
                  Proceed to Prompt Feedback Activity →
                </a>
              </div>
            </div>

            <div className="numbered-item">
              <div className="number-circle">
                <span className="number">5</span>
              </div>
              <div>
                <p className="text-primary font-semibold">
                  Prompt Feedback Activity
                </p>
                <p className="text-primary">
                  Get AI-powered feedback on your prompts to improve your AI
                  communication skills.
                </p>
                <a href="/prompt-feedback" className="link-standard">
                  Proceed to Prompt Feedback Activity →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <div className="flex justify-center mt-10">
          <a
            href="/prompt-basics"
            className="btn-primary flex items-center group"
          >
            <span>Start with Prompt Basics</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LessonTwoOverview;
