
import { useEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Pressable, View, ScrollView, TextInput } from 'react-native';
import general from '../styles/General.js';

export default function TaskInfo({navigation, route}) {
    const [task, setTask] = useState(route.params.task);

    const goBack = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView style={general.container}>
            <Pressable onPress={goBack} style={general.returnBtn}>
                <Ionicons name="arrow-back" size={24}  style={{marginRight: 15}} color="#84B026" />
                <Text style={general.headline}>Task Detail</Text>
            </Pressable>

            <ScrollView style={[general.fullW, general.paddingH]}>
                <Text style={general.whiteTxt}>Task Name: {task.name}</Text>
                <Text style={general.whiteTxt}>Task Description: {task.description}</Text>

                <Text style={general.whiteTxt}>Assigned To:</Text>
                <Text style={general.whiteTxt}>{task.assName}</Text>

                <Text style={general.whiteTxt}>Start Date:</Text>
                <Text style={general.whiteTxt}>{task.start_date}</Text>
                
                <Text style={general.whiteTxt}>Due Date:</Text>
                <Text style={general.whiteTxt}>{task.end_date}</Text>

                <Text style={general.whiteTxt}>Created By:</Text>
                <Text style={general.whiteTxt}>{task.created_by}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}