import React from "react";
import { Brain, Bot, Lightbulb, Cpu, SparklesIcon } from "lucide-react";

const ArtificialIntelligence = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <header className="page-header">
          <h1 className="page-title">What is Artificial Intelligence?</h1>
          <p className="page-subtitle">
            Understanding the foundation of modern AI technologies
          </p>
        </header>

        {/* Introduction Section */}
        <section className="content-section">
          <h2 className="section-title">Defining Artificial Intelligence</h2>
          <p className="text-primary mb-4">
            Artificial Intelligence (AI) refers to the simulation of human
            intelligence in machines that are programmed to think and learn like
            humans. The term may also be applied to any machine that exhibits
            traits associated with a human mind such as learning and
            problem-solving.
          </p>

          <div className="note-callout mb-8">
            <p className="text-primary">
              <strong>Key Definition:</strong> Artificial Intelligence is the
              field of computer science dedicated to creating systems capable of
              performing tasks that typically require human intelligence,
              including visual perception, speech recognition, decision-making,
              and language translation.
            </p>
          </div>
        </section>

        {/* Core Components of AI */}
        <section className="content-section">
          <h2 className="section-title flex items-center">
            <Brain className="mr-2 text-blue-600" />
            Core Components of AI
          </h2>

          <div className="card-grid mb-8">
            <div className="content-card">
              <h3 className="card-title flex items-center">
                <Lightbulb className="mr-2 text-amber-500" size={20} />
                Machine Learning
              </h3>
              <p className="text-small">
                Systems that can learn from data, identify patterns, and make
                decisions with minimal human intervention. This is the
                foundation of most modern AI.
              </p>
            </div>

            <div className="content-card">
              <h3 className="card-title flex items-center">
                <Bot className="mr-2 text-purple-600" size={20} />
                Natural Language Processing
              </h3>
              <p className="text-small">
                Technology that enables computers to understand, interpret, and
                generate human language in a valuable way.
              </p>
            </div>

            <div className="content-card">
              <h3 className="card-title flex items-center">
                <Cpu className="mr-2 text-green-600" size={20} />
                Computer Vision
              </h3>
              <p className="text-small">
                Systems that can analyze and understand information from images
                and videos, allowing computers to "see" their environment.
              </p>
            </div>

            <div className="content-card">
              <h3 className="card-title flex items-center">
                <SparklesIcon className="mr-2 text-cyan-600" size={20} />
                Deep Learning
              </h3>
              <p className="text-small">
                A subset of machine learning that uses neural networks with
                multiple layers to analyze various factors of data. Especially
                powerful for complex pattern recognition.
              </p>
            </div>
          </div>
        </section>

        {/* Types of AI */}
        <section className="content-section">
          <h2 className="section-title">Types of Artificial Intelligence</h2>
          <p className="text-primary mb-6">
            AI systems can be categorized based on their capabilities and how
            they compare to human intelligence:
          </p>

          <div className="numbered-list">
            <div className="numbered-item">
              <div className="number-circle">
                <span className="number">1</span>
              </div>
              <div>
                <p className="text-primary font-semibold">
                  Narrow AI (Weak AI)
                </p>
                <p className="text-primary">
                  Designed to perform a specific task, like voice recognition or
                  recommendation systems. This is the type of AI that exists
                  today. Examples include virtual assistants like Siri,
                  recommendation algorithms, and spam filters.
                </p>
              </div>
            </div>

            <div className="numbered-item">
              <div className="number-circle">
                <span className="number">2</span>
              </div>
              <div>
                <p className="text-primary font-semibold">
                  General AI (Strong AI)
                </p>
                <p className="text-primary">
                  A theoretical form of AI with the ability to understand,
                  learn, and apply knowledge across a wide range of tasks at a
                  level equal to humans. This doesn't exist yet but is a goal of
                  some AI research.
                </p>
              </div>
            </div>

            <div className="numbered-item">
              <div className="number-circle">
                <span className="number">3</span>
              </div>
              <div>
                <p className="text-primary font-semibold">
                  Superintelligent AI
                </p>
                <p className="text-primary">
                  A hypothetical AI that surpasses human intelligence and
                  abilities in virtually all economically valuable work. This
                  remains in the realm of science fiction and philosophical
                  speculation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Modern AI and LLMs */}
        <section className="content-section">
          <h2 className="section-title flex items-center">
            <Bot className="mr-2 text-blue-600" />
            Modern AI and Large Language Models
          </h2>

          <p className="text-primary mb-4">
            Today's most advanced AI systems are increasingly based on Large
            Language Models (LLMs) like GPT-4, Claude, and others. These models:
          </p>

          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li className="text-primary">
              Are trained on vast amounts of text data from the internet and
              other sources
            </li>
            <li className="text-primary">
              Can understand and generate human-like text across many domains
              and languages
            </li>
            <li className="text-primary">
              Demonstrate capabilities in reasoning, problem-solving,
              creativity, and more
            </li>
            <li className="text-primary">
              Power many applications including chatbots, writing assistants,
              code generation, and content creation tools
            </li>
          </ul>

          <div className="warning-callout">
            <Lightbulb className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-slate-800 mb-1">
                Important Distinction
              </h3>
              <p className="text-small">
                Modern AI systems like ChatGPT and Claude may seem intelligent,
                but they fundamentally operate by predicting text based on
                patterns learned from data. They lack true understanding,
                consciousness, or awareness of the world despite their
                impressive capabilities.
              </p>
            </div>
          </div>
        </section>

        {/* Why AI Matters Section */}
        <section className="content-section">
          <h2 className="section-title">Why AI Matters</h2>

          <p className="text-primary mb-6">
            Artificial Intelligence is rapidly transforming our world in
            numerous ways:
          </p>

          <div className="card-grid">
            <div className="topic-card border-cyan-400">
              <h3 className="card-title">Automating Tasks</h3>
              <p className="text-primary">
                AI can automate routine and repetitive tasks, allowing humans to
                focus on more creative, strategic, and interpersonal activities.
              </p>
            </div>

            <div className="topic-card border-green-400">
              <h3 className="card-title">Enhancing Decision Making</h3>
              <p className="text-primary">
                AI systems can analyze vast amounts of data to identify patterns
                and provide insights that help humans make better-informed
                decisions.
              </p>
            </div>

            <div className="topic-card border-purple-400">
              <h3 className="card-title">Improving Accessibility</h3>
              <p className="text-primary">
                AI technologies enable more inclusive experiences through
                features like automatic captioning, text-to-speech, and language
                translation.
              </p>
            </div>

            <div className="topic-card border-orange-400">
              <h3 className="card-title">Solving Complex Problems</h3>
              <p className="text-primary">
                From healthcare diagnostics to climate modeling, AI helps tackle
                problems that involve analyzing complex, multidimensional data.
              </p>
            </div>
          </div>
        </section>

        <footer className="page-footer">
          <p>
            In the next section, we'll explore the{" "}
            <a href="/history" className="link-standard">
              history of AI development
            </a>{" "}
            and how we arrived at today's powerful systems.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ArtificialIntelligence;
