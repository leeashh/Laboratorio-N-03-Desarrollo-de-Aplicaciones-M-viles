import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: 10,
    overflow: 'hidden',
  },
  image: {
    height: 120,
    width: '100%',
  },
  info: {
    padding: 10,
    position: 'relative',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  age: {
    color: 'green',
    fontSize: 16,
  },
  role: {
    color: 'gray',
    fontSize: 14,
  },
  onlineDot: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'green',
  },
});