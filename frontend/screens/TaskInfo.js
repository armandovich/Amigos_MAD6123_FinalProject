import { useEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Pressable, View, ScrollView, TextInput } from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";
import general from '../styles/General.js';
import fetchLink from "../helpers/fetchLink.js";
import { userLoggedIn } from './Login.js';


export default function TaskInfo({navigation, route}) {


    const [task, setTask] = useState(route.params.task);
    const [project, setProject] = useState(route.params.project);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'To-Do', value: 0 },
        { label: 'Ongoing', value: 1 },
        { label: 'Completed', value: 2 }
    ]);
    const [hoursWorked, setHoursWorked] = useState(0);



    const goBack = () => {
        navigation.goBack()
    }

    const formatDate = (value) => {
        return new Date(value).toISOString().slice(0, 10);
      }

      function updateCompleteTaskNumber(tNumber){             //Method to update the number of tasks completed of the project
        let projID = project._id
        let stDate = formatDate(project.start_date)
        let enDate = formatDate(project.end_date)
        const projData = {
            task_complete: tNumber,
            start_date: stDate,
            end_date: enDate
            
        }
        fetch(fetchLink + '/api/project/'+projID, {           
        method: 'PATCH',
        body: JSON.stringify(projData),
        headers: {
            'Content-Type': 'application/json'
        },
        }).then(res => res.json()).then(data => console.log(data));
  }

    const handleUpdate = () => {
        if(value == null || hoursWorked < 0){
            alert("Please check input fields.")
        }else{
            let stat = ""
            for(let i=0;i<items.length;i++){
                if(items[i].value == value){
                    stat = items[i].label
                    break
                }
            }

            let taskID = task._id

            let stDate = formatDate(task.start_date)
            let enDate = formatDate(task.end_date)
            let complete = formatDate(new Date())
            let taskData;
            if(stat == "Completed"){
                taskData = {
                status: stat,
                post_hours: {hoursWorked: hoursWorked},
                start_date: stDate,
                end_date: enDate,
                completed_date: complete
            }

            updateCompleteTaskNumber(project.task_complete + 1)

            }else{
                    taskData = {
                    status: stat,
                    post_hours: {hoursWorked: hoursWorked},
                    start_date: stDate,
                    end_date: enDate,
                    completed_date: null
            }
            updateCompleteTaskNumber(project.task_complete - 1)
        }
            fetch(fetchLink + '/api/task/'+taskID, {           //THIS IS FOR ANDROID EMULATOR! MIGHT BE DIFFERENT FOR OTHER DEVICES.
            method: 'PATCH',
            body: JSON.stringify(taskData),
            headers: {
                'Content-Type': 'application/json'
            },
            }).then(res => res.json()).then(data => console.log(data));
            alert("Task was updated Successfully!")


            navigation.pop()
            navigation.pop()
            navigation.replace("Home")
        }

    }
    useEffect(() => {
        if(task.post_hours != null){
        setHoursWorked(task.post_hours.hoursWorked)
        }

        if(task.status == "To-Do"){
            setValue(0)
        }else if(task.status == "Ongoing"){
            setValue(1)
        }else{
            setValue(2)
        }
      }, []);



    return (

        
        <SafeAreaView style={general.container}>
            <Pressable onPress={goBack} style={general.returnBtn}>
                <Ionicons name="arrow-back" size={24}  style={{marginRight: 15}} color="#84B026" />
                <Text style={general.headline}>Task Detail</Text>
            </Pressable>

            <View style={[general.fullW, general.paddingH]}>
                <Text style={general.whiteTxt}>Task Name: {task.name}</Text>
                <Text style={general.whiteTxt}>Task Description: {task.description}</Text>

                <Text style={general.whiteTxt}>Assigned To:</Text>
                <Text style={general.whiteTxt}>{task.assName}</Text>

                <Text style={general.whiteTxt}>Start Date:</Text>
                <Text style={general.whiteTxt}>{formatDate(task.start_date)}</Text>
                
                <Text style={general.whiteTxt}>Due Date:</Text>
                <Text style={general.whiteTxt}>{formatDate(task.end_date)}</Text>

                {/* <Text style={general.whiteTxt}>Created By:</Text>
                <Text style={general.whiteTxt}>{task.created_by}</Text>*/}
                
          </View>

                
                


                {userLoggedIn._id != task.assigned_to.id ? null:

                <View style={[general.fullW, general.paddingH]}>
                <Text style={general.whiteTxt}>Edit the status of the task:</Text>

                <DropDownPicker
                open={open}
                value={value}
                items={items}
                style={{ marginBottom: 15, marginTop: 5 }}
                placeholder="None"
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems} />

                <Text style={general.whiteTxt}>Enter how many hours you worked in this task:</Text>
                <TextInput style={general.inputs} defaultValue={String(hoursWorked)} placeholder='Hours' onChangeText={text => setHoursWorked(text)} keyboardType='numeric'/>

                <Pressable style={[general.btn, general.btnGreen]} onPress={() => handleUpdate()}>
                <Text style={general.btnTxt}>Update Task</Text>
                </Pressable>
                </View>


                }
               

                
               

           
        </SafeAreaView>
    );
}