import { Button, StyleSheet, Text, View } from 'react-native';

export default function Login({navigation}) {
    const goToRegister = () => {
        navigation.navigate({ name: 'Register' });
    }

    return (
      <View style={styles.container}>
        <Text>LOGIN SCREEN</Text>
        <Button onPress={goToRegister} title='GO TO REGISTER'/>
      </View>
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
  