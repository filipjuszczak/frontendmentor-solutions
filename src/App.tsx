import { AccordionData } from "./interfaces/Accordion";
import Accordion from "./components/Accordion";

const data: AccordionData[] = [
  {
    id: "a1",
    title: "What is Frontend Mentor, and how will it help me?",
    body: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
  },
  {
    id: "a2",
    title: "Is Frontend Mentor free?",
    body: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
  },
  {
    id: "a3",
    title: "Can I use Frontend Mentor projects in my portfolio?",
    body: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
  },
  {
    id: "a4",
    title: "How can I get help if I'm stuck on a challenge?",
    body: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
  }
];

export default function App() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="max-w-[min(90%,40.625rem)] rounded-lg bg-white p-6 shadow-lg shadow-darkPurple/25 md:p-8">
        <header className="flex items-center gap-6">
          <img
            src="/images/icon-star.svg"
            alt=""
            width={24}
            height={24}
            className="w-[clamp(1.5rem,1.2727rem+1.1364vi,2rem)]"
          />
          <h1 className="text-[clamp(1.875rem,1.4773rem+1.9886vi,2.75rem)] font-bold text-darkPurple">
            <abbr
              title="Frequently Asked Questions"
              aria-label="Frequently Asked Questions"
            >
              FAQs
            </abbr>
          </h1>
        </header>
        <Accordion data={data} />
      </div>
    </main>
  );
}
