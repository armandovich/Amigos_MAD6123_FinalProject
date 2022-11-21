import { StyleSheet, Text, View, Button } from 'react-native';

export default function Login({navigation}) {
    const goToRegister = () => {
        navigation.navigate({ name: 'Login' });
    }

    return (
      <View style={styles.container}>
        <Text>REGISTER SCREEN</Text>
        <Button onPress={goToRegister} title='GO TO LOGIN'/>
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
  