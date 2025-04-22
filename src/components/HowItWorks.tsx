import React from "react"; // Keeping React import
import { BookOpen, MessageSquare, BarChart, AlertTriangle } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="relative">
      <div className="page-container">
        <div className="page-content">
          <header className="page-header">
            <h1 className="page-title">
              How Generative AI Works: Core Concepts
            </h1>
            <p className="page-subtitle">
              Understanding the fundamental principles behind AI systems like
              ChatGPT and Claude
            </p>
          </header>

          {/* Introduction Section */}
          <section className="mb-10">
            <h2 className="section-header">
              <BookOpen className="mr-2 text-cyan-600 flex-shrink-0" />
              The Building Blocks of Generative AI
            </h2>
            <p className="text-primary">
              Generative AI systems like ChatGPT and Claude may seem magical,
              but they operate on some simple core principles. Understanding
              these basic concepts will help you better utilize these tools and
              recognize both their capabilities and limitations. While the
              technical details can be complex, the fundamental ideas are
              accessible to everyone.
            </p>
          </section>

          {/* Tokenization Section */}
          <section className="mb-10">
            <h2 className="section-header">
              <MessageSquare className="mr-2 text-blue-600 flex-shrink-0" />
              Tokenization: Breaking Language into Pieces
            </h2>

            <p className="text-primary mb-4">
              At the most basic level, generative AI systems process language by
              breaking it down into smaller units called <strong>tokens</strong>
              . A token can be as short as a single character or as long as a
              complete word.
            </p>

            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mb-4 border border-slate-200 dark:border-slate-700">
              <h3 className="card-title">Example of Tokenization:</h3>
              <p className="font-mono bg-white dark:bg-slate-900 p-3 rounded border border-slate-300 dark:border-slate-600 text-sm">
                "Welcome to BYU-Idaho" → ["Welcome", "to", "BYU", "-", "Idaho"]
              </p>
              <p className="text-small mt-2 text-primary">
                Note: Actual tokenization might differ depending on the specific
                AI system.
              </p>
            </div>

            <p className="text-primary mb-2">Why tokenization matters:</p>
            <ul className="list-disc list-outside space-y-1 pl-6 text-primary text-sm">
              <li>
                It transforms human language into a format that computers can
                process
              </li>
              <li>
                The quality of tokenization affects how well the AI understands
                context and meaning
              </li>
              <li>
                Different languages and technical terms present unique
                tokenization challenges
              </li>
            </ul>

            <div className="content-card border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/30 mt-4">
              <h3 className="card-title">BYU-Idaho Example:</h3>
              <p className="text-small text-primary">
                When you ask a chatbot about "I-Center hours," the system needs
                to understand that "I-Center" is a specific location at
                BYU-Idaho, not just the letter "I" and the word "Center." Proper
                tokenization helps the AI recognize campus-specific terms.
              </p>
            </div>
          </section>

          {/* Token Prediction Section */}
          <section className="mb-10">
            <h2 className="section-header">
              <BarChart className="mr-2 text-green-600 flex-shrink-0" />
              Token Prediction: The Core of Text Generation
            </h2>

            <p className="text-primary mb-4">
              At its heart, generative AI works through{" "}
              <strong>next-token prediction</strong> - predicting the most
              likely next word or token based on everything that came before it.
              This is similar to how your phone's keyboard suggests the next
              word as you type.
            </p>

            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mb-4 border border-slate-200 dark:border-slate-700">
              <h3 className="card-title">Example of Token Prediction:</h3>
              <p className="text-sm mb-1 text-primary">
                <strong>Input:</strong> "Students at BYU-Idaho are encouraged
                to..."
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">
                <strong>Potential next tokens (with probabilities):</strong>
              </p>
              <ul className="pl-5 text-slate-700 dark:text-slate-300 text-xs space-y-1">
                <li>"participate" (15%)</li>
                <li>"succeed" (12%)</li>
                <li>"develop" (10%)</li>
                <li>"attend" (8%)</li>
                <li>
                  ... hundreds more possibilities with lower probabilities
                </li>
              </ul>
            </div>

            <p className="text-primary mb-4">
              The AI chooses one of these tokens (typically with some randomness
              included), adds it to the sequence, and then repeats the process
              to generate the next token. This continues until the response is
              complete.
            </p>

            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
              <h3 className="card-title">
                Key Insights About Token Prediction:
              </h3>
              <ul className="list-disc list-outside space-y-1 pl-6 text-primary text-sm">
                <li>
                  Predictions are based on statistical patterns, not
                  understanding
                </li>
                <li>
                  The system considers the entire conversation history when
                  making predictions
                </li>
                <li>
                  Token prediction is why these systems can sometimes produce
                  factually incorrect content that "sounds right"
                </li>
                <li>
                  The predictive process is why AI responses can vary even to
                  the same prompt
                </li>
              </ul>
            </div>

            <div className="content-card border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/30 mt-4">
              <h3 className="card-title">Administrative Application:</h3>
              <p className="text-small text-primary">
                When drafting an email about a campus event, the AI predicts
                what information is typically included in event announcements
                (date, time, location, etc.) based on patterns it has seen. If
                you're writing about a devotional, it might predict terms like
                "speaker," "spiritual," and "Ballroom" because these tokens
                commonly appear in that context.
              </p>
            </div>
          </section>

          {/* Limitations Section */}
          <section className="mb-10">
            <h2 className="section-header">
              <AlertTriangle className="mr-2 text-amber-600 flex-shrink-0" />
              Understanding AI Limitations
            </h2>

            <p className="text-primary mb-4">
              Despite their impressive capabilities, current generative AI
              systems have important limitations to keep in mind:
            </p>

            <div className="card-grid">
              <div className="content-card bg-slate-50 dark:bg-slate-800/50">
                <h3 className="card-title">Hallucinations</h3>
                <p className="text-small text-primary">
                  AI systems can generate content that sounds plausible but is
                  factually incorrect. This happens because they predict what
                  sounds right based on patterns rather than retrieving verified
                  facts.
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 italic">
                  Example: An AI might confidently state incorrect information
                  about BYU-Idaho's founding date or misname campus buildings.
                </p>
              </div>

              <div className="content-card bg-slate-50 dark:bg-slate-800/50">
                <h3 className="card-title">Knowledge Cutoffs</h3>
                <p className="text-small text-primary">
                  AI systems only have knowledge from their training data, which
                  has a cutoff date. They don't have access to real-time
                  information unless specifically connected to other tools.
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 italic">
                  Example: The AI won't know about new campus policies, recent
                  events, or administrative changes that occurred after its
                  training cutoff.
                </p>
              </div>

              <div className="content-card bg-slate-50 dark:bg-slate-800/50">
                <h3 className="card-title">Context Limitations</h3>
                <p className="text-small text-primary">
                  AI systems can only consider a finite amount of text at once
                  (their context window). This limits their ability to work with
                  very lengthy documents or remember details from early in a
                  long conversation.
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 italic">
                  Example: When reviewing a lengthy student handbook document,
                  the AI might "forget" details from the beginning by the time
                  it reaches the end.
                </p>
              </div>

              <div className="content-card bg-slate-50 dark:bg-slate-800/50">
                <h3 className="card-title">Lack of True Understanding</h3>
                <p className="text-small text-primary">
                  While these systems can mimic understanding, they don't truly
                  comprehend meaning the way humans do. They recognize patterns
                  rather than understanding the world those patterns describe.
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 italic">
                  Example: The AI can draft a communication about campus values
                  but doesn't actually understand or believe in those values
                  itself.
                </p>
              </div>
            </div>
          </section>

          {/* Practical Implications */}
          <section className="mb-10">
            <h2 className="section-header">
              <BookOpen className="mr-2 text-indigo-600 flex-shrink-0" />
              Practical Implications for BYU-Idaho
            </h2>

            <p className="text-primary mb-4">
              Understanding these core concepts helps you use AI more
              effectively in your administrative role:
            </p>

            <div className="numbered-list">
              <div className="numbered-item">
                <div className="number-circle">
                  <span className="number">1</span>
                </div>
                <p className="text-primary text-sm">
                  <strong>Be specific with your prompts</strong> - Clear
                  instructions with relevant context produce better results
                </p>
              </div>

              <div className="numbered-item">
                <div className="number-circle">
                  <span className="number">2</span>
                </div>
                <p className="text-primary text-sm">
                  <strong>Verify factual information</strong> - Always check
                  AI-generated facts, especially about BYU-Idaho specific
                  policies or data
                </p>
              </div>

              <div className="numbered-item">
                <div className="number-circle">
                  <span className="number">3</span>
                </div>
                <p className="text-primary text-sm">
                  <strong>Iterate to improve results</strong> - Refine your
                  prompts based on initial responses to get better outcomes
                </p>
              </div>

              <div className="numbered-item">
                <div className="number-circle">
                  <span className="number">4</span>
                </div>
                <p className="text-primary text-sm">
                  <strong>Provide university-specific context</strong> - Include
                  relevant BYU-Idaho terminology, policies, or values when
                  needed
                </p>
              </div>

              <div className="numbered-item">
                <div className="number-circle">
                  <span className="number">5</span>
                </div>
                <p className="text-primary text-sm">
                  <strong>Understand the complementary role</strong> - AI works
                  best as a collaborative tool that enhances human judgment, not
                  replaces it
                </p>
              </div>
            </div>
          </section>

          <footer className="mt-8 text-center text-slate-500 dark:text-slate-400 text-sm border-t border-slate-200 dark:border-slate-700 pt-4">
            <p className="text-primary">
              This overview provides a foundation for understanding how
              generative AI systems work at a basic level. For more details on
              effective prompting and advanced features, see our other guides.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
