import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, StyleSheet, Text, TextInput } from 'react-native';

export default function Login({navigation}) {
    const goToScreen = (value) => {
        navigation.navigate({ name: value });
    }

    return (
      <SafeAreaView style={styles.container}>
        <Text  style={styles.headline}>LOGIN</Text>
        <TextInput style={styles.inputs} placeholder='Username'/>
        <TextInput style={styles.inputs} placeholder='Password'/>

        <Pressable style={[styles.btn, styles.btnGreen]}  onPress={() => goToScreen('Home')} >
            <Text style={styles.btnTxt}>Sign In</Text>
        </Pressable>

        <Pressable style={[styles.btn, styles.btnBorder]}  onPress={() => goToScreen('Register')} >
            <Text style={[styles.btnTxt, styles.greenTxt]}>Register</Text>
        </Pressable>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      paddingHorizontal: 15
    },
    headline: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#fff',
        paddingVertical: 15
    },
    inputs: {
        backgroundColor: '#fff',
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 8,
        marginBottom: 15
    },
    btn: {
        width: '100%',
        paddingHorizontal: 15,
        marginBottom: 15,
        borderRadius: 8,
        paddingVertical: 15,
        paddingHorizontal: 15
    },
    btnTxt: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    btnGreen: {
        backgroundColor: '#84B026'
    },
    btnBorder: {
        borderWidth: 2,
        borderColor: '#84B026'
    },
    greenTxt: {
        color: '#84B026',
    }
  });
  