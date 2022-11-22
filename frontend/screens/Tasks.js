import { useEffect, useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, Pressable, View } from 'react-native';

export default function Tasks({navigation, route}) {
    const goBack = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headline}>TASKS</Text>

            <Pressable onPress={goBack} style={styles.logout}>
                <Text style={[styles.btnTxt]}>RETURN</Text>
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
      paddingHorizontal: 15,
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