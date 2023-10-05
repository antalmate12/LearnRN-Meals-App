import { View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { useLayoutEffect } from 'react';
import MealDetails from '../components/MealDetails';
import MealDetailSubtitle from '../components/MealDetail/Subtitle';
import MealDetailList from '../components/MealDetail/List';
import IconButton from '../components/IconButton';

export default function MealDetailsScreen({ route, navigation }) {
  const { mealId } = route.params;

  /**
   * @type {Meal}
   */
  const meal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHandler() {
    console.log('header button pressed');
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerBackTitle: 'Back',
      headerRight: () => <IconButton icon={'star'} onPress={headerButtonPressHandler} />,
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetails
        duration={meal.duration}
        affordability={meal.affordability}
        complexity={meal.complexity}
        textStyle={{
          color: '#fff',
          fontSize: 14,
        }}
      />

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <MealDetailSubtitle title={'Ingredients'} />
          <MealDetailList data={meal.ingredients} />

          <MealDetailSubtitle title={'Steps'} />
          <MealDetailList data={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 250,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 24,
    textAlign: 'center',
    color: '#fff',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
