interface IngredientsProps {
  ingredients: {
    id: string;
    name: string;
    amount: string;
  }[];
  optionalIngredients: string[];
}

export default function Ingredients({
  ingredients,
  optionalIngredients,
}: IngredientsProps) {
  return (
    <div className="border-b-[1px] border-lightGrey pb-8">
      <h2 className="mb-6 font-serif text-3xl text-nutmeg">Ingredients</h2>
      <ul className="list-disc space-y-2 pl-6">
        {ingredients.map((ing) => (
          <li key={ing.id} className="pl-4 marker:text-nutmeg">
            {ing.amount} {ing.name}
          </li>
        ))}
        {optionalIngredients.length > 0 && (
          <li key="" className="pl-4">
            Optional fillings: {optionalIngredients.join(", ")}
          </li>
        )}
      </ul>
    </div>
  );
}
