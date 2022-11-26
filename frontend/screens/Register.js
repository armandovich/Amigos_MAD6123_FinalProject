import { useEffect, useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TextInput, Pressable, ScrollView } from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";
import general from '../styles/General.js';

export default function Login({navigation}) {
    // Dropdown variables
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Manager', value: 0 },
        { label: 'Developer', value: 1 },
        { label: 'QA', value: 2 }
    ]);

    const goToScreen = (value) => {
        navigation.navigate({ name: value });
    }

    return (
        <SafeAreaView style={general.container}>
            <ScrollView style={[general.fullW, general.paddingH]}>
                <Text  style={general.headline}>Sign Up</Text>
                <TextInput style={general.inputs} placeholder='First Name'/>
                <TextInput style={general.inputs} placeholder='Last Name'/>

                <Text style={general.whiteTxt}>Job Position:</Text>
                <DropDownPicker
                open={open}
                value={value}
                items={items}
                style={{ marginBottom: 15, marginTop: 5 }}
                placeholder="None"
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems} />

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