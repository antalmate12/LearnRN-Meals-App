import { Ionicons } from '@expo/vector-icons';
import { Pressable, View, StyleSheet } from 'react-native';
export default function IconButton({ icon, onPress }) {
  return (
    <Pressable
      android_ripple={{
        color: '#ccc',
      }}
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
      <View
        style={[
          styles.innerContainer,
          {
            // backgroundColor: props.item.color,
          },
        ]}>
        <Ionicons name={icon} size={24} color={'#fff'} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.5,
  },
});
