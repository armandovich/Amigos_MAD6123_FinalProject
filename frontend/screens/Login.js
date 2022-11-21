import { Button, StyleSheet, Text, View } from 'react-native';

export default function Login({navigation}) {
    const goToRegister = (value) => {
        navigation.navigate({ name: value });
    }

    return (
      <View style={styles.container}>
        <Text  style={{color: '#fff'}}>LOGIN SCREEN</Text>
        <Button onPress={() => goToRegister('Register')} title='GO TO REGISTER'/>
        <Button onPress={() => goToRegister('Home')} title='GO TO HOME'/>
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
  