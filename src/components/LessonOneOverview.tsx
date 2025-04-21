import React from "react";
import {
  BookOpen,
  MessageSquare,
  AlertTriangle,
  Pen,
  Info,
  ArrowRight,
  Brain,
} from "lucide-react";
import { Link } from "react-router-dom";

const LessonOneOverview = () => {
  return (
    <div className="relative">
      <div className="page-container">
        {/* Navigation button could be added here similar to GettingStarted */}

        <div className="page-content">
          <header className="page-header">
            <h1 className="page-title">Lesson One</h1>
            <p className="page-subtitle">
              Understanding AI fundamentals and how they apply to your role at
              BYU-Idaho
            </p>
          </header>

          {/* Introduction Section */}
          <section className="mb-10">
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
          </section>

          {/* Topics Overview Section */}
          <section className="mb-10">
            <h2 className="section-header">In this lesson, we will cover:</h2>

            <div className="card-grid">
              <div className="topic-card border-cyan-400">
                <h3 className="card-title">What is AI?</h3>
                <p className="text-primary">
                  Defining Artificial Intelligence and understanding its key
                  components
                </p>
              </div>

              <div className="topic-card border-purple-400">
                <h3 className="card-title">History of AI</h3>
                <p className="text-primary">
                  Key milestones in AI development and their significance
                </p>
              </div>

              <div className="topic-card border-amber-400">
                <h3 className="card-title">Context</h3>
                <p className="text-primary">
                  Understanding AI within the BYU-Idaho and Church context
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
          </section>

          {/* Lesson Structure */}
          <section className="mb-10">
            <h2 className="section-header">
              <Info className="mr-2 text-indigo-600" />
              Lesson Structure
            </h2>

            <p className="text-primary mb-6">
              This lesson is divided into several sections to help you build
              your understanding progressively:
            </p>

            <div className="numbered-list">
              <div className="numbered-item">
                <div className="number-circle">
                  <span className="number">1</span>
                </div>
                <div>
                  <p className="text-primary font-semibold">
                    What is Artificial Intelligence?
                  </p>
                  <p className="text-primary">
                    Define AI, learn about its key components, and understand
                    different types of artificial intelligence systems.
                  </p>
                  <Link to="/artificial-intelligence" className="link-standard">
                    Proceed to What is AI? →
                  </Link>
                </div>
              </div>

              <div className="numbered-item">
                <div className="number-circle">
                  <span className="number">2</span>
                </div>
                <div>
                  <p className="text-primary font-semibold">History of AI</p>
                  <p className="text-primary">
                    Key milestones in AI development from theoretical concepts
                    to today's powerful tools.
                  </p>
                  <Link to="/history" className="link-standard">
                    Proceed to History of AI →
                  </Link>
                </div>
              </div>

              <div className="numbered-item">
                <div className="number-circle">
                  <span className="number">3</span>
                </div>
                <div>
                  <p className="text-primary font-semibold">Context</p>
                  <p className="text-primary">
                    Understand AI in the context of BYU-Idaho and Church
                    perspectives, including guidelines and access information.
                  </p>
                  <Link to="/ai-context" className="link-standard">
                    Proceed to Context →
                  </Link>
                </div>
              </div>

              <div className="numbered-item">
                <div className="number-circle">
                  <span className="number">4</span>
                </div>
                <div>
                  <p className="text-primary font-semibold">AI Capabilities</p>
                  <p className="text-primary">
                    Understanding what AI can and cannot do, with a focus on
                    administrative applications.
                  </p>
                  <Link to="/capabilities" className="link-standard">
                    Proceed to AI Capabilities →
                  </Link>
                </div>
              </div>

              <div className="numbered-item">
                <div className="number-circle">
                  <span className="number">5</span>
                </div>
                <div>
                  <p className="text-primary font-semibold">How AI Works</p>
                  <p className="text-primary">
                    Learn the fundamental concepts behind AI systems in
                    accessible, non-technical language.
                  </p>
                  <Link to="/how-it-works" className="link-standard">
                    Proceed to How AI Works →
                  </Link>
                </div>
              </div>

              <div className="numbered-item">
                <div className="number-circle">
                  <span className="number">6</span>
                </div>
                <div>
                  <p className="text-primary font-semibold">
                    Token Prediction Explorer
                  </p>
                  <p className="text-primary">
                    Interactive activity to see how AI predicts the next tokens
                    in a sentence and better understand how language models work
                    at a fundamental level.
                  </p>
                  <Link to="/token-prediction" className="link-standard">
                    Proceed to Token Prediction Explorer →
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LessonOneOverview;
