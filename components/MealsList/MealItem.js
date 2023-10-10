import { View, Text, Image, Pressable, StyleSheet, Platform } from 'react-native';
import MealDetails from '../MealDetails';
import { useNavigation } from '@react-navigation/native';

/**
 * @param {Meal} item
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function MealItem({ item, ...props }) {
  const navigation = useNavigation();

  function selectMealItemHandler() {
    navigation.navigate('MealDetails', {
      mealId: item.id,
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={selectMealItemHandler}
        android_ripple={{
          color: '#ccc',
        }}
        style={({ pressed }) => pressed && Platform.OS === 'ios' && styles.buttonPressed}>
        <View style={styles.innerContainer}>
          <View>
            <Image
              style={styles.image}
              source={{
                uri: item.imageUrl,
              }}
            />
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <MealDetails
            duration={item.duration}
            affordability={item.affordability}
            complexity={item.complexity}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 16,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: '#fff',
    marginBottom: 0,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.125,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '500',
    margin: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
