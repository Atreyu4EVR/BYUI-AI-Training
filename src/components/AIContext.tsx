import React from "react";
import { BookOpen, School, ExternalLink, Key, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const AIContext = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <header className="page-header">
          <h1 className="page-title">Context</h1>
          <p className="page-subtitle">
            Let's put some context around the subject of Artificial Intelligence
          </p>
        </header>

        {/* Church Leaders Section */}
        <section className="content-section">
          <h2 className="section-title flex items-center">
            <BookOpen className="mr-2 text-blue-600" />
            What do Church leaders think of AI?
          </h2>
          <p className="text-primary mb-4">
            Church leaders have formally addressed the topic of artificial
            intelligence. In March 2024, Elder Gerrit W. Gong of the Quorum of
            the Twelve Apostles and Elder John C. Pingree of the Seventy
            introduced guiding principles for the Church's use of AI
            technologies.
          </p>

          <div className="content-card mb-6">
            <h3 className="card-title">
              Official Church Principles for AI Use
            </h3>
            <p className="text-small mb-3">
              The Church of Jesus Christ of Latter-day Saints has established
              these guiding principles:
            </p>

            <div className="mb-4">
              <h4 className="font-semibold text-slate-800 text-sm">
                Spiritual Connection
              </h4>
              <ul className="list-disc pl-8 space-y-1 mb-3">
                <li className="text-small">
                  Use AI to support, not supplant, connection between God and
                  His children
                </li>
                <li className="text-small">
                  Use AI in positive, helpful, and uplifting ways that maintain
                  the Church's honesty, integrity, ethics, values, and standards
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-slate-800 text-sm">
                Transparency
              </h4>
              <ul className="list-disc pl-8 space-y-1 mb-3">
                <li className="text-small">
                  People interacting with the Church should understand when they
                  are interfacing with AI
                </li>
                <li className="text-small">
                  Provide attribution for AI-created content when authenticity,
                  accuracy, or authorship could be misunderstood
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-slate-800 text-sm">
                Privacy and Security
              </h4>
              <ul className="list-disc pl-8 space-y-1 mb-3">
                <li className="text-small">
                  AI use will safeguard sacred and personal information
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-slate-800 text-sm">
                Accountability
              </h4>
              <ul className="list-disc pl-8 space-y-1 mb-3">
                <li className="text-small">
                  Use AI in a manner consistent with Church policies and
                  applicable laws
                </li>
                <li className="text-small">
                  Be measured and deliberate in AI use, regularly testing and
                  reviewing outputs for accuracy, truthfulness, and compliance
                </li>
              </ul>
            </div>
          </div>

          <div className="note-callout mb-6">
            <p className="text-primary">
              <strong>Guidance for Discernment:</strong> In a{" "}
              <a
                href="https://newsroom.churchofjesuschrist.org/article/church-jesus-christ-artificial-intelligence?filter=popular-topic"
                target="_blank"
                rel="noopener noreferrer"
                className="link-standard"
              >
                meeting with Church employees
              </a>
              , Elder Gong highlighted three key resources to help discern truth
              in an age of AI:
            </p>
            <ul className="list-disc pl-8 mt-3 space-y-2">
              <li className="text-primary">
                <strong>The Holy Spirit:</strong> "While generative artificial
                intelligence may be quick to offer information, it can never
                replace revelation or generate truth."
              </li>
              <li className="text-primary">
                <strong>Wisdom:</strong> "Wisdom helps us use knowledge,
                experience, and judgment to make good decisions... Draw from
                your experiences and apply wisdom to know what is true."
              </li>
              <li className="text-primary">
                <strong>Trusted Sources:</strong> "Anchor ourselves with trusted
                sources of truth," including "the Holy Ghost, scriptures, words
                of the prophets, and the Church's authoritative website,
                ChurchofJesusChrist.org."
              </li>
            </ul>
          </div>

          <div className="warning-callout">
            <ExternalLink className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-slate-800 mb-1">
                Additional Resources
              </h3>
              <p className="text-small">
                For more information on these principles, visit the Church's
                official website at{" "}
                <a
                  href="https://www.churchofjesuschrist.org/learn/artificial-intelligence?lang=eng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-standard"
                >
                  churchofjesuschrist.org/learn/artificial-intelligence
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* BYU-Idaho Guidelines Section */}
        <section className="content-section">
          <h2 className="section-title flex items-center">
            <School className="mr-2 text-purple-600" />
            Does BYU-Idaho have Guidelines?
          </h2>
          <p className="text-primary mb-6">
            Yes, BYU-Idaho has established guidelines to help faculty, staff,
            and students use AI responsibly and effectively within their roles
            at the university.
          </p>

          <div className="card-grid mb-6">
            <div className="topic-card border-blue-400">
              <h3 className="card-title">Institutional Guidelines</h3>
              <p className="text-primary">
                BYU-Idaho encourages thoughtful adoption of AI tools while
                maintaining alignment with the university's mission and values.
                The university provides resources to help understand how to
                appropriately leverage these technologies.
              </p>
              <a
                href="https://www.byui.edu/genai"
                target="_blank"
                rel="noopener noreferrer"
                className="link-standard flex items-center mt-3"
              >
                BYU-Idaho GenAI Resources{" "}
                <ExternalLink className="ml-1" size={16} />
              </a>
            </div>

            <div className="topic-card border-green-400">
              <h3 className="card-title">Administrative Use</h3>
              <p className="text-primary">
                For administrative staff, AI can be used to enhance
                productivity, improve processes, and provide better service to
                students. However, critical decisions should always include
                human oversight and judgment.
              </p>
            </div>

            <div className="topic-card border-amber-400">
              <h3 className="card-title">Data Privacy</h3>
              <p className="text-primary">
                When using AI tools, be mindful of data privacy. Avoid sharing
                sensitive, confidential, or personally identifiable information
                with AI systems that aren't approved for such use.
              </p>
              <a
                href="https://www.byui.edu/genai/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="link-standard flex items-center mt-3"
              >
                Privacy Guidelines <ExternalLink className="ml-1" size={16} />
              </a>
            </div>
          </div>

          <div className="warning-callout">
            <ExternalLink className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-slate-800 mb-1">Stay Updated</h3>
              <p className="text-small">
                As AI technology evolves rapidly, university guidelines may be
                updated. Regularly check the official BYU-Idaho AI resources
                page for the most current information and best practices.
              </p>
            </div>
          </div>
        </section>

        {/* How to Access AI Section */}
        <section className="content-section">
          <h2 className="section-title flex items-center">
            <Key className="mr-2 text-cyan-600" />
            How do I Access AI?
          </h2>
          <p className="text-primary mb-6">
            BYU-Idaho provides several ways for faculty, staff, and students to
            access AI tools for educational and administrative purposes.
          </p>

          <div className="numbered-list">
            <div className="numbered-item">
              <div className="number-circle">
                <span className="number">1</span>
              </div>
              <div>
                <p className="text-primary font-semibold">
                  ChatGPT Edu License
                </p>
                <p className="text-primary">
                  BYU-Idaho provides free access to ChatGPT Enterprise (Edu) for
                  faculty, staff, and students. This version offers enhanced
                  features, more reliable access, and better privacy protections
                  than the free version.
                </p>
                <a
                  href="https://genai.byu.edu/obtaining-a-chatgpt-edu-license"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-standard flex items-center mt-2"
                >
                  How to get your ChatGPT Edu License{" "}
                  <ExternalLink className="ml-1" size={16} />
                </a>
              </div>
            </div>

            <div className="numbered-item">
              <div className="number-circle">
                <span className="number">2</span>
              </div>
              <div>
                <p className="text-primary font-semibold">Microsoft Copilot</p>
                <p className="text-primary">
                  As part of Microsoft 365, BYU-Idaho users have access to
                  Copilot features integrated into applications like Word,
                  Excel, PowerPoint, and Teams. These tools can help draft
                  content, analyze data, and generate presentations.
                </p>
              </div>
            </div>

            <div className="numbered-item">
              <div className="number-circle">
                <span className="number">3</span>
              </div>
              <div>
                <p className="text-primary font-semibold">
                  Specialized AI Tools
                </p>
                <p className="text-primary">
                  Depending on your department and role, you may have access to
                  specialized AI tools for specific tasks. Check with your
                  department leadership about tools that might be available for
                  your particular needs.
                </p>
              </div>
            </div>
          </div>

          <div className="note-callout mt-6">
            <p className="text-primary">
              <strong>Important:</strong> When evaluating whether to use
              additional AI tools not provided by the university, consult the
              procurement guidelines to ensure the tool meets security, privacy,
              and ethical standards required by BYU-Idaho.
            </p>
            <a
              href="https://www.byui.edu/genai/products#procurement-guidelines"
              target="_blank"
              rel="noopener noreferrer"
              className="link-standard flex items-center mt-2"
            >
              AI Product Procurement Guidelines{" "}
              <ExternalLink className="ml-1" size={16} />
            </a>
          </div>
        </section>

        {/* Add a footer section with link to the next lesson */}
        <div className="text-center mt-12 text-slate-600 dark:text-slate-400">
          <p>
            Continue to{" "}
            <Link
              to="/capabilities"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              AI Capabilities
            </Link>{" "}
            →
          </p>
        </div>

        <footer className="page-footer">
          <p>
            Now that you understand the context around AI at BYU-Idaho, let's
            explore the{" "}
            <a href="/capabilities" className="link-standard">
              capabilities of AI systems
            </a>{" "}
            in the next section.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default AIContext;
