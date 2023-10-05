import { View, Text, StyleSheet, FlatList } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import { useEffect, useLayoutEffect } from 'react';

export default function MealsOverviewScreen({ route, navigation }) {
  const { categoryId } = route.params;
  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  useLayoutEffect(() => {
    navigation.setOptions({
      title: CATEGORIES.find((category) => category.id === categoryId).title,
    });
  }, [categoryId, navigation]);

  function renderMealItem(itemData) {
    function pressHandler() {
      navigation.navigate('MealDetails', {
        mealId: itemData.item.id,
      });
    }

    return <MealItem item={itemData.item} onPress={pressHandler} />;
  }

  return (
    <View style={styles.container}>
      <FlatList keyExtractor={(item, index) => item.id} data={meals} renderItem={renderMealItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
