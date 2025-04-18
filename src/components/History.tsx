import { Star, Zap, Cpu, Brain, BookOpen, Rocket } from "lucide-react";

const History = () => {
  // Renamed component
  const timelineSections = [
    {
      period: "Early Foundations (1940s-1950s)",
      color: "bg-blue-600", // Slightly adjusted colors for better contrast/fit
      icon: <BookOpen className="text-white" />,
      milestones: [
        {
          year: "1943",
          title: "Neural Network Theory",
          description:
            "Warren McCulloch and Walter Pitts published their paper describing the first mathematical model of neural networks, laying groundwork for future AI concepts.",
        },
        {
          year: "1950",
          title: "The Turing Test",
          description:
            "Alan Turing published 'Computing Machinery and Intelligence,' introducing the Turing test to determine if a machine can exhibit human-like intelligence.",
        },
        {
          year: "1956",
          title: "Birth of 'Artificial Intelligence'",
          description:
            "John McCarthy coined the term 'Artificial Intelligence' at the Dartmouth Conference, marking the official beginning of AI as an academic field.",
          featured: true,
        },
      ],
    },
    {
      period: "Early Development (1950s-1960s)",
      color: "bg-green-600",
      icon: <Star className="text-white" />,
      milestones: [
        {
          year: "1958",
          title: "LISP Programming Language",
          description:
            "John McCarthy created LISP, the first programming language specifically designed for AI research, still used today.",
        },
        {
          year: "1959",
          title: "Machine Learning Coined",
          description:
            "Arthur Samuel coined the term 'machine learning' while developing a program that could play checkers and improve with experience.",
        },
        {
          year: "1966",
          title: "ELIZA Chatbot",
          description:
            "Joseph Weizenbaum created ELIZA, an early natural language processing program that could simulate conversation with humans.",
          featured: true,
        },
        {
          year: "1969",
          title: "First Mobile Robot",
          description:
            "Shakey the Robot was developed as the first mobile robot that could reason about its actions, combining perception and problem-solving.",
        },
      ],
    },
    {
      period: "AI Winter & Revival (1970s-1980s)",
      color: "bg-purple-600",
      icon: <Zap className="text-white" />,
      milestones: [
        {
          year: "1970s",
          title: "First AI Winter",
          description:
            "Funding and interest in AI declined due to unmet expectations and limitations in computing power.",
        },
        {
          year: "1980",
          title: "Expert Systems",
          description:
            "The first commercial expert system, XCON, was deployed to help configure computer orders, demonstrating practical AI applications.",
          featured: true,
        },
        {
          year: "1986",
          title: "Backpropagation Popularized",
          description:
            "Efficient neural network training through backpropagation gained popularity, addressing earlier limitations.",
        },
      ],
    },
    {
      period: "Modern Foundations (1990s-2000s)",
      color: "bg-orange-500",
      icon: <Cpu className="text-white" />,
      milestones: [
        {
          year: "1997",
          title: "Deep Blue Defeats Chess Champion",
          description:
            "IBM's Deep Blue defeated world chess champion Garry Kasparov, demonstrating advanced computational decision-making.",
          featured: true,
        },
        {
          year: "2002",
          title: "Roomba Released",
          description:
            "iRobot released the Roomba, bringing practical AI applications into everyday homes through autonomous vacuum cleaning.",
        },
        {
          year: "2005",
          title: "Self-Driving Cars",
          description:
            "Stanford's autonomous vehicle 'Stanley' won the DARPA Grand Challenge, navigating 132 miles of desert terrain without human intervention.",
        },
      ],
    },
    {
      period: "Deep Learning Revolution (2010s)",
      color: "bg-red-600",
      icon: <Brain className="text-white" />,
      milestones: [
        {
          year: "2011",
          title: "Virtual Assistants",
          description:
            "Apple released Siri, bringing conversational AI to mainstream consumer devices and everyday use.",
        },
        {
          year: "2012",
          title: "ImageNet Breakthrough",
          description:
            "AlexNet demonstrated the power of deep learning in image recognition, sparking renewed interest in neural networks.",
        },
        {
          year: "2014",
          title: "Generative Adversarial Networks",
          description:
            "GANs were introduced, enabling AI systems to generate realistic images and other content by having networks compete with each other.",
        },
        {
          year: "2016",
          title: "AlphaGo Victory",
          description:
            "Google's AlphaGo defeated world champion Lee Sedol at Go, a game significantly more complex than chess, demonstrating advanced reasoning.",
        },
        {
          year: "2017",
          title: "Transformers Architecture",
          description:
            "Google researchers published 'Attention is All You Need', introducing the Transformer architecture that would revolutionize NLP and become the foundation for modern AI systems like GPT and BERT.",
          featured: true,
        },
      ],
    },
    {
      period: "Generative AI Era (2020s)",
      color: "bg-teal-600", // Match site accent
      icon: <Rocket className="text-white" />,
      milestones: [
        {
          year: "2020",
          title: "GPT-3 Released",
          description:
            "OpenAI's GPT-3 demonstrated remarkable text generation capabilities, bringing natural language processing to new heights.",
        },
        {
          year: "2022",
          title: "DALL-E & Image Generation",
          description:
            "AI systems like DALL-E 2 and Midjourney enabled creating detailed images from text descriptions, revolutionizing visual content creation.",
        },
        {
          year: "2022",
          title: "ChatGPT Launch",
          description:
            "OpenAI's ChatGPT brought conversational AI to the mainstream, demonstrating unprecedented natural language abilities.",
          featured: true,
        },
        {
          year: "2023-Present",
          title: "Multimodal AI",
          description:
            "AI systems now work across text, images, audio, and video, with increasing capabilities in reasoning and creativity.",
        },
      ],
    },
  ];

  return (
    // Use standard container padding
    <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            The History of Artificial Intelligence
          </h1>
          <p className="text-lg text-slate-600">
            A visual journey through the key developments that shaped AI
          </p>
        </header>

        {/* Intro box styling */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-2">
            What is Artificial Intelligence?
          </h2>
          <p className="text-slate-700">
            Artificial Intelligence (AI) refers to the simulation of human
            intelligence in machines programmed to think and learn like humans.
            The field encompasses machine learning, natural language processing,
            computer vision, and more. AI systems can analyze data, recognize
            patterns, solve problems, and continuously improve their performance
            over time.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative history-timeline">
          {timelineSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-12">
              {/* Section Header */}
              <div
                className={`flex items-center ${section.color} text-white px-4 py-2 rounded-lg shadow-md mb-6`}
              >
                <div className="mr-3">{section.icon}</div>
                <h2 className="text-xl font-bold">{section.period}</h2>
              </div>

              {/* Milestones for the section */}
              <div className="relative">
                {/* Timeline vertical line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-slate-200"></div>

                {section.milestones.map((milestone, milestoneIndex) => (
                  <div
                    key={milestoneIndex}
                    className={`relative flex items-start mb-8 ${
                      milestone.featured ? "opacity-100" : "opacity-90"
                    }`}
                  >
                    {/* Year Bubble */}
                    <div
                      className={`flex-shrink-0 w-16 h-16 rounded-full timeline-circle ${
                        milestone.featured ? section.color : "bg-slate-200"
                      } flex items-center justify-center z-10 shadow`}
                    >
                      <span
                        className={`text-sm font-bold timeline-year ${
                          milestone.featured ? "text-white" : "text-slate-700"
                        }`}
                      >
                        {milestone.year}
                      </span>
                    </div>

                    {/* Content Box */}
                    <div className="ml-6 timeline-content">
                      <div
                        className={`p-4 bg-slate-50 rounded-lg shadow-sm border ${
                          milestone.featured
                            ? `border-l-4 ${section.color}`
                            : "border-slate-200"
                        }`}
                      >
                        <h3 className="text-lg font-semibold text-slate-800 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-slate-600">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Future outlook box */}
        <div className="mt-10 p-5 rounded-lg border border-slate-200">
          <h2 className="text-xl font-bold text-slate-800 mb-3">
            The Future of AI
          </h2>
          <p className="text-slate-700">
            AI continues to evolve rapidly, with current research focusing on
            improving generative capabilities, ethical AI development, human-AI
            collaboration, and specialized applications across industries. The
            coming years may bring advancements in AI reasoning, multimodal
            systems that combine different types of data, and increasingly
            personalized AI assistants.
          </p>
        </div>

        <footer className="mt-8 text-center text-slate-500 text-sm">
          <p>
            This timeline highlights major milestones but is not exhaustive. The
            field of AI has been shaped by countless researchers, innovations,
            and breakthroughs.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default History;
