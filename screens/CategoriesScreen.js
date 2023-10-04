import { View, Text, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function renderCategoryItem(itemData) {
  return <CategoryGridTile item={itemData.item} />;
}

export default function CategoriesScreen(props) {
  return (
    <View>
      <Text>The Categories Screen!</Text>
      <FlatList
        data={CATEGORIES}
        renderItem={(itemData) => renderCategoryItem(itemData)}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
}
