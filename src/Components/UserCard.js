
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../Styles/userCardStyles.js';

const UserCard = ({ name, age, photo, role, isOnline }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: photo }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.age}>{age} años</Text>
        {role && <Text style={styles.role}>{role}</Text>}
        {isOnline && <View style={styles.onlineDot} />}
      </View>
    </View>
  );
};

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  role: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default UserCard;