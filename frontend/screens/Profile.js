import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Pressable, View } from 'react-native';
import general from '../styles/General.js';
import profileS from '../styles/Profile.js';

export default function Projects({navigation}) {
  const goToPage = (value) => {
      navigation.navigate({ name: value});
  }

  return (
    <SafeAreaView style={general.container}>
      <Text style={[general.headline, general.paddingH]}>Profile</Text>

      <View style={profileS.center}>
        <FontAwesome name="user-circle-o" size={120} color="#fff" style={{marginBottom: 15}}/>

        <Text style={[general.whiteTxt, profileS.marginB]}>User Name</Text>
        <Text style={[general.whiteTxt, profileS.marginB]}>email@email.com</Text>
        <Text style={[general.whiteTxt, profileS.marginB]}>Job Position</Text>

        <Pressable onPress={() => {goToPage('Login')}} style={[general.btn, general.btnRed, profileS.maxWidth]}>
          <Text style={[general.btnTxt]}>LOGOUT</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}