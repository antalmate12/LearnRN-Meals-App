import { MEALS } from '../data/dummy-data';
import { CATEGORIES } from '../data/dummy-data';
import { useLayoutEffect } from 'react';
import MealsList from '../components/MealsList/MealsList';

export default function MealsOverviewScreen({ route, navigation }) {
  const { categoryId } = route.params;
  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  useLayoutEffect(() => {
    navigation.setOptions({
      title: CATEGORIES.find((category) => category.id === categoryId).title,
    });
  }, [categoryId, navigation]);

  return <MealsList meals={meals} />;
}
