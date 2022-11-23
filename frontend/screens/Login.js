import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, Text, TextInput } from 'react-native';
import general from '../styles/General.js';

export default function Login({navigation}) {
    const goToScreen = (value) => {
        navigation.navigate({ name: value });
    }

    return (
      <SafeAreaView style={[general.container, general.paddingH]}>
        <Text  style={[general.headline]}>Sign In</Text>
        <TextInput style={general.inputs} placeholder='Username'/>
        <TextInput style={general.inputs} placeholder='Password'/>

        <Pressable style={[general.btn, general.btnGreen]}  onPress={() => goToScreen('Home')} >
            <Text style={general.btnTxt}>Login</Text>
        </Pressable>

        <Pressable style={[general.btn, general.btnBorder]}  onPress={() => goToScreen('Register')} >
            <Text style={[general.btnTxt, general.greenTxt]}>Sign Up</Text>
        </Pressable>
      </SafeAreaView>
    );
}