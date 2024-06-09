import Container from "./Container";
import Content from "./Content";
import HeroImg from "./HeroImg";
import Preparation from "./Preparation";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Nutrition from "./Nutrition";

interface RecipeProps {
  recipe: {
    preparationTime: {
      total: string;
      preparation: string;
      cooking: string;
    };
    ingredients: {
      id: string;
      name: string;
      amount: string;
    }[];
    optional: string[];
    instructions: {
      id: string;
      title: string;
      body: string;
    }[];
    nutrition: {
      id: string;
      name: string;
      amount: string;
    }[];
  };
}

export default function Recipe({ recipe }: RecipeProps) {
  return (
    <Container>
      <HeroImg />
      <Content>
        <h1 className="mb-6 font-serif text-3xl font-bold text-darkCharcoal lg:text-4xl lg:font-semiBold">
          Simple Omelette Recipe
        </h1>
        <p className="mb-8 leading-6">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
        <Preparation data={recipe.preparationTime} />
        <Ingredients
          ingredients={recipe.ingredients}
          optionalIngredients={recipe.optional}
        />
        <Instructions instructions={recipe.instructions} />
        <Nutrition nutrition={recipe.nutrition} />
      </Content>
    </Container>
  );
}
