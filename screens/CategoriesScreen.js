import { View, Text, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

export default function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
      });
    }

    return <CategoryGridTile item={itemData.item} onPress={pressHandler} />;
  }

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={(itemData) => renderCategoryItem(itemData)}
        keyExtractor={(item, index) => item.id}
        numColumns={2}
      />
    </View>
  );
}
