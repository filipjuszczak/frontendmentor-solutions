interface PreparationProps {
  data: {
    total: string;
    preparation: string;
    cooking: string;
  };
}

export default function Preparation({ data }: PreparationProps) {
  return (
    <div className="mb-8 rounded-xl bg-roseWhite p-4 lg:p-8">
      <h2 className="mb-4 text-xl font-semiBold text-darkRaspberry">
        Preparation time
      </h2>
      <ul className="ml-6 list-disc space-y-2">
        <li className="pl-4 marker:text-darkRaspberry">
          <strong>Total:</strong> {data.total}
        </li>
        <li className="pl-4 marker:text-darkRaspberry">
          <strong>Preparation:</strong> {data.preparation}
        </li>
        <li className="pl-4 marker:text-darkRaspberry">
          <strong>Cooking:</strong> {data.cooking}
        </li>
      </ul>
    </div>
  );
}
