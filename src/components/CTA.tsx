import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [hasError, setHasError] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!regex.test(email)) {
      setHasError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="email" className="sr-only">
          Enter your e-mail address
        </label>

        <div
          className={`relative flex flex-col items-start rounded-[5px] px-1 pt-1 ${hasError ? "bg-softRed" : ""}`}
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="john.doe@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full rounded-[5px] px-5 py-[0.625rem] text-veryDarkBlue"
          />

          {hasError && (
            <span
              className="py-1 pl-3 text-[0.625rem] font-medium"
              role="alert"
            >
              <em>Whoops, make sure it's an email</em>
            </span>
          )}

          {hasError && (
            <img
              src="/images/icon-error.svg"
              alt=""
              width={20}
              height={20}
              className="absolute right-4 top-4"
            />
          )}
        </div>
      </div>

      <button className="rounded-[5px] border-2 border-transparent bg-softRed py-[0.625rem] leading-loose transition-colors hover:border-softRed hover:bg-white hover:text-softRed">
        Contact Us
      </button>
    </form>
  );
}
