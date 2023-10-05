import { Text, View, StyleSheet } from 'react-native';

/**
 * @param {string[]} data
 * @constructor
 */
export default function MealDetailList({ data }) {
  return data.map((dataPoint, index) => (
    <View key={dataPoint[0] + index} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    backgroundColor: '#e2b497',
  },
  itemText: {
    color: '#351401',
    textAlign: 'center',
  },
});
