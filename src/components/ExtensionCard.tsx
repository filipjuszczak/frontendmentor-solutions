import Button from "./Button";

interface ExtensionCardProps {
  browserIcon: {
    src: string;
    width: number;
    height: number;
  };
  browserName: string;
  browserVersion: string;
  style?: React.CSSProperties;
}

export default function ExtensionCard({
  browserIcon,
  browserName,
  browserVersion,
  style
}: ExtensionCardProps) {
  return (
    <div
      style={style}
      className="max-w-card rounded-[0.9375rem] bg-extensionCard bg-[left_10px_bottom_6rem] bg-repeat-x px-6 pt-[3.0625rem] shadow-extensionCard"
    >
      <div>
        <img
          src={browserIcon.src}
          alt=""
          width={browserIcon.width}
          height={browserIcon.height}
          role="presentation"
          className="mx-auto mb-8"
        />

        <h3 className="mb-2 text-xl">Add to {browserName}</h3>
        <p className="mb-[3.75rem] leading-7">
          Minimum version {browserVersion}
        </p>
      </div>

      <Button
        variant="primary"
        className="mb-6 px-9 py-[0.625rem] leading-loose"
      >
        Add & Install Extension
      </Button>
    </div>
  );
}
