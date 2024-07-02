import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details>
      <summary
        className="flex cursor-pointer items-center justify-between border-b pb-3 text-veryDarkBlue transition-colors hover:text-softRed"
        onClick={() => setIsOpen(i => !i)}
      >
        <span>{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="12"
          className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
        >
          <path
            fill="none"
            stroke={isOpen ? `hsl(0,94%,66%)` : "#5267DF"}
            strokeWidth="3"
            d="M1 1l8 8 8-8"
          />
        </svg>
      </summary>

      <p className="pt-6 leading-loose text-veryDarkBlue/75">{answer}</p>
    </details>
  );
}
