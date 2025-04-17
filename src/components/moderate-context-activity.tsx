import { useState } from "react";

const ModerateContextExercise = () => {
  const [prediction, setPrediction] = useState("");
  const [addedInfo, setAddedInfo] = useState({
    audience: false,
    when: false,
    effect: false,
    other: false,
  });
  const [otherAdded, setOtherAdded] = useState("");

  const [missingInfo, setMissingInfo] = useState({
    times: false,
    rooms: false,
    severity: false,
    alternatives: false,
    reason: false,
    contact: false,
    other: false,
  });
  const [otherMissing, setOtherMissing] = useState("");

  const [afterDemo, setAfterDemo] = useState("");
  const [step, setStep] = useState(1);

  const handleAddedCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAddedInfo({
      ...addedInfo,
      [e.target.name]: e.target.checked,
    });
  };

  const handleMissingCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMissingInfo({
      ...missingInfo,
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
          Moderate Context Prompt Exercise
        </h1>
        <p className="text-slate-700">
          You are a facility manager at BYU-Idaho who needs to send an email
          about upcoming maintenance.
        </p>
      </div>

      <div className="bg-slate-800 text-slate-200 p-4 rounded-lg mb-8 font-mono text-sm shadow">
        <p className="mb-2 font-semibold text-teal-300">Your Prompt:</p>
        <p>
          Draft an email to faculty and staff about HVAC maintenance in Chapman
          Hall scheduled for June 5-7 that will affect temperature control.
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
            className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 h-32 text-slate-800"
            value={prediction}
            onChange={(e) => setPrediction(e.target.value)}
            placeholder="Write your prediction here..."
          />
          <button
            className="mt-5 inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
            onClick={handleNext}
          >
            Next Step
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6 transition-opacity duration-300">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            Step 2: Identify Information Added
          </h2>
          <p className="mb-5 text-slate-700">
            What details have been added to this prompt compared to Group 1's
            prompt?
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            {(() => {
              const addedInfoKeys: Array<keyof typeof addedInfo> = [
                "audience",
                "when",
                "effect",
                "other",
              ];
              return addedInfoKeys.map((key) => (
                <label
                  key={key}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id={`added-${key}`}
                    name={key}
                    className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                    checked={addedInfo[key]}
                    onChange={handleAddedCheckboxChange}
                  />
                  <span className="text-slate-700">
                    {
                      {
                        audience: "Who the email is for",
                        when: "When maintenance occurs",
                        effect: "What effect it has",
                        other: "Other",
                      }[key]
                    }
                  </span>
                </label>
              ));
            })()}
          </div>

          {addedInfo.other && (
            <input
              type="text"
              className="w-full p-2 border border-slate-300 rounded-lg mb-5 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 text-slate-800"
              placeholder="Specify other added information..."
              value={otherAdded}
              onChange={(e) => setOtherAdded(e.target.value)}
            />
          )}

          <div className="flex flex-col sm:flex-row justify-between space-y-3 sm:space-y-0 sm:space-x-3">
            <button
              className="inline-flex items-center justify-center px-6 py-2 border border-slate-300 text-base font-medium rounded-md shadow-sm text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
              onClick={handleBack}
            >
              Back
            </button>
            <button
              className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
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
            Step 3: Still Missing
          </h2>
          <p className="mb-5 text-slate-700">
            What important information is still missing from this prompt?
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            {(() => {
              const missingInfoKeys: Array<keyof typeof missingInfo> = [
                "times",
                "rooms",
                "severity",
                "alternatives",
                "reason",
                "contact",
                "other",
              ];
              return missingInfoKeys.map((key) => (
                <label
                  key={key}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id={`missing-${key}`}
                    name={key}
                    className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                    checked={missingInfo[key]}
                    onChange={handleMissingCheckboxChange}
                  />
                  <span className="text-slate-700">
                    {
                      {
                        times: "Specific times during days",
                        rooms: "Which rooms/areas affected",
                        severity: "Severity of temp changes",
                        alternatives: "Alternative arrangements",
                        reason: "Reason/benefit of maintenance",
                        contact: "Contact information",
                        other: "Other",
                      }[key]
                    }
                  </span>
                </label>
              ));
            })()}
          </div>

          {missingInfo.other && (
            <input
              type="text"
              className="w-full p-2 border border-slate-300 rounded-lg mb-5 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 text-slate-800"
              placeholder="Specify other missing information..."
              value={otherMissing}
              onChange={(e) => setOtherMissing(e.target.value)}
            />
          )}

          <div className="flex flex-col sm:flex-row justify-between space-y-3 sm:space-y-0 sm:space-x-3">
            <button
              className="inline-flex items-center justify-center px-6 py-2 border border-slate-300 text-base font-medium rounded-md shadow-sm text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
              onClick={handleBack}
            >
              Back
            </button>
            <button
              className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
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
            When you see the actual AI output, note how the additional context
            affected the quality of the response:
          </p>
          <textarea
            className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 h-32 text-slate-800"
            value={afterDemo}
            onChange={(e) => setAfterDemo(e.target.value)}
            placeholder="Write your observations here..."
          />
          <div className="flex flex-col sm:flex-row justify-between space-y-3 sm:space-y-0 sm:space-x-3 mt-5">
            <button
              className="inline-flex items-center justify-center px-6 py-2 border border-slate-300 text-base font-medium rounded-md shadow-sm text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
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

      {/* Key Takeaway Box */}
      <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
        <h3 className="font-semibold text-teal-800">Key Takeaway:</h3>
        <p className="text-teal-700">
          Adding basic contextual elements improves the output but still leaves
          gaps that require human intervention to create a fully effective
          communication.
        </p>
      </div>
    </div>
  );
};

export default ModerateContextExercise;
