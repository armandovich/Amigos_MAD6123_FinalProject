import { Button, StyleSheet, Text, View } from 'react-native';

export default function Projects({navigation}) {
    const goToPage = (value) => {
        navigation.navigate({ name: value});
    }

    return (
      <View style={styles.container}>
        <Text  style={{color: '#fff'}}>PROFILE SCREEN</Text>
        <Button onPress={() => {goToPage('Login')}} title='Logout'/>
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
  