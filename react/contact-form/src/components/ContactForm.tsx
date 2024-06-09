interface ContactFormProps {
  data: {
    firstName: string;
    lastName: string;
    email: string;
    queryType: string;
    message: string;
    consent: boolean;
    errors: {
      firstName?: boolean;
      lastName?: boolean;
      email?: boolean;
      queryType?: boolean;
      message?: boolean;
      consent?: boolean;
    };
  };
  handlers: {
    setFirstName: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setLastName: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setQueryType: (queryType: string) => void;
    setMessage: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    setConsent: () => void;
    handleSubmit: (e: React.FormEvent) => void;
  };
}

export default function ContactForm({ data, handlers }: ContactFormProps) {
  const selectedQuery = data.queryType;

  return (
    <form className="space-y-6 text-darkGrey" onSubmit={handlers.handleSubmit}>
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-4">
        <div className="flex grow flex-col gap-2">
          <label
            htmlFor="firstName"
            className="relative after:absolute after:z-10 after:pl-2 after:opacity-75 after:content-['*']"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={data.firstName}
            onChange={handlers.setFirstName}
            required
            className={`${data.errors.firstName ? "border-red" : ""} color-inherit rounded-md border border-mediumGreen px-6 py-3`}
          />
          {data.errors.firstName && (
            <p className="text-xs text-red">This field is required</p>
          )}
        </div>
        <div className="flex grow flex-col gap-2">
          <label
            htmlFor="lastName"
            className="relative after:absolute after:z-10 after:pl-2 after:opacity-75 after:content-['*']"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={data.lastName}
            onChange={handlers.setLastName}
            required
            className={`${data.errors.firstName ? "border-red" : ""} color-inherit rounded-md border border-mediumGreen px-6 py-3`}
          />
          {data.errors.lastName && (
            <p className="text-xs text-red">This field is required</p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="relative after:absolute after:z-10 after:pl-2 after:opacity-75 after:content-['*']"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
          onChange={handlers.setEmail}
          required
          className={`${data.errors.firstName ? "border-red" : ""} color-inherit rounded-md border border-mediumGreen px-6 py-3`}
        />
        {data.errors.email && (
          <p className="text-xs text-red">Please enter a valid email address</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label className="relative after:absolute after:z-10 after:pl-2 after:opacity-75 after:content-['*']">
          Query Type
        </label>
        <div className="flex flex-col gap-4 lg:flex-row">
          <div
            className={`${selectedQuery === "generalEnquiry" ? "bg-lightGreen" : ""} ${data.errors.queryType ? "border-red" : ""} relative grow cursor-pointer rounded-md border border-mediumGreen px-8 py-4 hover:bg-lightGreen`}
            onClick={() => handlers.setQueryType("generalEnquiry")}
          >
            <input
              type="radio"
              name="queryType"
              id="generalEnquiry"
              className="sr-only"
              value="generalEnquiry"
            />
            <label
              htmlFor="generalEnquiry"
              className="flex cursor-pointer items-center gap-4"
            >
              <span
                className={`${selectedQuery === "generalEnquiry" ? "after:opacity-100" : ""} after:content-['']" relative inline-block h-[20px] w-[20px] cursor-pointer rounded-full border-2 border-mediumGrey after:absolute after:left-1/2 after:top-1/2 after:h-[12px] after:w-[12px] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-mediumGreen after:opacity-0`}
              ></span>
              General Enquiry
            </label>
          </div>
          <div
            className={`${selectedQuery === "supportRequest" ? "bg-lightGreen" : ""} ${data.errors.queryType ? "border-red" : ""} relative grow cursor-pointer rounded-md border border-mediumGreen px-8 py-4 hover:bg-lightGreen`}
            onClick={() => handlers.setQueryType("supportRequest")}
          >
            <input
              type="radio"
              name="queryType"
              id="supportRequest"
              className="sr-only"
              value="supportRequest"
            />
            <label
              htmlFor="supportRequest"
              className="flex cursor-pointer items-center gap-4"
            >
              <span
                className={`${selectedQuery === "supportRequest" ? "after:opacity-100" : ""} after:content-['']" relative inline-block h-[20px] w-[20px] cursor-pointer rounded-full border-2 border-mediumGrey after:absolute after:left-1/2 after:top-1/2 after:h-[12px] after:w-[12px] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-mediumGreen after:opacity-0`}
              ></span>
              Support Request
            </label>
          </div>
        </div>
        {data.errors.queryType && (
          <p className="text-xs text-red">Please select a query type</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="relative after:absolute after:z-10 after:pl-2 after:opacity-75 after:content-['*']"
        >
          Message
        </label>
        <textarea
          required
          id="message"
          value={data.message}
          className={`${data.errors.message ? "border-red" : ""} resize-none rounded-md border border-mediumGreen px-6 py-4`}
          onChange={handlers.setMessage}
        ></textarea>
        {data.errors.message && (
          <p className="text-xs text-red">This field is required</p>
        )}
      </div>
      <div className="space-y-2">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          required
          checked={data.consent}
          onChange={handlers.setConsent}
          className="sr-only"
        />
        <label
          htmlFor="consent"
          className="group flex cursor-pointer items-center gap-2"
        >
          <span
            className={`${data.consent ? "after:opacity-100" : ""} after:content-['']" relative inline-block h-[20px] w-[20px] cursor-pointer border-2 border-mediumGrey after:absolute after:left-1/2 after:top-1/2 after:h-[12px] after:w-[12px] after:-translate-x-1/2 after:-translate-y-1/2 after:bg-mediumGreen after:opacity-0 after:hover:opacity-50 group-hover:after:opacity-50`}
          ></span>
          I consent to being contacted by the team
        </label>
        {data.errors.consent && (
          <p className="text-xs text-red">
            To submit this form, please consent to being contacted
          </p>
        )}
      </div>
      <div>
        <button className="w-full rounded-md bg-mediumGreen py-4 font-bold tracking-wider text-white">
          Submit
        </button>
      </div>
    </form>
  );
}
