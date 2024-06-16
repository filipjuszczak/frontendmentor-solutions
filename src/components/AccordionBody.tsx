import { AccordionBodyProps } from "../interfaces/AccordionBody";

export default function AccordionBody({ children }: AccordionBodyProps) {
  return (
    <p
      className="max-w-[52ch] pb-4 text-[clamp(0.875rem,0.8182rem+0.2841vi,1rem)] leading-6 text-grayishPurple"
      aria-live="polite"
    >
      {children}
    </p>
  );
}
