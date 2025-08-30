import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, useWindowDimensions } from 'react-native';
import UserCard from './src/Components/UserCard';
const users = [
  { name: 'María López', age: 29, photo: require('./assets/favicon.png'), role: 'Diseñadora', isOnline: true },
  { name: 'Carlos Pérez', age: 35, photo: require('./assets/favicon.png'), role: 'Backend', isOnline: false },
  { name: 'Lucía Torres', age: 24, photo: require('./assets/favicon.png'), isOnline: true },
  { name: 'Jorge Ramírez', age: 41, photo: require('./assets/favicon.png'), role: 'Gerente', isOnline: false },
];

export default function App() {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 600;
  const cardWidth = isSmallScreen ? '100%' : '48%';

  return (
    <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', padding: 10 }}>
      {users.map((user, index) => (
        <View key={index} style={{ width: cardWidth }}>
          <UserCard {...user} />
        </View>
      ))}
      <StatusBar style="auto" />
    </ScrollView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
