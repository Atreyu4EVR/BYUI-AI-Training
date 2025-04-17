const Prerequisites = () => {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm space-y-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Prerequisites
        </h1>

        <div>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">
            What You'll Need For the Training
          </h2>
          <p className="text-slate-700">
            To ensure you get the most out of our AI training sessions, please
            complete these simple prerequisites before attending:
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-slate-800 mb-3">
            Create a ChatGPT Account
          </h3>
          <p className="text-slate-700 mb-4">
            Our training will focus primarily on ChatGPT, as it offers an
            excellent introduction to AI capabilities for administrative work.
            Please follow these steps to create your account:
          </p>
          <ul className="list-disc list-outside space-y-2 pl-6 text-slate-700 mb-4">
            <li>
              Use your BYU-Idaho email address (
              <code className="text-sm bg-slate-100 px-1 rounded">
                email@byui.edu
              </code>
              ) to sign up
            </li>
            <li>
              Visit{" "}
              <a
                href="https://chatgpt.com/auth/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-700 font-medium hover:text-cyan-600 transition-colors duration-200"
              >
                chatgpt.com/auth/login
              </a>{" "}
              and click "Sign Up"
            </li>
            <li>
              Follow the on-screen instructions to complete your registration
            </li>
            <li>Verify your email address when prompted</li>
          </ul>
          <p className="text-slate-700 mb-4">
            <strong>Note:</strong> The free version of ChatGPT is sufficient for
            our training purposes. You do not need to purchase ChatGPT Plus*.
          </p>
          <p className="text-slate-700">
            <em>
              *Employees may seek permission to have subscriptions to these
              services covered by department budgets. University leaders should
              be careful in both approving individual subscriptions as it may
              establish an incorrect precedent that the University will pay for
              individual licenses or subscriptions. Approvals for paid or
              premium subscriptions should consider if the need and alignment of
              the proposed use of the premium service is necessary for employee
              role. All GenAI products, including ChatGPT, are still under
              evaluation may only be used in accordance with the data
              restrictions described above unless otherwise approved by the AI
              Governance Committee.
            </em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Prerequisites;
