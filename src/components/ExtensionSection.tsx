import { useMemo } from "react";
import Container from "./Container";
import ExtensionCard from "./ExtensionCard";

declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}

export default function ExtensionSection() {
  const browsers = useMemo(
    () => [
      {
        browserIcon: {
          src: "/images/logo-chrome.svg",
          width: 102,
          height: 100
        },
        browserName: "Chrome",
        browserVersion: "62"
      },
      {
        browserIcon: {
          src: "/images/logo-firefox.svg",
          width: 105,
          height: 100
        },
        browserName: "Firefox",
        browserVersion: "55"
      },
      {
        browserIcon: {
          src: "/images/logo-opera.svg",
          width: 96,
          height: 100
        },
        browserName: "Opera",
        browserVersion: "46"
      }
    ],
    []
  );

  return (
    <section
      className="mb-36 text-center lg:mb-52"
      aria-describedby="extension-heading"
    >
      <Container>
        <h2 id="extension-heading" className="leading-loose">
          Download the extension
        </h2>

        <p className="mb-10">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>

        <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-center lg:*:translate-y-[var(--translate-y)]">
          {browsers.map((browser, index) => (
            <ExtensionCard
              key={index}
              style={{ "--translate-y": `${(index + 1) * 10}%` }}
              browserIcon={browser.browserIcon}
              browserName={browser.browserName}
              browserVersion={browser.browserVersion}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
