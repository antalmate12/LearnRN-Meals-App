import { Text, View, StyleSheet } from 'react-native';

export default function MealDetailSubtitle({ title }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#e2b497',
    textAlign: 'center',
  },
  subtitleContainer: {
    padding: 8,
    marginHorizontal: 24,
    marginVertical: 4,
    borderBlockColor: '#e2b497',
    borderBottomWidth: 2,
  },
});
