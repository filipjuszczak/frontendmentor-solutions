import { AccordionProps } from "../interfaces/Accordion";
import AccordionItem from "./AccordionItem";

export default function Accordion({ data }: AccordionProps) {
  return (
    <div className="divide-y-[1px]">
      {data.map(d => (
        <AccordionItem key={d.id} title={d.title} body={d.body} />
      ))}
    </div>
  );
}
