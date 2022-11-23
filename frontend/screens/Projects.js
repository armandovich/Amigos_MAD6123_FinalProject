import { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
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
        task_complete: 2,
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
        task_complete: 2,
        total_cost: 0,
        start_date: "2022-01-20T00:00:00.000Z",
        end_date: "2022-02-01T00:00:00.000Z",
    }
]

export default function Projects({navigation}) {
    const [projectList, setProjectList] = useState(dummyData);

    const openProject = (index) => {
        navigation.navigate('Task', { index: index })
    }

    const editProject = (index) => {
        navigation.navigate('ProjectManager', { project: projectList[index], isEdit: true })
    }

    const createProject = () => {
        navigation.navigate('ProjectManager', { project: null, isEdit: false })
    }

    const formatDate = (value) => {
        return new Date(value).toISOString().slice(0, 10);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headline}>PROJECTS</Text>
             <FlatList style={styles.scroll} data={projectList} 
             ListHeaderComponent={
                <Pressable onPress={createProject} style={styles.createBtn}>
                    <Text style={styles.createTxt}>Add Project</Text>
                    <Ionicons name="add-circle-outline" size={24} color="#84B026" />
                </Pressable>
             }
             renderItem={({ item, index }) => 
                <View style={styles.card}>
                    <View style={styles.cardPadding}>
                        <Text style={[styles.cardName, styles.greenTxt]}>{item.name}</Text>

                        <View style={styles.cardTask}>
                            <Text style={[styles.boldTxt, styles.greenTxt]}>{item.task_number} </Text> 
                            { item.task_number < 2 
                            ? <Text style={styles.whiteTxt}>Task</Text>
                            : <Text style={styles.whiteTxt}>Tasks</Text>
                            }
                        </View>
                        
                        <View style={styles.cardTask}>
                            <Text style={styles.whiteTxt}>Status: </Text>
                            <Text style={[styles.boldTxt, styles.greenTxt]}>{item.status} </Text> 
                        </View>

                        <View style={styles.cardTask}>
                            <Text style={styles.whiteTxt}>Due Date: </Text>
                            <Text style={[styles.boldTxt, styles.greenTxt]}>{formatDate(item.end_date)} </Text> 
                        </View>
                    </View>

                    <Pressable onPress={() => openProject(index) } style={styles.exit}></Pressable>

                    <Pressable onPress={() => editProject(index) } style={styles.edit}>
                        <FontAwesome name="edit" size={24} color="#84B026" />
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
    createBtn: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        marginBottom: 15,
        borderColor: '#84B026',
        borderWidth: 2,
        borderRadius: 5
    },
    createTxt: {
        color: '#84B026',
        paddingRight: 10
    },
    edit: {
        width: 50,
        height: 50,
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
    cardPadding: {
        paddingHorizontal: 10,
        paddingTop: 15,
        paddingBottom: 24
    },
    cardName: {
        fontSize: 20,
        marginBottom: 5,
        fontWeight: 'bold'
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
    },
    greenTxt: {
        color: '#84B026'
    }
  });
  