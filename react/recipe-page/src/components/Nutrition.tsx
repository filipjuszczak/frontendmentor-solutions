interface NutritionProps {
  nutrition: {
    id: string;
    name: string;
    amount: string;
  }[];
}

export default function Nutrition({ nutrition }: NutritionProps) {
  return (
    <div className="mt-8 space-y-4">
      <h2 className="mb-6 font-serif text-3xl text-nutmeg">Nutrition</h2>
      <p>
        The table below shops nutritional values per serving without additional
        fillings.
      </p>
      <table className="w-full">
        <tbody>
          {nutrition.map((nutr) => (
            <tr
              key={nutr.id}
              className="border-b-[1px] border-lightGrey last-of-type:border-0"
            >
              <td className="py-4 pl-8">{nutr.name}</td>
              <td className="py-4 font-semiBold text-nutmeg">{nutr.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
