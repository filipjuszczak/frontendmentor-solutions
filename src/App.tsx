import Recipe from "./components/Recipe";

const recipe = {
  preparationTime: {
    total: "Approximately 10 minutes",
    preparation: "5 minutes",
    cooking: "5 minutes",
  },
  ingredients: [
    {
      id: "ing1",
      name: "large eggs",
      amount: "2-3",
    },
    {
      id: "ing2",
      name: "salt",
      amount: "to taste",
    },
    {
      id: "ing3",
      name: "pepper",
      amount: "to taste",
    },
    {
      id: "ing4",
      name: "butter or oil",
      amount: "1 tablespoon",
    },
  ],
  optional: ["cheese", "diced vegetables", "cooked meats", "herbs"],
  instructions: [
    {
      id: "ins1",
      title: "Beat the eggs",
      body: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
    },
    {
      id: "ins2",
      title: "Heat the pan",
      body: "Place a non-stick frying pan over medium heat and add butter or oil.",
    },
    {
      id: "ins3",
      title: "Cook the omelette",
      body: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
    },
    {
      id: "ins4",
      title: "Add fillings (optional)",
      body: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
    },
    {
      id: "ins5",
      title: "Fold and serve",
      body: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
    },
    {
      id: "ins6",
      title: "Enjoy",
      body: "Serve hot, with additional salt and pepper if needed.",
    },
  ],
  nutrition: [
    {
      id: "nut1",
      name: "Calories",
      amount: "277kcal",
    },
    {
      id: "nut2",
      name: "Carbs",
      amount: "0g",
    },
    {
      id: "nut3",
      name: "Protein",
      amount: "20g",
    },
    {
      id: "nut4",
      name: "Fat",
      amount: "22g",
    },
  ],
};

export default function App() {
  return (
    <div className="bg-eggShell lg:py-12 xl:py-32">
      <Recipe recipe={recipe} />
    </div>
  );
}
