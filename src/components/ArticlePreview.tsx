import Author from "./Author";

interface ArticlePreviewProps {
  data: {
    image: string;
    heading: string;
    body: string;
    author: {
      fullName: string;
      avatar: {
        src: string;
        width: number;
        height: number;
      };
      date: string;
    };
  };
}

export default function ArticlePreview({
  data: {
    image,
    heading,
    body,
    author: { fullName, avatar, date }
  }
}: ArticlePreviewProps) {
  return (
    <article className="relative flex flex-col md:flex-row">
      <div
        className={`h-72 w-full bg-[url('${image}')] bg-cover md:h-auto md:rounded-l-xl`}
      ></div>
      <div className="relative p-8 md:w-[100%]">
        <h1 className="text-darkGrayishBlue mb-4 text-[clamp(1rem,0.913rem+0.4348vi,1.25rem)] font-bold leading-relaxed">
          {heading}
        </h1>
        <p className="text-darkBlue mb-8 text-[clamp(0.875rem,0.8315rem+0.2174vi,1rem)] leading-relaxed">
          {body}
        </p>
        <Author fullName={fullName} date={date} avatar={avatar} />
      </div>
    </article>
  );
}
