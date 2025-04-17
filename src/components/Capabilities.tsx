import React from "react"; // Keeping React import
import {
  FileText,
  Image,
  Mic,
  Layers,
  Zap,
  Brain,
  Check,
  AlertTriangle,
} from "lucide-react";

const Capabilities = () => {
  // Renamed component
  const aiTypes = [
    {
      title: "Text-Based AI",
      icon: <FileText size={36} className="text-blue-600" />,
      description:
        "Systems that understand, generate, and manipulate natural language text.",
      color: "bg-blue-50 border-blue-500", // Adjusted colors
      examples: [
        "University support chatbot for admissions and registration questions",
        "AI-powered writing assistance for student papers and assignments",
        "Automated email response systems for common faculty inquiries",
        "Course catalog and policy search systems",
      ],
      capabilities: [
        "Understand context and meaning in language",
        "Generate human-like text content",
        "Summarize long documents",
        "Answer questions based on available information",
      ],
      applications: [
        "24/7 student support chatbots for common questions",
        "Assistance drafting syllabi and course materials",
        "Summarizing student feedback from course evaluations",
        "Email triage and response drafting for administrative offices",
      ],
      limitations: [
        "May generate inaccurate information (hallucinations)",
        "Understanding of nuance and cultural context can be limited",
        "May reproduce biases present in training data",
      ],
    },
    {
      title: "Vision-Based AI",
      icon: <Image size={36} className="text-green-600" />,
      description:
        "Systems that analyze, understand, and generate visual information.",
      color: "bg-green-50 border-green-500", // Adjusted colors
      examples: [
        "Campus space occupancy monitoring systems",
        "Visual content generation for university publications",
        "Classroom attendance tracking systems",
        "Image recognition for campus security and access control",
      ],
      capabilities: [
        "Track people movement in classrooms, hallways, and the I-Center",
        "Generate custom images for university materials",
        "Analyze traffic patterns and facility usage",
        "Identify objects and activity in campus spaces",
      ],
      applications: [
        "Optimizing classroom scheduling based on actual usage",
        "Enhancing campus safety through monitoring",
        "Creating visual content for BYU-Idaho marketing",
        "Analyzing library and study space utilization",
      ],
      limitations: [
        "May struggle with unusual perspectives or lighting conditions",
        "Privacy concerns with facial recognition",
        "Can reproduce or amplify biases in image generation",
      ],
    },
    {
      title: "Audio-Based AI",
      icon: <Mic size={36} className="text-purple-600" />,
      description:
        "Systems that process, understand, generate, or transform audio data.",
      color: "bg-purple-50 border-purple-500", // Adjusted colors
      examples: [
        "Voice-interactive campus information kiosks",
        "Lecture transcription and captioning systems",
        "Accessibility tools for students with disabilities",
        "Language learning pronunciation feedback systems",
      ],
      capabilities: [
        "Answer spoken questions about campus locations and events",
        "Automatically transcribe classroom lectures and discussions",
        "Convert course readings to audio for accessibility",
        "Identify different speakers in recorded meetings",
      ],
      applications: [
        "Helping visitors navigate the BYU-Idaho campus",
        "Creating searchable archives of guest lectures and devotionals",
        "Supporting students with hearing or visual impairments",
        "Providing recorded pronunciation guidance for language courses",
      ],
      limitations: [
        "Accuracy issues with accents and background noise",
        "Voice cloning raises ethical concerns",
        "Challenges with understanding context in speech",
      ],
    },
    {
      title: "Multimodal AI",
      icon: <Layers size={36} className="text-orange-600" />,
      description:
        "Systems that integrate and process information across multiple types of data (text, images, audio, etc.).",
      color: "bg-orange-50 border-orange-500", // Adjusted colors
      examples: [
        "Interactive campus tour guides combining visual and voice interfaces",
        "Comprehensive student support systems that can understand documents and images",
        "Immersive learning experiences combining text, visuals, and audio",
        "Multimedia content creation tools for university communications",
      ],
      capabilities: [
        "Answer questions about campus images and documents",
        "Create integrated learning materials with text, images, and audio",
        "Generate presentations and multimedia content for university events",
        "Understand and analyze student submissions in various formats",
      ],
      applications: [
        "Enhanced virtual campus tours and orientation experiences",
        "Creating accessible learning materials for diverse student needs",
        "Developing interactive exhibits for campus museums and displays",
        "Facilitating multimedia documentation for academic and administrative processes",
      ],
      limitations: [
        "Increased complexity in development and training",
        "Higher computational requirements",
        "Challenges in accurately aligning different data types",
      ],
    },
  ];

  const aiTasks = [
    {
      category: "Common AI Tasks",
      tasks: [
        {
          name: "Classification",
          description:
            "Categorizing inputs into predefined classes or categories.",
          examples: "Email spam detection, sentiment analysis, image labeling",
        },
        {
          name: "Regression",
          description:
            "Predicting continuous numerical values based on input features.",
          examples:
            "Price prediction, weather forecasting, estimating age from photos",
        },
        {
          name: "Generation",
          description:
            "Creating new content based on patterns learned from training data.",
          examples: "Text completion, image creation, music composition",
        },
        {
          name: "Translation",
          description:
            "Converting content from one form or language to another.",
          examples: "Language translation, speech-to-text, text-to-image",
        },
        {
          name: "Clustering",
          description:
            "Grouping similar data points without predefined categories.",
          examples: "Customer segmentation, topic modeling, anomaly detection",
        },
        {
          name: "Recommendation",
          description:
            "Suggesting relevant items or content based on patterns and preferences.",
          examples: "Product recommendations, content feeds, music playlists",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            Types of AI Systems and Tasks
          </h1>
          <p className="text-lg text-slate-600">
            Understanding the different capabilities of modern artificial
            intelligence
          </p>
        </header>

        {/* Intro Box */}
        <div className="mb-8 bg-cyan-50 p-5 rounded-lg border-l-4 border-cyan-500">
          <h2 className="text-xl font-semibold text-slate-800 mb-2 flex items-center">
            <Brain className="mr-2 text-cyan-500" /> {/* Adjusted Icon Color */}
            What Makes AI Systems Different?
          </h2>
          <p className="text-slate-700">
            Modern AI systems are specialized based on the types of data they
            process and the tasks they perform. Understanding these
            specializations helps you identify the right AI tool for your
            specific needs. Most systems excel in one primary domain (text,
            vision, or audio) while multimodal systems combine capabilities
            across domains.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">
            AI Systems by Data Type
          </h2>

          <div className="grid grid-cols-1 gap-8">
            {aiTypes.map((type, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-sm border-l-4 ${type.color}`}
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4 flex-shrink-0">{type.icon}</div>
                  <h3 className="text-xl font-bold text-slate-800">
                    {type.title}
                  </h3>
                </div>

                <p className="text-slate-700 mb-4">{type.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">
                      Key Examples:
                    </h4>
                    <ul className="list-disc pl-5 text-slate-600 space-y-1">
                      {type.examples.map((example, i) => (
                        <li key={i}>{example}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">
                      Core Capabilities:
                    </h4>
                    <ul className="list-disc pl-5 text-slate-600 space-y-1">
                      {type.capabilities.map((capability, i) => (
                        <li key={i}>{capability}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">
                      Common Applications:
                    </h4>
                    <ul className="list-disc pl-5 text-slate-600 space-y-1">
                      {type.applications.map((application, i) => (
                        <li key={i}>{application}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">
                      Current Limitations:
                    </h4>
                    <ul className="list-disc pl-5 text-slate-600 space-y-1">
                      {type.limitations.map((limitation, i) => (
                        <li key={i}>{limitation}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">
            Common AI Tasks
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiTasks[0].tasks.map((task, index) => (
              <div
                key={index}
                className="p-5 rounded-lg shadow-sm border-l-4 border-slate-400 bg-slate-50"
              >
                <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center">
                  <Zap className="mr-2 text-slate-500" size={20} />{" "}
                  {/* Adjusted Icon Color */}
                  {task.name}
                </h3>
                <p className="text-slate-700 mb-2 text-sm">
                  {task.description}
                </p>
                <p className="text-sm text-slate-600">
                  <strong>Examples:</strong> {task.examples}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">
            Choosing the Right AI for Your Needs
          </h2>

          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-start p-4 rounded-lg bg-green-50">
              <div className="mr-3 mt-1 flex-shrink-0">
                <Check className="text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">
                  For Content Creation and Communication
                </h4>
                <p className="text-slate-700 text-sm">
                  Text-based AI systems like ChatGPT and Claude are ideal for
                  drafting emails, creating content, answering questions, and
                  assisting with writing tasks.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 rounded-lg bg-green-50">
              <div className="mr-3 mt-1 flex-shrink-0">
                <Check className="text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">
                  For Visual Content and Analysis
                </h4>
                <p className="text-slate-700 text-sm">
                  Vision-based AI systems like DALL-E and Midjourney excel at
                  creating images, analyzing visual data, and enhancing visual
                  content.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 rounded-lg bg-green-50">
              <div className="mr-3 mt-1 flex-shrink-0">
                <Check className="text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">
                  For Speech and Audio Processing
                </h4>
                <p className="text-slate-700 text-sm">
                  Audio-based AI systems like speech recognition tools and voice
                  assistants are best for transcription, voice interfaces, and
                  audio content creation.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 rounded-lg bg-green-50">
              <div className="mr-3 mt-1 flex-shrink-0">
                <Check className="text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">
                  General Purpose AI
                </h4>
                <p className="text-slate-700 text-sm">
                  General purpose AI systems like ChatGPT and Gemini utilize
                  state-of-the-art multi-modal AI models that are capable of
                  handling combinations of text, images, and audio in integrated
                  ways.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Important Considerations Box */}
        <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500 mb-8">
          <div className="flex items-start">
            <AlertTriangle className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-slate-800 mb-1">
                Important Considerations
              </h3>
              <p className="text-slate-700 text-sm">
                All AI systems have limitations and potential biases. Always
                review AI-generated content before use, especially for sensitive
                or important tasks. Consider privacy implications when uploading
                data to AI systems, particularly for personal or confidential
                information.
              </p>
            </div>
          </div>
        </div>

        <footer className="text-center text-slate-500 text-sm">
          <p>
            This overview provides a general introduction to AI system types.
            The field is rapidly evolving with new capabilities emerging
            regularly.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Capabilities;
