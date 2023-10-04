import { View, Text, Pressable, StyleSheet } from "react-native";
import Category from "../models/category";

export default function CategoryGridTile(props) {
  const category = new Category(props.item.id, props.item.title);

  return (
    <View>
      <Pressable onPress={props.onSelect}>
        <View>
          <Text>{category.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
