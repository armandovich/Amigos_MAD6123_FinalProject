import { StyleSheet, Text, View, Button } from 'react-native';

export default function Login({navigation}) {
    const goToRegister = () => {
        navigation.navigate({ name: 'Login' });
    }

    return (
      <View style={styles.container}>
        <Text style={{color: '#fff'}}>REGISTER SCREEN</Text>
        <Button onPress={goToRegister} title='GO TO LOGIN'/>
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
  