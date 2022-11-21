import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, TextInput, Pressable, ScrollView } from 'react-native';

export default function Login({navigation}) {
    const goToScreen = (value) => {
        navigation.navigate({ name: value });
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroll}>
                <Text  style={styles.headline}>REGISTER</Text>
                <TextInput style={styles.inputs} placeholder='First Name'/>
                <TextInput style={styles.inputs} placeholder='Last Name'/>
                <TextInput style={styles.inputs} placeholder='Job Position'/>
                <TextInput style={styles.inputs} placeholder='Email'/>
                <TextInput style={styles.inputs} placeholder='Password'/>
                <TextInput style={styles.inputs} placeholder='Confirm Password'/>

                <Pressable style={[styles.btn, styles.btnGreen]}>
                    <Text style={styles.btnTxt}>Sign Up</Text>
                </Pressable>
                <Pressable style={[styles.btn, styles.btnBorder]}  onPress={() => goToScreen('Login')} >
                    <Text style={[styles.btnTxt, styles.greenTxt]}>Login</Text>
                </Pressable>
            </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      },
      scroll: {
        width: '100%',
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
  