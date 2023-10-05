import { View, Text, Pressable, StyleSheet, Platform } from 'react-native';

/**
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function CategoryGridTile(props) {
  return (
    <View style={[styles.gridItem]}>
      <Pressable
        android_ripple={{
          color: '#ccc',
        }}
        onPress={props.onPress}
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
        <View
          style={[
            styles.innerContainer,
            {
              backgroundColor: props.item.color,
            },
          ]}>
          <Text style={styles.title}>{props.item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 16,
    elevation: 4,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.125,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  title: {
    fontWeight: '500',
    fontSize: 18,
  },
});
