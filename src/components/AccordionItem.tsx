import { AccordionItemProps } from "../interfaces/AccordionItem";
import AccordionBody from "./AccordionBody";
import AccordionTitle from "./AccordionTitle";

export default function AccordionItem({ title, body }: AccordionItemProps) {
  return (
    <details>
      <AccordionTitle>{title}</AccordionTitle>
      <AccordionBody>{body}</AccordionBody>
    </details>
  );
}
