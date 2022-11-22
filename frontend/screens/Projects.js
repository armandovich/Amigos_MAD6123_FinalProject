import { useEffect, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
const dummyData = [
    {
        _id: "637b85bdff01ac9ec51a3e32",
        name: "Project A",
        description: "New description...",
        status: "Ongoing",
        task_number: 5,
        total_cost: 0,
        start_date: "2022-01-20T00:00:00.000Z",
        end_date: "2022-02-01T00:00:00.000Z",
    },
    {
        _id: "637b85bdff01ac9ec51a3e32",
        name: "Project B",
        description: "New description...",
        status: "Ongoing",
        task_number: 0,
        total_cost: 0,
        start_date: "2022-01-20T00:00:00.000Z",
        end_date: "2022-02-01T00:00:00.000Z",
    }
]

export default function Projects({navigation}) {
    const [projectList, setProjectList] = useState(dummyData);

    const goToRegister = () => {
        navigation.navigate({ name: 'Profile' });
    }

    const openProject = (index) => {
        navigation.navigate('ProjectManager', { edit: false })
    }

    const editProject = (index) => {
        navigation.navigate('ProjectManager', { edit: true })
    }

    const formatDate = (value) => {
        return new Date(value).toISOString().slice(0, 10);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headline}>PROJECTS</Text>
             <FlatList style={styles.scroll} data={projectList} renderItem={({ item, index }) => 
                <View style={styles.card}>
                    <View style={styles.padding}>
                        <Text style={[styles.cardName, styles.whiteTxt]}>{item.name}</Text>

                        <View style={styles.cardTask}>
                            <Text style={[styles.boldTxt, styles.whiteTxt]}>{item.task_number} </Text> 
                            <Text style={styles.whiteTxt}>Tasks</Text>
                        </View>
                        
                        <View style={styles.cardTask}>
                            <Text style={styles.whiteTxt}>Status: </Text>
                            <Text style={[styles.boldTxt, styles.whiteTxt]}>{item.status} </Text> 
                        </View>

                        <View style={styles.cardTask}>
                            <Text style={styles.whiteTxt}>Due Date: </Text>
                            <Text style={[styles.boldTxt, styles.whiteTxt]}>{formatDate(item.end_date)} </Text> 
                        </View>
                    </View>

                    <Pressable onPress={() => openProject(index) } style={styles.exit}></Pressable>

                    <Pressable onPress={() => editProject(index) } style={styles.edit}>
                        <FontAwesome name="edit" size={24} color="#fff" />
                    </Pressable>
                </View>
            }/>
            <FlatList />
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
    edit: {
        width: 40,
        height: 40,
        position: 'absolute',
        right: 0,
        top: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    exit: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
    },
    scroll: {
        width: '100%',
        paddingHorizontal: 15
    },
    headline: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 15
    },
    card: {
        width: '100%',
        backgroundColor: '#3B3C40',
        borderRadius: 5,
        marginBottom: 15,
        position: 'relative'
    },
    padding: {
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    cardName: {
        fontSize: 20,
        marginBottom: 5
    },
    cardTask: {
        flexDirection: 'row',
        paddingTop: 5
    },
    boldTxt: {
        fontWeight: 'bold'
    },
    whiteTxt: {
        color: '#fff'
    }
  });
  