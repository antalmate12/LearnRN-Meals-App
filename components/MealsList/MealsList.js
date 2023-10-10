import { FlatList, View, StyleSheet } from 'react-native';
import MealItem from './MealItem';

export default function MealsList(props) {
  function renderMealItem(itemData) {
    return <MealItem item={itemData.item} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={props.meals}
        renderItem={renderMealItem}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
