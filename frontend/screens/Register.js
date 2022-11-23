import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TextInput, Pressable, ScrollView } from 'react-native';
import general from '../styles/General.js';

export default function Login({navigation}) {
    const goToScreen = (value) => {
        navigation.navigate({ name: value });
    }

    return (
        <SafeAreaView style={general.container}>
            <ScrollView style={[general.fullW, general.paddingH]}>
                <Text  style={general.headline}>Sign Up</Text>
                <TextInput style={general.inputs} placeholder='First Name'/>
                <TextInput style={general.inputs} placeholder='Last Name'/>
                <TextInput style={general.inputs} placeholder='Job Position'/>
                <TextInput style={general.inputs} placeholder='Email'/>
                <TextInput style={general.inputs} placeholder='Password'/>
                <TextInput style={general.inputs} placeholder='Confirm Password'/>

                <Pressable style={[general.btn, general.btnGreen]}>
                    <Text style={general.btnTxt}>Register</Text>
                </Pressable>
                <Pressable style={[general.btn, general.btnBorder]}  onPress={() => goToScreen('Login')} >
                    <Text style={[general.btnTxt, general.greenTxt]}>Sign In</Text>
                </Pressable>
            </ScrollView>
      </SafeAreaView>
    );
}