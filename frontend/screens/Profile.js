import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, Pressable, View } from 'react-native';

export default function Projects({navigation}) {
    const goToPage = (value) => {
        navigation.navigate({ name: value});
    }

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.headline}>PROFILE</Text>

        <View style={styles.center}>
          <FontAwesome name="user-circle-o" size={120} color="#fff" style={{marginBottom: 15}}/>
          
          <Text style={styles.whiteTxt}>User Name</Text>
          <Text style={styles.whiteTxt}>email@email.com</Text>
          <Text style={styles.whiteTxt}>Job Position</Text>

          <Pressable onPress={() => {goToPage('Login')}} style={styles.logout}>
            <Text style={[styles.btnTxt]}>LOGOUT</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 15,
  },
  center: {
    width: '100%',
    alignItems: 'center'
  },
  headline: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#fff',
    paddingVertical: 15,
  },
  logout: {
    width: '100%',
    paddingHorizontal: 15,
    marginBottom: 15,
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#BF1700',
    maxWidth: 200,
    marginTop: 15
  },
  logoutTxt: {
    textAlign: 'center'
  },
  btnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  whiteTxt: {
    color: '#fff',
    fontSize: 15,
    marginBottom: 5
  }
});
  