import { useState } from "react";

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
  const [selectedQueryType, setSelectedQueryType] = useState<string | null>();
  const selectedQuery = data.queryType;

  return (
    <form className="space-y-6 text-darkGrey" onSubmit={handlers.handleSubmit}>
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <fieldset className="flex flex-col gap-6 lg:flex-row lg:gap-4">
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
            className={`${data.errors.firstName ? "border-red" : ""} color-inherit rounded-md border border-mediumGreen px-6 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mediumGreen`}
            autoComplete="given-name"
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
            className={`${data.errors.firstName ? "border-red" : ""} color-inherit rounded-md border border-mediumGreen px-6 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mediumGreen`}
            autoComplete="family-name"
          />
          {data.errors.lastName && (
            <p className="text-xs text-red">This field is required</p>
          )}
        </div>
      </fieldset>
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
          className={`${data.errors.firstName ? "border-red" : ""} color-inherit rounded-md border border-mediumGreen px-6 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mediumGreen`}
        />
        {data.errors.email && (
          <p className="text-xs text-red">Please enter a valid email address</p>
        )}
      </div>
      <fieldset className="space-y-2">
        <legend className="relative after:absolute after:z-10 after:pl-2 after:opacity-75 after:content-['*']">
          Query Type
        </legend>
        <div className="flex flex-col gap-4 lg:flex-row">
          <div
            className={`flex grow items-center gap-4 rounded-md border border-mediumGreen ${selectedQuery === "generalEnquiry" ? "bg-lightGreen" : ""} ${data.errors.queryType ? "border-red" : ""}`}
          >
            <label
              htmlFor="generalEnquiry"
              className="flex w-full cursor-pointer items-center gap-4 px-8 py-4"
            >
              <input
                checked={selectedQueryType === "generalEnquiry"}
                type="radio"
                name="queryType1"
                id="generalEnquiry"
                onChange={() => {
                  setSelectedQueryType("generalEnquiry");
                  handlers.setQueryType("generalEnquiry");
                }}
                className="cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mediumGreen"
              />
              <span>General Enquiry</span>
            </label>
          </div>
          <div
            className={`flex grow items-center gap-4 rounded-md border border-mediumGreen ${selectedQuery === "supportRequest" ? "bg-lightGreen" : ""} ${data.errors.queryType ? "border-red" : ""}`}
          >
            <label
              htmlFor="supportRequest"
              className="flex w-full cursor-pointer items-center gap-4 px-8 py-4"
            >
              <input
                checked={selectedQueryType === "supportRequest"}
                type="radio"
                name="queryType2"
                id="supportRequest"
                onChange={() => {
                  setSelectedQueryType("supportRequest");
                  handlers.setQueryType("supportRequest");
                }}
                className="cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mediumGreen"
              />
              <span>Support Request</span>
            </label>
          </div>
        </div>
        {data.errors.queryType && (
          <p className="text-xs text-red">Please select a query type</p>
        )}
      </fieldset>
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
          className={`${data.errors.message ? "border-red" : ""} resize-none rounded-md border border-mediumGreen px-6 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mediumGreen`}
          onChange={handlers.setMessage}
        ></textarea>
        {data.errors.message && (
          <p className="text-xs text-red">This field is required</p>
        )}
      </div>
      <div className="">
        <label
          htmlFor="consent"
          className="flex cursor-pointer items-center gap-2"
        >
          <input
            type="checkbox"
            id="consent"
            name="consent"
            required
            checked={data.consent}
            onChange={handlers.setConsent}
            className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mediumGreen"
          />
          <span>I consent to being contacted by the team</span>
        </label>
        {data.errors.consent && (
          <p className="text-xs text-red">
            To submit this form, please consent to being contacted
          </p>
        )}
      </div>
      <div>
        <button className="w-full rounded-md bg-mediumGreen py-4 font-bold tracking-wider text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mediumGreen">
          Submit
        </button>
      </div>
    </form>
  );
}
