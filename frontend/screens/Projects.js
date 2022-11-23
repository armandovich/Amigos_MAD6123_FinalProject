import { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, Pressable, Text, View } from 'react-native';
import general from '../styles/General.js';
import projectS from '../styles/ProjectList.js';

const dummyData = [
    {
        _id: "637b85bdff01ac9ec51a3e32",
        name: "Project A",
        description: "New description...",
        status: "Ongoing",
        task_number: 5,
        task_complete: 4,
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
        task_complete: 0,
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
        <SafeAreaView style={general.container}>
            <Text style={[general.headline, general.paddingH]}>Projects</Text>
             <FlatList style={[general.fullW, general.paddingH]} data={projectList} 
             ListHeaderComponent={
                <Pressable onPress={createProject} style={[general.btn, general.btnBorder]}>
                    <Text style={[general.btnTxt, general.greenTxt]}>Add Project</Text>
                    <Ionicons name="add-circle-outline" size={24} style={{marginLeft: 10}} color="#84B026" />
                </Pressable>
             }
             renderItem={({ item, index }) => 
                <View style={projectS.card}>
                    <View style={projectS.cardPadding}>
                        <Text style={[projectS.cardName, general.greenTxt]}>{item.name}</Text>

                        <View style={projectS.cardTask}>
                            <Text style={general.whiteTxt}>Status: </Text>
                            <Text style={[general.boldTxt, general.greenTxt]}>{item.status} </Text> 
                        </View>
                        
                        <View style={projectS.cardBar}>
                            <View style={[projectS.cardProgress, {width: `${(item.task_complete / item.task_number) * 100}%`}]}></View>
                        </View>

                        <View style={[general.flexRow, general.flexEvenSpace]}>
                            <View style={projectS.cardTask}>
                                <Text style={[general.boldTxt, general.greenTxt]}>{item.task_number} </Text> 
                                { item.task_number < 2 
                                ? <Text style={general.whiteTxt}>Task</Text>
                                : <Text style={general.whiteTxt}>Tasks</Text>
                                }
                            </View>

                            <View style={projectS.cardTask}>
                                <Text style={[general.boldTxt, general.greenTxt]}>{item.task_number - item.task_complete} </Text> 
                                <Text style={general.whiteTxt}>Left</Text>
                            </View>
                        </View>


                        <View style={projectS.cardTask}>
                            <Text style={general.whiteTxt}>Due Date: </Text>
                            <Text style={[general.boldTxt, general.greenTxt]}>{formatDate(item.end_date)} </Text> 
                        </View>
                    </View>

                    <Pressable onPress={() => openProject(index) } style={projectS.exit}></Pressable>

                    <Pressable onPress={() => editProject(index) } style={projectS.edit}>
                        <FontAwesome name="edit" size={24} color="#84B026" />
                    </Pressable>
                </View>
            }/>
            <FlatList />
        </SafeAreaView>
    );
}