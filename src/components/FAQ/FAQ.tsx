import { useMemo } from "react";
import FAQItem from "./FAQItem";
import Button from "../Button";

export default function FAQ() {
  const faqs = useMemo(
    () => [
      {
        question: "What is Bookmark?",
        answer:
          "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
      },
      {
        question: "How can I request a new browser?",
        answer:
          "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
      },
      {
        question: "Is there a mobile app?",
        answer:
          "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
      },
      {
        question: "What about other Chromium browsers?",
        answer:
          "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
      }
    ],
    []
  );

  return (
    <div className="mb-32 flex flex-col items-center text-start">
      <div className="w-full md:max-w-[33.75rem] [&>:not(:first-of-type)]:pt-5">
        {faqs.map(({ question, answer }) => (
          <FAQItem key={question} question={question} answer={answer} />
        ))}
      </div>

      <div className="mt-12">
        <Button variant="primary" className="px-6 py-[0.625rem]">
          More Info
        </Button>
      </div>
    </div>
  );
}
