import { useState } from "react";

const ComprehensiveContextExercise = () => {
  const [prediction, setPrediction] = useState("");
  const [contextElements, setContextElements] = useState({
    audience: false,
    dates: false,
    rooms: false,
    impact: false,
    reason: false,
    alternatives: false,
    contact: false,
    other: false,
  });
  const [otherContext, setOtherContext] = useState("");
  const [refinement, setRefinement] = useState("");
  const [afterDemo, setAfterDemo] = useState("");
  const [step, setStep] = useState(1);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContextElements({
      ...contextElements,
      [e.target.name]: e.target.checked,
    });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm mb-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">
          Comprehensive Context Prompt Exercise
        </h1>
        <p className="text-slate-700">
          You are a facility manager at BYU-Idaho who needs to send an email
          about upcoming maintenance.
        </p>
      </div>

      <div className="bg-slate-800 text-slate-200 p-4 rounded-lg mb-8 font-mono text-sm shadow overflow-auto">
        <p className="mb-2 font-semibold text-emerald-300">Your Prompt:</p>
        <p>
          Draft an email to faculty and staff about HVAC maintenance in Chapman
          Hall scheduled for June 5-7 from 8am-4pm. Maintenance will cause
          temperature fluctuations between 65-80°F in rooms 101-115. Alternative
          spaces are available in Romney Building. This is preventative
          maintenance that will improve energy efficiency by 15% and prevent
          summer cooling issues. Include contact information for Facilities
          Manager Adam Johnson at ajohnson@byui.edu or extension 2415 for
          questions or accommodations.
        </p>
      </div>

      {step === 1 && (
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6 transition-opacity duration-300">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            Step 1: Predict the Output
          </h2>
          <p className="mb-4 text-slate-700">
            Before seeing the AI's response, what information do you expect this
            prompt will generate?
          </p>
          <textarea
            className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 h-32 text-slate-800"
            value={prediction}
            onChange={(e) => setPrediction(e.target.value)}
            placeholder="Write your prediction here..."
          />
          <button
            className="mt-5 inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200"
            onClick={handleNext}
          >
            Next Step
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6 transition-opacity duration-300">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            Step 2: Context Elements Inventory
          </h2>
          <p className="mb-5 text-slate-700">
            Check all the elements included in this prompt:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            {(() => {
              const contextKeys: Array<keyof typeof contextElements> = [
                "audience",
                "dates",
                "rooms",
                "impact",
                "reason",
                "alternatives",
                "contact",
                "other",
              ];
              return contextKeys.map((key) => (
                <label
                  key={key}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id={key}
                    name={key}
                    className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                    checked={contextElements[key]}
                    onChange={handleCheckboxChange}
                  />
                  <span className="text-slate-700">
                    {
                      {
                        audience: "Who the email is for (audience)",
                        dates: "When (dates AND times)",
                        rooms: "Where (specific rooms affected)",
                        impact: "What will happen (temp ranges)",
                        reason: "Why it's happening (preventative/efficiency)",
                        alternatives: "Alternatives provided",
                        contact: "Contact information",
                        other: "Other",
                      }[key]
                    }
                  </span>
                </label>
              ));
            })()}
          </div>

          {contextElements.other && (
            <input
              type="text"
              className="w-full p-2 border border-slate-300 rounded-lg mb-5 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 text-slate-800"
              placeholder="Specify other context elements..."
              value={otherContext}
              onChange={(e) => setOtherContext(e.target.value)}
            />
          )}

          <div className="flex flex-col sm:flex-row justify-between space-y-3 sm:space-y-0 sm:space-x-3">
            <button
              className="inline-flex items-center justify-center px-6 py-2 border border-slate-300 text-base font-medium rounded-md shadow-sm text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200"
              onClick={handleBack}
            >
              Back
            </button>
            <button
              className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200"
              onClick={handleNext}
            >
              Next Step
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6 transition-opacity duration-300">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            Step 3: Refinement
          </h2>
          <p className="mb-4 text-slate-700">
            Is there any additional context that would make this communication
            even more effective?
          </p>
          <textarea
            className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 h-32 text-slate-800"
            value={refinement}
            onChange={(e) => setRefinement(e.target.value)}
            placeholder="Write your refinement ideas here..."
          />
          <div className="flex flex-col sm:flex-row justify-between space-y-3 sm:space-y-0 sm:space-x-3 mt-5">
            <button
              className="inline-flex items-center justify-center px-6 py-2 border border-slate-300 text-base font-medium rounded-md shadow-sm text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200"
              onClick={handleBack}
            >
              Back
            </button>
            <button
              className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200"
              onClick={handleNext}
            >
              Next Step
            </button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6 transition-opacity duration-300">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            After the Demonstration
          </h2>
          <p className="mb-4 text-slate-700">
            When you see the actual AI output, evaluate how complete and
            effective it is as a communication:
          </p>
          <textarea
            className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 h-32 text-slate-800"
            value={afterDemo}
            onChange={(e) => setAfterDemo(e.target.value)}
            placeholder="Write your evaluation here..."
          />
          <div className="flex flex-col sm:flex-row justify-between space-y-3 sm:space-y-0 sm:space-x-3 mt-5">
            <button
              className="inline-flex items-center justify-center px-6 py-2 border border-slate-300 text-base font-medium rounded-md shadow-sm text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200"
              onClick={handleBack}
            >
              Back
            </button>
            <button
              className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200"
              onClick={() =>
                alert("Exercise completed! Thanks for participating.")
              }
            >
              Complete
            </button>
          </div>
        </div>
      )}

      <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
        <h3 className="font-semibold text-emerald-800">Key Takeaway:</h3>
        <p className="text-emerald-700">
          Comprehensive context enables AI to generate content that requires
          minimal editing while addressing the specific needs of your audience
          and situation.
        </p>
      </div>

      <div className="mt-6 text-right">
        <p className="text-sm text-slate-600 mb-1">Step {step} of 4</p>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div
            className="bg-emerald-600 h-2 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${(step / 4) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveContextExercise;
