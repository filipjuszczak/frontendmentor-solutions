interface LinksProps {
  websites: {
    id: string;
    name: string;
    url: string;
  }[];
}

export default function Links({ websites }: LinksProps) {
  return (
    <ul className="flex w-full flex-col gap-4">
      {websites.map((website) => (
        <li key={website.id}>
          <a
            href={website.url}
            className="bg-grey font-semiBold hover:bg-green hover:text-darkGrey block rounded-md py-4 transition-colors"
          >
            {website.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
