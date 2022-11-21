import { Button, StyleSheet, Text, View } from 'react-native';

export default function Projects({navigation}) {
    const goToRegister = () => {
        navigation.navigate({ name: 'Profile' });
    }

    return (
      <View style={styles.container}>
        <Text  style={{color: '#fff'}}>PROJECTS SCREEN</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  