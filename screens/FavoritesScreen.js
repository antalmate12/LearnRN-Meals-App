import MealsList from '../components/MealsList/MealsList';
import { FavoritesContext } from '../store/context/favorites-context';
import { useContext } from 'react';
import { MEALS } from '../data/dummy-data';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export default function FavoritesScreen({ navigation }) {
  // const favoritesCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  // const favoriteMeals = MEALS.filter((meal) => favoritesCtx.ids.indexOf(meal.id) >= 0);
  const favoriteMeals = MEALS.filter((meal) => favoriteMealIds.indexOf(meal.id) >= 0);

  return favoriteMeals.length > 0 ? (
    <MealsList meals={favoriteMeals} />
  ) : (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>No favorites yet</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
