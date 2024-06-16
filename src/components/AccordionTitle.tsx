import { AccordionTitleProps } from "../interfaces/AccordionTitle";

export default function AccordionTitle({ children }: AccordionTitleProps) {
  return (
    <summary className="hover:text-lightPurple flex cursor-pointer items-center justify-between gap-2 py-6 text-[clamp(1rem,0.8864rem+0.5682vi,1.25rem)] font-semibold leading-tight text-darkPurple after:h-[31px] after:content-[url(/images/icon-plus.svg)]">
      {children}
    </summary>
  );
}
